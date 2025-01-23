
//Displays greeting message, hides signup and shows exam if ok or shows error message
function displayGreeting(){
    event.preventDefault(); // Prevents the form from refreshing the page

    let name = document.getElementById(`welcomeName`).value.toString()
    let surname = document.getElementById(`welcomeSurname`).value.toString()


    if ((name.length >= 3 && name.length <= 30) && (surname.length >= 3 && surname.length <= 30)){  //Checks length
    document.getElementById(`welcomeMessage`).innerHTML = `<h2> Welcome ${name} ${surname}! </h2>`;//writes greeting message
    document.getElementById(`signup`).style.display = `none`; //Hides signup
    document.getElementById(`welcomeMessage`).style.display = `block`; //Shows greeting message
    document.getElementById(`exam`).style.display = `block`; //Shows exam section
    }
    else{ //else shows error message
        document.getElementById(`signupErrorMessage`).style.display = `block`;
        document.getElementById(`signupErrorMessage`).style.color = `red`;
    }
  }

  //Displays the score of the first question
  function correctAnswer(){
    event.preventDefault(); // Prevents the form from refreshing the page
    document.getElementById(`score`).style.display = `block`; //Shows score section

    let selectedAnswer = document.getElementsByName('question001'); //creates array with question001 radio answers

    for (i = 0; i < selectedAnswer.length; i++) {
        if (selectedAnswer[i].checked == true) {//Get the checked answer

            if (selectedAnswer[i].value.toString() == "question001c")// if the right question (C) is selected, score is 1
            document.getElementById(`score`).innerHTML = `<h2> You scored 1 </h2>`;

            else if (selectedAnswer[i].value.toString() == "question001Unanswered") { // if question is left unanswered, score is 0
                document.getElementById(`score`).innerHTML = `<h2> You scored 0 </h2>`;
            }  

            else { //any other is incorrect so score is -1
                document.getElementById(`score`).innerHTML = `<h2> You scored -1 </h2>`;
            }  
        }
        
    }
  }