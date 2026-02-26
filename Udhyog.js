let current = 0;
const fieldsets = document.querySelectorAll("fieldset");
const progressItems = document.querySelectorAll("#progressbar li");

document.querySelectorAll(".next").forEach(button => {
  button.addEventListener("click", function() {
    if (current < fieldsets.length - 1) {
      fieldsets[current].style.display = "none";
      current++;
      fieldsets[current].style.display = "block";
      progressItems[current].classList.add("active");
    }
  });
});

document.querySelectorAll(".previous").forEach(button => {
  button.addEventListener("click", function() {
    if (current > 0) {
      fieldsets[current].style.display = "none";
      progressItems[current].classList.remove("active");
      current--;
      fieldsets[current].style.display = "block";
    }
  });
});
