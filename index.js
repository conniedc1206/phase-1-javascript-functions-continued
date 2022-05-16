//Implement a function called saturdayFun. It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "roller-skate".

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

//Implement a function expression called mondayWork. The function should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office"

const mondayWork = function (work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(flair = '*') {
    const innerFunction = function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`
    }
    return innerFunction
}