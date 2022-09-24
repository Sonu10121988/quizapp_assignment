// print quiz user name
printname = () => {
  const input = document.querySelector(".input_value").value;
  document.querySelector("#dis_name").innerHTML = "Welcome" + " " + input;
};

// dom element variable declaration
const answer_option = document.querySelector(".answer_option");
const continuebtn = document.querySelector(".continue");
const categories = document.querySelector(".categories_box");
const homePage = document.querySelector(".quit");
const infobox = document.querySelector(".info_box");
const nextbtn = document.querySelector("#next");
const option_list = document.querySelector(".answer_option");
const probability = document.querySelector(".pb");
const pipe_citern = document.querySelector(".pc");
const problem_age = document.querySelector(".pa");
const profit_loss = document.querySelector(".pl");
const question_box = document.querySelector(".question_box");
const reset_categorie = document.querySelector("#reset");
const result_box = document.querySelector(".result_box");
const restart = document.querySelector(".restart");
const timer = document.querySelector("#timer");

//result variable
const attemptedQuestions = document.querySelector("#attempted_questions");
const correctAnswers = document.querySelector("#correct_answers");
const percentageOfSuccess = document.querySelector("#percentage_of_success");
const totalTimeTaken = document.querySelector("#total_time_taken");
const totalQuestions = document.querySelector("#total_questions");
const user_Name_Input = document.querySelector("#user_name");

//Getting Dianamically every cataegory code BLOCK
const questionsWrapper = document.querySelector("#questionsWrapper");
const questions = document.querySelector("#questionsWrapper .questions");
const categoryButtons = document.querySelectorAll(".questionsCategory");
//console.log(categoryButtons);

let que_count = 0;
let que_numb = 1;
let score = 0;
let input = "";
let time_taken = 0;
let correctAns = 0;
let totalQuestion = 10;
let wrongAnswers = 0;
let attempt = 0;
let percentage_result = 0;

// if click the continue button you select any category
continuebtn.onclick = () => {
  infobox.classList.remove("activeInfo"); //hide info_box
  categories.classList.add("activeCategories"); //show categories box
};

// you can reset if u want
reset_categorie.onclick = () => {
  infobox.classList.add("activeInfo");
  categories.classList.remove("activeCategories");
};

// Go back home page function 
homePage.onclick = () => {
  infobox.style.display = "block";
  result_box.classList.remove("activeResult");
  infobox.classList.add("activeInfo");
   //question_box.style.display = "none";
   question_box.style.display = "block";
   infobox.style.width = "55vw";
   infobox.style.height = "70vh";
   categories.style.width = "55%";
   que_count = 0;
   que_numb = 1;
};

restart.onclick = () => {
  result_box.classList.remove("activeResult");
  categories.classList.add("activeCategories");
  question_box.style.display = "block";
  categories.style.width = "60%";
  que_count = 0;
  que_numb = 1;
};


let categoryContext;
// This function for every category context
categoryButtons.forEach((button) => {
  button.onclick = (event) => {
    categoryContext = QUESTIONS[event.currentTarget.dataset["category"]];
    infobox.style.display = "none";
    categories.classList.remove("activeCategories");
    questionsWrapper.removeAttribute("hidden");
    showQuestion(0, questions, QUESTIONS[event.currentTarget.dataset["category"]]);
    queCounter(1, QUESTIONS[event.currentTarget.dataset["category"]]);

    // It's for dianimicalyy Topic category name Change
    const categoryName = document.querySelector("#categoryName");
    categoryName.innerHTML =event.currentTarget.dataset["category"];

    // next button for each questions
    const next_btn = document.querySelector("#next");
    next_btn.onclick = () => {
      if (que_count < categoryContext.length - 1) {
        que_count++;
        que_numb++;
        showQuestion(que_count, questions, categoryContext);
        queCounter(que_numb, categoryContext);
      } else {
        console.log("question complete");
        showResult();
      }
    };
  };
});

//legend timer
function queCounter(index, dataSrc) {
  const top_ques_counter = question_box.querySelector(".qucount");
  let totalQuestioncount =
    "<span>" + index + " / " + dataSrc.length + "</span>";
  top_ques_counter.innerHTML = totalQuestioncount;
}

//getting question
function showQuestion(index, elementId, dataSrc) {
  const questionNumber = dataSrc[index].numb;
  const question = dataSrc[index].question;
  
  countdown();
  let que_tag =
    "<span>" + questionNumber + "." + question + "</span>";
  let option_tag = '<span class="option">' + dataSrc[index].options[0] + '</span>' +
    '<span class="option">' +
    dataSrc[index].options[1] +
    '</span>' +
    '<span class="option">' +
    dataSrc[index].options[2] +
    '</span>' +
    '<span class="option">' +
    dataSrc[index].options[3] +
    '</span>';

  elementId.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  //correct answer
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  //debugger;
  let userAns = answer.textContent;
  let correctAns = categoryContext[que_count].answer;
  let scoreShow = document.querySelector("#score");
  scoreShow.innerText = "score";

  let allOptions = option_list.children.length;
  if (userAns == correctAns) {
    answer.classList.add("correct");
    console.log("Answer is correct.");
    score++;
    scoreShow.innerHTML = "Score :" + score;
    correctAns++;
  } else {
    answer.classList.add("incorrect");
    console.log("Answer is wrong.");
    scoreShow.innerHTML = "Score :" + score;

    //if answer is incorrect  then automatically selected the correct answer
    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
      }
    }
  }
  //once user selected disabled all options
  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  nextbtn.style.display = "block";
}

//timer section start here
var timeleft = 300;
var element = document.querySelector("#timer");
var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timeleft == 00) {
    clearTimeout(timerId);
  } else {
    element.innerHTML = timeleft;
    timeleft--;
  }
}
//timer section end here

//show result box after all questions
function showResult() {
  infobox.style.display = "none";
 infobox.classList.remove("activeInfo");
// question_box.style.display = "none";
   question_box.classList.remove("activeQuestion");
  result_box.classList.add("activeResult");

  //user name define in result box
  let name = document.getElementById("user_name");
  const input = document.querySelector(".input_value").value;
  name.innerHTML = input;

  //Total time take this quiz app
  let timesun = timeleft - time_taken - 300;
  let tl = Math.abs(timesun);
  result_box.querySelector("#total_time_taken").innerHTML =
    tl + " Seconds";

  //correct answer for result box
  correct = score;
  correctAns = document.querySelector("#correct_answers").innerHTML = correct;

  //wrong answer for result box
  let wrong = totalQuestion - score;
  wrongAnswers = document.querySelector("#wrong_answers").innerHTML = wrong;

  //Total persantage 
  let percentage = (score / totalQuestion) * 100 + " %";
  percentage_result = document.querySelector(
    "#percentage_of_success"
  ).innerHTML = percentage;
}



