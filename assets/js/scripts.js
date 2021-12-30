var currentNumberWappper = document.getElementById("currentNumber");
var currentNumber = parseInt(currentNumberWappper.innerHTML);


document.getElementById("increment").addEventListener("click", function() {
    
    currentNumber = currentNumber + 1;
    console.log(currentNumber);
    currentNumberWappper.innerHTML = currentNumber;
  });

  document.getElementById("decrement").addEventListener("click", function() {
    
    currentNumber = currentNumber -1;
    console.log(currentNumber);
    currentNumberWappper.innerHTML = currentNumber;
  });
 