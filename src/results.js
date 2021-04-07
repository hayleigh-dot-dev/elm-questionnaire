import completeResults from '../assets/responses/complete/*.json'
import partialResults from '../assets/responses/partial/*.json'

// Utils -----------------------------------------------------------------------
const Plotly = window.Plotly
const barChart = results => ({
  x: Object.keys(results),
  y: Object.values(results),
  type: 'bar'
})
const layout = title => ({
  title: title,
  font: {
    family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
  },
  yaxis: {
    zeroline: false,
    gridwidth: 2
  },
  bargap: 0.05
})

// Demographics ----------------------------------------------------------------
const demographicsQuestions = Object
  .values(partialResults)
  .shift()
  .demographics
const demographicsResponses = Object
  .values(partialResults)
  .map(({ demographics }) => demographics)
const demographicsContainer = document.querySelector('#demographics')

function singleResponseResults (options, responses) {
  return responses.reduce(
    // Reduce function
    (results, { response: { text } }) =>
      ({ ...results, [text]: results[text] + 1 }),

    // Initial value
    Object.fromEntries(
      options.map(({ text }) => [text, 0])
    )
  )
}

function singleResponseWithOtherResults (options, responses) {
  return responses.reduce(
    // Reduce function
    (results, { response: { text } }) =>
      results[text]
        ? ({ ...results, [text]: results[text] + 1 })
        : ({ ...results, [text]: 1 }),

    // Initial value
    Object.fromEntries(
      options.map(({ text }) => [text, 0])
    )
  )
}

function multipleResponseWithOtherResults (options, responses) {
  return responses.reduce(
    // Reduce function
    (results, { response }) =>
      response.reduce(
        // A-another reduce function
        (results, { text }) =>
          ({ ...results, [text]: results[text] + 1 }),

        // Initial value
        results
      ),

    // Initial value
    Object.fromEntries(
      options.map(({ text }) => [text, 0])
    )
  )
}

demographicsQuestions.forEach(({ question, options, type }, i) => {
  const el = document.createElement('figure')
  const responses = demographicsResponses.map(response => response[i])
  const results = (() => {
    switch (type) {
      case 'SingleResponse':
        return singleResponseResults(options, responses)

      case 'SingleResponseWithOther':
        return singleResponseWithOtherResults(options, responses)

      case 'MultipleResponseWithOther':
        return multipleResponseWithOtherResults(options, responses)
    }
  })()

  demographicsContainer.appendChild(el)
  Plotly.newPlot(el, [barChart(results)], layout(question))
})

// Likert scales ---------------------------------------------------------------
const likertQuestions = Object
  .values(partialResults)
  .shift()
  .likertScales
const likertResponses = Object
  .values(partialResults)
  .map(({ likertScales }) => likertScales)
const likertContainer = document.querySelector('#likerts')

const ratingColours = {
  'Strongly Agree': '#00876c',
  Agree: '#8bbaab',
  Neutral: '#eeeeee',
  Disagree: '#ea9b9c',
  'Strongly Disagree': '#d43d51'
}

likertQuestions.forEach(({ title, statements, ratings }, i) => {
  const el = document.createElement('figure')
  const responses = likertResponses
    .map(response => response[i].statements)
    .reduce(
      // Reduce function
      (results, statements) => {
        statements.forEach(({ rating }, i) => results[i][rating]++)

        return results
      },

      // Initial value
      statements.map(
        () => ({ ...ratings.reduce((o, k) => ({ ...o, [k]: 0 }), {}) })
      )
    )

  const xValues = statements.map(({ statement }) => statement)

  likertContainer.appendChild(el)
  Plotly.newPlot(
    el,
    ratings.map((rating, i) => ({
      x: xValues,
      y: responses.map(r => r[rating]),
      type: 'bar',
      name: rating,
      marker: {
        color: ratingColours[rating]
      }
    })),
    layout(title)
  )
})

// QSort exercise --------------------------------------------------------------
const qsort =
  Object.values(completeResults)
    .filter(({ qsort }) => qsort)
