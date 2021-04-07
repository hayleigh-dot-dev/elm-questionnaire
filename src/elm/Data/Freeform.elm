module Data.Freeform exposing
    ( Freeform, init
    , update
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

-- Types -----------------------------------------------------------------------
type alias Freeform =
    { title : String
    , response : String
    }

-- Functions -------------------------------------------------------------------
init : String -> Freeform
init title =
    { title = title
    , response = ""
    }

update : String -> Freeform -> Freeform
update response freeform =
    { freeform | response = response }

-- View ------------------------------------------------------------------------
toHtml : (String -> msg) -> Freeform -> Html msg
toHtml handler freeform =
    Ui.Section.empty
        |> Ui.Section.withTitle freeform.title
        |> Ui.Section.addClass "container mx-auto"
        |> Ui.Section.addChild(
            Html.textarea 
                [ A.class "w-full resize-y p-4"
                , A.value freeform.response
                , E.onInput handler
                ] []
        )
        |> Ui.Section.toHtml

-- JSON ------------------------------------------------------------------------
encode : Freeform -> Encode.Value
encode { title, response } =
    Encode.object
        [ ("title", Encode.string title)
        , ("response", Encode.string response)
        ]

decoder : Decoder Freeform
decoder =
    Decode.map2 Freeform
        (Decode.field "title" Decode.string)
        (Decode.field "response" Decode.string)
