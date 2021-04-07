// Likert scales ---------------------------------------------------------------
export const likertScale = (title, description, statements) => ({
  title: title,
  description: description,
  statements: statements.map(statement => ({ statement })),
  ratings: [
    'Strongly Disagree',
    'Disagree',
    'Neutral',
    'Agree',
    'Strongly Agree'
  ]
})

export const likert = [
  likertScale(
    'In a typical Elm programming project, how well defined is the end goal?',
    'Some programmers have a very clear idea of what the finished piece of software should look like and what it should do. Others take a more exploratory approach. The following statements are about how clearly defined the end-goal of a project is before you start programming.',
    [
      'Before starting to program I have a clear idea what the program will look like.',
      'Before starting to program I have a clear idea how the program will work.',
      'Before starting to program I have a clear idea how to organise my code.',
      'Before starting to program I write down what I need to do.',
      'Before starting to program I sketch or wireframe how the program will look.',
      'It is not usually possible to define a project\'s requirements before starting a project.',
      'I start out by trying a large number of variations of a loose idea before settling on something more concrete.'
    ]
  ),
  likertScale(
    'How much time do you spend on, and how big is, a typical finished Elm programming project?',
    'Some programmers work on projects for many months or even years. Others prefer to work on a project for just a matter of days or hours. The following statements are about how long a typical project takes before you consider it complete, and how large the codebase is when it is finished.',
    [
      'A typical project takes a significant amount of time to complete.',
      'A finished project\'s codebase tends to span multiple files and many lines of code.',
      'I tend to consider a project finished after one or two sessions of programming.',
      'A finished project\'s codebase tends to be made up of just one or two files.',
      'I often edit and re-run the same pieces of code multiple times to see how it changes.',
      'I comment out old bits of code in case I need to go back to them.',
      'I regularly check my code into version control systems such as Git or SVN.'
    ]
  ),
  likertScale(
    'How much does a typical Elm programming project change from beginning to end?',
    'It is not uncommon for a project to change over time. This can be because requirements change, because we come up with new and interesting ideas, or because an idea just didn\'t work out how we expected it to. The following statements are about how a typical project typically changes over time and what the causes for that might be.',
    [
      'A project is only finished when all my tests pass.',
      'I think non-critical bugs can lead to unexpected behaviour that can make a project better or more interesting.',
      'The primary method of interaction in a program has often changed by the time that project is finished.',
      'I am constantly re-evaluating how the system or program should behave.',
      'Working on a project is a creative feedback-loop between the computer and myself.'
    ]
  )
]

export default likert
