module Data.Likert exposing
  ( LikertScale, init
  , Rating
  , threePointScale, fivePointScale, sevenPointScale
  , rate
  , toHtml
  , encode, decoder
  )

-- Imports ---------------------------------------------------------------------
import Html as Html exposing (Html)
import Html.Attributes as A
import Html.Events as E
import Json.Encode as Encode
import Json.Decode as Decode exposing (Decoder)
import Ui.Section
import Set exposing (Set)
import Tuple.Extra as Tuple exposing (Tuple)

-- Types -----------------------------------------------------------------------
type alias LikertScale =
  { title : String
  , description : String
  , statements : List Statement
  , ratings : List Rating
  }

type Rating
  = StronglyDisagree
  | Disagree
  | SomewhatDisagree
  | Neutral
  | SomewhatAgree
  | Agree
  | StronglyAgree

-- 
type alias Statement =
  Tuple Rating String

-- Functions -------------------------------------------------------------------
init : String -> String -> Set String -> List Rating -> LikertScale
init title description statements ratings =
  { title = title
  , description = description
  , statements = (Set.toList >> List.map (Tuple.pair Neutral)) statements
  , ratings = ratings
  }

--
threePointScale : String -> String -> Set String -> LikertScale
threePointScale title description statements =
  init title description statements
    [ Disagree
    , Neutral
    , Agree
    ]

--
fivePointScale : String -> String -> Set String -> LikertScale
fivePointScale title description statements =
  init title description statements
    [ StronglyDisagree
    , Disagree
    , Neutral
    , Agree
    , StronglyAgree
    ]

--
sevenPointScale : String -> String -> Set String -> LikertScale
sevenPointScale title description statements =
  init title description statements
    [ StronglyDisagree
    , Disagree
    , SomewhatDisagree
    , Neutral
    , SomewhatAgree
    , Agree
    , StronglyAgree
    ]

--
rate : String -> Rating -> LikertScale -> LikertScale
rate statement rating scale =
  let
    -- Taken from List.Extra; updates an item in a list if it satisfies some
    -- predicate function.
    updateIf : (a -> Bool) -> (a -> a) -> List a -> List a
    updateIf predicate f =
      List.map (\a -> if predicate a then f a else a)

    statements : List Statement
    statements =
      scale.statements |> updateIf
        (Tuple.second >> (==) statement)
        (Tuple.mapFirst (always rating))
  in
  { scale | statements = statements }

-- View ------------------------------------------------------------------------
--
ratingToString : Rating -> String
ratingToString rating =
  case rating of
    StronglyDisagree  -> "Strongly Disagree"
    Disagree          -> "Disagree"
    SomewhatDisagree  -> "Somewhat Disagree"
    Neutral           -> "Neutral"
    SomewhatAgree     -> "Somewhat Agree"
    Agree             -> "Agree"
    StronglyAgree     -> "Strongly Agree"

--
toHtml : (String -> Rating -> msg) -> LikertScale -> Html msg
toHtml handler scale =
  let
    labels : Html msg
    labels =
      viewLabels scale.ratings

    statements : List (Html msg)
    statements =  
      scale.statements |> List.map (viewStatement handler scale.ratings)
  in
  Ui.Section.empty
    |> Ui.Section.withTitle scale.title
    |> Ui.Section.withDescription scale.description
    |> Ui.Section.addClass "container mx-auto"
    |> Ui.Section.addAttr (A.attribute "data-likert" (scale.ratings |> List.length |> String.fromInt))
    |> Ui.Section.addChild (Html.ul [] (labels :: statements))
    |> Ui.Section.toHtml

--
viewStatement : (String -> Rating -> msg) -> List Rating -> Statement -> Html msg
viewStatement handler ratings ( currentRating, statement ) =
  let
    -- 
    radios : List (Html msg)
    radios =
      ratings |> List.map (\r ->
        Html.span [ A.class "flex justify-center" ]
          [ Html.input 
            [ A.type_ "radio", A.checked (r == currentRating)
            , A.class "flex justify-center"
            , E.onClick (handler statement r)
            ]  []
          ]
      )
  in
  Html.li [ A.class "m-2" ]
    ( Html.span [ A.class "mr-8" ] [ Html.text statement ] :: radios )

--
viewLabels : List Rating -> Html msg
viewLabels ratings =
  Html.li [ A.class "mb-4" ]
    ( Html.br [] [] :: (ratings |> List.map (\r ->
      Html.span [ A.class "text-center" ]
        [ Html.text <| ratingToString r ]
    )))

-- JSON ------------------------------------------------------------------------
encode : LikertScale -> Encode.Value
encode { title, description, statements, ratings } =
  let
    encodeStatement : Statement -> Encode.Value
    encodeStatement (rating, statement) =
      Encode.object
        [ ("rating", Encode.string (ratingToString rating))
        , ("statement", Encode.string statement)
        ]
  in
  Encode.object
    [ ("title", Encode.string title)
    , ("description", Encode.string description)
    , ("statements", Encode.list encodeStatement statements)
    , ("ratings", Encode.list Encode.string <| List.map ratingToString ratings)
    ]

decoder : Decoder LikertScale
decoder =
  let
    statementDecoder : Decoder Statement
    statementDecoder =
      Decode.oneOf
        [ Decode.map2 Tuple.pair
            (Decode.field "rating" ratingDecoder)
            (Decode.field "statement" Decode.string)
        , Decode.map (Tuple.pair Neutral)
            (Decode.field "statement" Decode.string)
        ]

    ratingDecoder : Decoder Rating
    ratingDecoder =
      Decode.string |> Decode.andThen (\r ->
        case r of
          "Strongly Disagree" -> Decode.succeed StronglyDisagree
          "Disagree"          -> Decode.succeed Disagree
          "Somewhat Disagree" -> Decode.succeed SomewhatDisagree
          "Neutral"           -> Decode.succeed Neutral
          "Somewhat Agree"    -> Decode.succeed SomewhatAgree
          "Agree"             -> Decode.succeed Agree
          "Strongly Agree"    -> Decode.succeed StronglyAgree
          _                   -> Decode.fail r
      )

  in
  Decode.map4 LikertScale
    (Decode.field "title" Decode.string)
    (Decode.field "description" Decode.string)
    (Decode.field "statements" <| Decode.list statementDecoder)
    (Decode.field "ratings" <| Decode.list ratingDecoder)