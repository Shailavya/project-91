player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1name").innerHTML = player1name + " : ";
document.getElementById("player2name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("playerquestion").innerHTML = "Question turn - " + player1name;
document.getElementById("playeranswer").innerHTML = "Answer turn - " + player2name;

function send() {
    number1 = document.getElementById("number1input").value;
    number2 = document.getElementById("number2input").value;

    actual_answer = parseInt(number1) *parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer: <input type='text' id='inputcheckbox'>";
    checkbutton = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + checkbutton;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1input").innerHTML = "";
    document.getElementById("number2input").innerHTML = "";

}