var eye = document.getElementById('eye')

var position = 50;
var direction = -5;

function eyeMovement(){

  position = position + direction;

  if(position>65){
    direction = -5;
  }

  if(position<35){
    direction = 5;
  }

  eye.style.left= position + "%"

}

//eye.onclick = eyeMovement;

var responses = [
  "Try again" , "Yep", "Nah", "Hidden answer, your question will be answered by time."
]

var result = document.getElementById("message")

result.onclick = giveResponse;

function giveResponse(){
var index = Math.floor(Math.random()*responses.length)
alert(responses[index])

}