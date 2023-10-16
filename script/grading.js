let handleGradeButton = document.getElementById("buttonGrade");
let show = document.getElementById("show");
handleGradeButton.addEventListener("click", function (e) {
  e.preventDefault();
  const totalLength = 27; // cm
  let Parsent = document.getElementById("Parsent").value;
  if (Parsent === "") {
    alert("Please Enter Parsent");
    return false;
  }

  if (!isNaN(Parsent)) {
    let result = (Parsent / 100) * totalLength;
    show.innerText = "Result: " + result.toFixed(2) + " cm ";
  } else {
    show.innerText = "Please enter valid values.";
  }
});
