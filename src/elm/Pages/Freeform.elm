module Pages.Freeform exposing
  ( view
  )

{- Imports ------------------------------------------------------------------ -}
import Html exposing (Html)
import Html.Attributes

import Data.Freeform exposing (Freeform)

import Ui.Section

{- Types -------------------------------------------------------------------- -}
type alias Data model =
  { model
  | freeform : List Freeform
  }

type alias Events msg =
  { responseUpdated : Int -> String -> msg
  }

{- View --------------------------------------------------------------------- -}
view : Data model -> Events msg -> List (Html msg)
view model { responseUpdated } =
  [ Html.main_
    [ Html.Attributes.class "container md:mx-auto px-4 pt-8" ]
    <| ( Ui.Section.empty
        |> Ui.Section.withTitle (
          "This section is all about your experiences using JavaScript, Elm, and "
              ++ "other languages when building Web applications." 
        )
        |> Ui.Section.withDescription (
          "When considering each statement, think about how you approach a "
              ++ "typical web application project and answer accordingly. You "
              ++ "may adopt different programming practices if you do both "
              ++ "professional and hobby development. Try to approach these "
              ++ "statements thinking about the programming practice that you "
              ++ "prefer. It's important to stress that there are no right or "
              ++ "'best' responses to each of these statements."
        )
        |> Ui.Section.toHtml
    ) :: ( model.freeform |> List.indexedMap (\i freeform ->
        Data.Freeform.toHtml (responseUpdated i) freeform
    ))
  , Html.footer
    [ Html.Attributes.class "flex mt-4 py-2 container md:mx-auto px-4 pb-8" ]
    [ Html.a
      [ Html.Attributes.class 
          <| "flex-1 mr-10 bg-transparent hover:bg-blue-500 text-blue-700 "
          ++ "font-semibold hover:text-white py-2 px-4 border border-blue-500 "
          ++ "hover:border-transparent rounded"
      , Html.Attributes.href "#2" 
      ]
      [ Html.text "back" ]
    , Html.a
      [ Html.Attributes.class 
          <| "flex-1 ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold "
          ++ "py-2 px-4 rounded"
      , Html.Attributes.href "#success" 
      ]
      [ Html.text "next" ]
    ]
  ]
