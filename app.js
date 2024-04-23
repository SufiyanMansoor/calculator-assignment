let string = "";
let memory = 0; // Variable to store memory value
let buttons = document.querySelectorAll(".button1");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = eval(string);
        document.querySelector(".input").value = string;
      } catch (error) {
        document.querySelector(".input").value = "Error";
      }
    } else if (e.target.innerHTML === "C") {
      string = "";
      document.querySelector(".input").value = string;
    } else if (e.target.innerHTML === "M+") {
      memory += parseFloat(string) || 0; // Add current value to memory
      string = "";
      document.querySelector(".input").value = memory;
    } else if (e.target.innerHTML === "M-") {
      memory -= parseFloat(string) || 0; // Subtract current value from memory
      string = "";
      document.querySelector(".input").value = memory;
    } else if (e.target.innerHTML === "%") {
      string = (parseFloat(string) / 100).toString(); // Calculate percentage
      document.querySelector(".input").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector(".input").value = string;
    }
  });
});
