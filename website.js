// Add a dot (.) before the class name just like in CSS
const Result = document.querySelector(".Result");
const DataName = document.querySelector(".DataName");
const Submit = document.querySelector(".Submit");

Submit.onclick = function () {
    let Data = DataName.value.trim().toLowerCase();

    if (Data == "kirby mota") {
        Result.textContent = "HAPPY BIRTHDAY";
    } else {
        Result.textContent = "Not kirby";
    }
};