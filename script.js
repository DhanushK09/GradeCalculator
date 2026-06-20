function calculate() {
    let marks = document.getElementById("marks").value;

    if (marks >= 90)
        result.innerText = "Grade A";
    else if (marks >= 75)
        result.innerText = "Grade B";
    else
        result.innerText = "Grade C";
}