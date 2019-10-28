/* Given Code, don't edit */

function handleClick(e) {
  // debugger
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time_string){
  let hour = time_string.split(':')
  let hours = parseInt(hour[0],10)

  if (hours < 12){
    return "Good Morning"
  }
  else if (hours >= 12 && hours < 17){
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}

