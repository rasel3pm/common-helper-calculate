let handleButton = document.getElementById("button");
let show = document.getElementById("show");

handleButton.addEventListener("click", function (e) {
  e.preventDefault();
  let totalItems = document.getElementById("totalItems").value;
  let numRejected = document.getElementById("numRejected").value;
  if (totalItems === "") {
    alert("Please Enter Total Goods");
    return false;
  }
  if (numRejected === "") {
    alert("Please Enter Rejected Number");
    return false;
  }

  if (!isNaN(totalItems) && !isNaN(numRejected) && totalItems !== 0) {
    let result = (numRejected / totalItems) * 100;
    show.innerText = "Rejection Percentage: " + result + "%";
  } else {
    show.innerText = "Please enter valid values.";
  }
});
