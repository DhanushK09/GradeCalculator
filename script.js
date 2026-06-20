function calculate() {

    let marks = document.getElementById("marks").value;
    let grade;
    let color;

    if (marks >= 90) {
        grade = "A";
        color = "lightgreen";
    }
    else if (marks >= 75) {
        grade = "B";
        color = "yellow";
    }
    else if (marks >= 50) {
        grade = "C";
        color = "orange";
    }
    else {
        grade = "F";
        color = "red";
    }

    let result = document.getElementById("result");

    result.innerText = "Your Grade: " + grade;
    result.style.color = color;
}