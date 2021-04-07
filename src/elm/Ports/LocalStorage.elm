port module Ports.LocalStorage exposing
  ( Action, ResponseType, Response (..), Sequence
  , sequence, chain, commit, commitAction
  , onResponse
  , batch, clear, expectJson, read, write
  )

{- Imports ------------------------------------------------------------------ -}
import Json.Decode
import Json.Encode


{- Ports -------------------------------------------------------------------- -}
port elmToLocalStorage : Json.Encode.Value -> Cmd msg
port localStorageToElm : (Json.Decode.Value -> msg) -> Sub msg


{- Types -------------------------------------------------------------------- -}
type Action tag
  = Batch (List (Action tag))
  | Clear
  | Expect ResponseType tag
  | Read String
  | Write String Json.Encode.Value

type ResponseType
  = All
  | Json

type Response tag
  = GotAll tag (List Json.Decode.Value)
  | GotJson tag Json.Decode.Value
  | Error String

type Sequence tag
  = Sequence (tag -> String) (List (Action tag))

{- Functions ---------------------------------------------------------------- -}
sequence : (tag -> String) -> Sequence tag
sequence tagToString =
  Sequence tagToString []

chain : Action tag -> Sequence tag -> Sequence tag
chain action (Sequence tagToString actions) =
  Sequence tagToString (action :: actions)

commit : Sequence tag -> Cmd msg
commit (Sequence tagToString actions) =
  List.reverse actions
    |> Json.Encode.list (encode tagToString)
    |> elmToLocalStorage

commitAction : (tag -> String) -> Action tag -> Cmd msg
commitAction tagToString action =
  List.singleton action
    |> Json.Encode.list (encode tagToString)
    |> elmToLocalStorage

onResponse : (String -> tag) -> (Response tag -> msg) -> Sub msg
onResponse stringToTag responseToMsg =
  localStorageToElm (\json ->
    case Json.Decode.decodeValue (decoder stringToTag) json of
      Ok response ->
        responseToMsg response

      Err error ->
        responseToMsg <| Error (Json.Decode.errorToString error)
  )


{- Actions ------------------------------------------------------------------ -}
batch : List (Action tag) -> Action tag
batch actions =
  Batch actions

clear : Action tag
clear =
  Clear

expectJson : tag -> Action tag
expectJson tag =
  Expect Json tag

read : String -> Action tag
read key =
  Read key

write : String -> Json.Encode.Value -> Action tag
write key value =
  Write key value


{- Encoders ----------------------------------------------------------------- -}
encode : (tag -> String) -> Action tag -> Json.Encode.Value
encode tagToString action =
  case action of
    Batch actions ->
      Json.Encode.object
        [ ("$", Json.Encode.string "Batch")
        , ("actions", Json.Encode.list (encode tagToString) actions)
        ]

    Clear ->
      Json.Encode.object
        [ ("$", Json.Encode.string "Clear")
        ]

    Expect responseType tag ->
      Json.Encode.object
        [ ("$", Json.Encode.string "Expect")
        , ("tag", Json.Encode.string (tagToString tag))
        , ("responseType", encodeResponseType responseType)
        ]

    Read key ->
      Json.Encode.object
        [ ("$", Json.Encode.string "Read")
        , ("key", Json.Encode.string key)
        ]

    Write key value ->
      Json.Encode.object
        [ ("$", Json.Encode.string "Write")
        , ("key", Json.Encode.string key)
        , ("value", value)
        ]

encodeResponseType : ResponseType -> Json.Encode.Value
encodeResponseType responseType =
  case responseType of
    All   -> Json.Encode.string "All"
    Json  -> Json.Encode.string "Json"


{- Decoders ----------------------------------------------------------------- -}
decoder : (String -> tag) -> Json.Decode.Decoder (Response tag)
decoder stringToTag =
  Json.Decode.field "$" Json.Decode.string |> Json.Decode.andThen (\t ->
    case t of
      "GotAll" ->
        Json.Decode.map2 GotAll
          (Json.Decode.field "tag" (Json.Decode.map stringToTag Json.Decode.string))
          (Json.Decode.field "data" (Json.Decode.list Json.Decode.value))

      "GotJson" ->
        Json.Decode.map2 GotJson
          (Json.Decode.field "tag" (Json.Decode.map stringToTag Json.Decode.string))
          (Json.Decode.field "data" Json.Decode.value)

      "Error" ->
        Json.Decode.map Error
          <| Json.Decode.field "error" Json.Decode.string

      _ ->
        Json.Decode.fail ""
  )
