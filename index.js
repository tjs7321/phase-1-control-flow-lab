function scuberGreetingForFeet(i){
  let response
  if (i <= 400) {
    response = 'This one is on me!'
  }
  else if (i <= 2000) {
    response = 'That will be twenty bucks.'
  }
  else if (i <= 2500) {
    response = 'I will gladly take your thirty bucks.'
  }
  else if (i > 2500) {
    response = 'No can do.'
  }
  return response
}

function ternaryCheckCity(c){
  let response2
  if (c == "NYC") {
    response2 = 'Ok, sounds good.'
  }
  else {
    response2 = 'No go.'
  }
  return response2
}

function switchOnCharmFromTip(t){
  let response3
  if (t === 'generous') {
    response3 = "Thank you so much."
  }
  else if (t === 'not as generous') {
    response3 = "Thank you."
  }
  else {
    response3 = "Bye."
  }
  return response3
}