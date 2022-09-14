function checkNumber(n) {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  for (var i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function writeNumber() {
  var n = +document.getElementById("numberN").value;

  for (var i = 0; i <= n; i++) {
    var isPrime = checkNumber(i);
    if (isPrime) {
      var span = document.createElement("span");
      span.style.margin = "0px 5px";
      span.innerHTML = i;
      document.getElementById("printPrime").appendChild(span);
    }
  }
}
