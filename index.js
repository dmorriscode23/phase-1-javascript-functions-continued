//saturday
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

//monday
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

//Wrapped adjective
function wrapAdjective(symbol = "*") {
    return function(adjective = "special") {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }
  