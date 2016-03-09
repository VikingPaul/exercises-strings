function reversal(words) {
  document.getElementById('placement').innerHTML = words.split("").reverse().join("")
}

function alphabits(words) {
  document.getElementById('placement2').innerHTML = words.split("").sort().join("")
}

function palindrome(words) {
  if (words === words.split("").reverse().join("")) {
    document.getElementById('placement3').innerHTML = "Your string is a palidrome"
  } else {
    document.getElementById('placement3').innerHTML = "Your string is not a palidrome"
  }
}
document.getElementById('button').addEventListener("click", function() {
  var testString = document.getElementById('words').value;
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
})