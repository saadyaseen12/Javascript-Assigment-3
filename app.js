var celsius = prompt("Enter the current temperature in Celcius");
celsius = Number(celsius);
if (isNaN(celsius)) {
    alert("Please enter a valid number");
} else {
    if (celsius > 30) {
        alert("It's a hot day!");
    } else {
        alert("The weather is moderate");
    }
}


var maxMarks = 100;
var passMarks = 33;


function calculate() {
  
  var name = nameInput.value;
  var maths = Number(mathsInput.value);
  var english = Number(englishInput.value);
  var science = Number(scienceInput.value);

  
  if (name === "" || isNaN(maths) || isNaN(english) || isNaN(science)) {
    alert("Please enter valid input");
    return;
  }

  
  var total = maths + english + science;

  
  var result;
  if (maths < passMarks || english < passMarks || science < passMarks) {
    
    result = "Fail";
  } else if (total >= 270) {
    
    result = "Distinction";
  } else if (total >= 210) {
    
    result = "First Class";
  } else if (total >= 150) {
    
    result = "Second Class";
  } else {
    
    result = "Pass";
  }

  
  
}