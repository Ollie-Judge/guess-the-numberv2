let randomNumber = Math.floor(Math.random() * 10) + 1;

document.getElementById("randomNumberOutput").innerHTML = randomNumber;

document.getElementById("guessButton").onclick = () => {
  if (document.getElementById("guessedNumber").value > randomNumber) {
    document.getElementById("message").innerHTML = "Too High!";
    document.getElementById("message").style.color = "red";
  } else if (document.getElementById("guessedNumber").value < randomNumber) {
    document.getElementById("message").innerHTML = "Too low!";
    document.getElementById("message").style.color = "red";
  } else {
    document.getElementById("message").innerHTML = "Correct!";
    document.getElementById("message").style.color = "green";
  }
};
