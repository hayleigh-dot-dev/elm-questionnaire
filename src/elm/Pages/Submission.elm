module Pages.Submission exposing
  ( view
  )

{- Imports ------------------------------------------------------------------ -}
import Html exposing (Html)
import Html.Attributes
import Html.Events

{- Types -------------------------------------------------------------------- -}
type alias Events msg =
  { update : String -> msg
  , submit : msg
  }

type alias Data model =
  { model
  | emailSubmitted : Bool
  }


{- View --------------------------------------------------------------------- -}
view : Data model -> Events msg -> List (Html msg)
view data { update, submit } =
  [ Html.main_
    [ Html.Attributes.class "h-screen py-2 container md:mx-auto px-4 flex flex-col align-center items-center justify-center" ]
    [ Html.h1 
      [ Html.Attributes.class "text-3xl mb-2 font-bold" ]
      [ Html.text "🎉 Success! 🎉" ]
    , Html.p 
      [ Html.Attributes.class "text-xl"
      ]
      [ Html.text
          <| "Thank you for taking part in our study on programming practice in "
          ++ "the Elm community. If you're interested in being part of "
          ++ "further studies on this topic in the future, you can enter your email "
          ++ "down below. If not, you're done! You can safely navigate away from "
          ++ "this page."
      ]
    , Html.div
      [ Html.Attributes.class "mt-8 w-full"]
      [ Html.span
        [ Html.Attributes.class "mr-2" ]
        [ Html.text "email: "]
      , Html.input
        [ Html.Attributes.class "mr-4 bg-gray-200 rounded p-2 hover:bg-gray-300"
        , Html.Attributes.type_ "email"
        , Html.Events.onInput update
        ] []
      , Html.button
        [ Html.Attributes.class "border border-black rounded px-2 hover:bg-blue-100"
        , Html.Events.onClick submit ]
        [ Html.text "Submit" ]
      ]
    , if data.emailSubmitted then
        Html.p
          [ Html.Attributes.class "text-green-500 text-lg" ]
          [ Html.text "Thank you for registering your interest!" ]
      else
        Html.text ""
    ]
  ]

