let handleParsentButton = document.getElementById("button");
let show = document.getElementById("show");
let showHistory = document.getElementById("history");

handleParsentButton.addEventListener("click", function (e) {
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
    let data = (show.innerText =
      "Rejection Percentage: " + result.toFixed(2) + "%");
    window.localStorage.setItem("data", data);
    document.getElementById("totalItems").value = ""; // reset
    document.getElementById("numRejected").value = ""; // reset
  } else {
    show.innerText = "Please enter valid values.";
  }
});
let getData = window.localStorage.getItem("data");
showHistory.innerText = "Previous result : " + getData;
