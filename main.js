window.onload = function() {
  const btn = document.getElementById("convertBtn");

btn.addEventListener("click", () => {
  const inputVal = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  // Input validation
  if (isNaN(inputVal)) {
    result.innerHTML = "<span style='color:red;'>⚠ Please enter a valid number!</span>";
    return;
  }

  let celsius, fahrenheit, kelvin;

  // Conversion logic
  switch(unit) {
    case "c":
      celsius = inputVal;
      fahrenheit = (celsius * 9/5) + 32;
      kelvin = celsius + 273.15;
      break;
    case "f":
      fahrenheit = inputVal;
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = celsius + 273.15;
      break;
    case "k":
      kelvin = inputVal;
      celsius = kelvin - 273.15;
      fahrenheit = (celsius * 9/5) + 32;
      break;
  }

  // Display formatted results
  result.innerHTML = `
    ✅ <strong>Results:</strong><br>
    Celsius: ${celsius.toFixed(2)} °C<br>
    Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
    Kelvin: ${kelvin.toFixed(2)} K
  `;
});
};