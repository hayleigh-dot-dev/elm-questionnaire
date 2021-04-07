export const singleResponse = (question, options) => ({
    type: 'SingleResponse',
    question: question,
    response: null,
    options: options.map(text => ({ text, type: 'Fixed' }))
})

export const singleResponseWithOther = (question, options) => ({
    type: 'SingleResponseWithOther',
    question: question,
    response: null,
    options: options.map(text => ({ text, type: 'Fixed' }))
})

export const multipleResponse = (question, options) => ({
    type: 'MultipleResponse',
    question: question,
    response: [],
    options: options.map(text => ({ text, type: 'Fixed' }))
})

export const multipleResponseWithOther = (question, options) => ({
    type: 'MultipleResponseWithOther',
    question: question,
    response: [],
    options: options.map(text => ({ text, type: 'Fixed' }))
})

export const demographics = [
    // Age ---------------------------------------------------------------------
    singleResponse('How old are you?', [
        'Under 18',
        '18-24 years old',
        '25-34 years old',
        '35-44 years old',
        '45-54 years old',
        'Over 55'
    ]),
    singleResponse('How many years experience do you have programming?', [
        'Less than 1 year',
        '1 to 2 years',
        '2 to 5 years',
        'Over 5 years'
    ]),
    singleResponse('How many years experience do you have programming in JavaScript specifically?', [
        'Less than 1 year',
        '1 to 2 years',
        '2 to 5 years',
        'Over 5 years'
    ]),
    singleResponse('How many years experience do you have programming in Elm specifically?', [
        'Less than 1 year',
        '1 to 2 years',
        '2 to 5 years',
        'Over 5 years'
    ]),
    multipleResponseWithOther('Which of the following languages or frameworks have you used for creating Web applications?', [
        'Angular / AngularJS [JavaScript]',
        'ClojureScript',
        'Elm',
        'Imba',
        'PureScript',
        'React [JavaScript]',
        'Svelte',
        'Vue [JavaScript]'
    ]),
    singleResponseWithOther('Which of the following languages or frameworks do you have the most experience creating Web applications with?', [
        'Angular / AngularJS [JavaScript]',
        'ClojureScript',
        'Elm',
        'Imba',
        'PureScript',
        'React [JavaScript]',
        'Svelte',
        'Vue [JavaScript]'
    ]),
]

export default demographics
