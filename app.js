(function () {
  const buttons = document.querySelectorAll(".buttons");
  let count = 0;

  //Add event listeners and functionailty to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("lower")) {
        count--;
      } else if (button.classList.contains("higher")) {
        count++;
      }

      //Select the counter text
      const counter = document.querySelector(".counter-number");
      counter.textContent = count;

      if (count < 0) {
        counter.style.color = "white";
      } else if (count > 0) {
        counter.style.color = "green";
      } else {
        counter.style.color = "#333333";
      }
    });
  });
})();
