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
    
    // Quiz data containing questions, possible options, and the correct answers
    const quizData = [
        {
            question: "Identify typical test objectives",
            options: [
                "No answer", 
                "A - To prove that there are no unfixed defects in the system under test", 
                "B - To prove that there will be no failures after the implementation of the system into production", 
                "C - To reduce the risk level of the test object and to build confidence in the quality level", 
                "D - To verify that there are no untested combinations of inputs"],
            answer: "C - To reduce the risk level of the test object and to build confidence in the quality level"
        },
        {
            question: "What is the main difference between testing and debugging?",
            options: [
                "No answer", 
                "A - Testing is the process of finding defects, while debugging is the process of fixing defects.", 
                "B - Testing verifies requirements, while debugging verifies design.", 
                "C - Testing is the process of running software, while debugging is the process of analyzing the software.", 
                "D - Testing is the process of defect prevention, while debugging is the process of defect elimination."],
            answer: "A - Testing is the process of finding defects, while debugging is the process of fixing defects."
        },
        {
            question: "You are part of a team testing a new system. You've noticed that no changes have been made to the existing regression test cases for several iterations, and no new bugs have been uncovered by regression testing. Your manager is satisfied, but you are not. Which testing principle best explains your skepticism?",
            options: [
                "No answer", 
                "A - Old tests become less effective", 
                "B - Absence-of-errors fallacy", 
                "C - Defects cluster together", 
                "D - Exhaustive testing is impossible"],
            answer: "A - Old tests become less effective"
        },
        {
            question: "You work in a team that develops a mobile application for ordering food. In the current iteration the team decides to implement the payment functionality. Which of the following activities is a part of test analysis?",
            options: [
                "No answer", 
                "A - Perform the effort estimation for testing the integration of the mobile application with the payment service.", 
                "B - Decide whether to test the ability to split payments among multiple users.", 
                "C - Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid.", 
                "D - Analysis of the deviation between the actual and the expected result after the execution of a test case."],
            answer: "B - Decide whether to test the ability to split payments among multiple users."
        },
        {
            question: "Which of the following statements BEST describes how value is added by establishing and maintaining traceability between the test base and the test ware?",
            options: [
                "No answer", 
                "A - Maintenance testing can be fully automated on the basis of changes to the original requirements.", 
                "B - Whether or not the targeted coverage has been achieved can be more efficiently determined.", 
                "C - The test management role can determine which testers found the defects with the highest severity.", 
                "D - Code areas that may be affected by side effects of a change can be targeted through regression testing."],
            answer: "B - Whether or not the targeted coverage has been achieved can be more efficiently determined."
        },
        {
            question: "Which of the following statements BEST compares the different roles in testing?",
            options: [
                "No answer", 
                "A - The testing role executes test cases, the test management role plans and monitors the testing activities and reports the deviation to all testers.", 
                "B - The testing role performs test analysis and test design activities, creates and executes test cases, and the test management role coordinates testing resources and reports to stakeholders.", 
                "C - The testing role decides the tests to be automated and prioritizes test cases, and the test management role analyzes risks and prioritizes tests.", 
                "D - The testing role performs static and dynamic component testing, and the test management role performs system testing and acceptance testing."],
            answer: "B - The testing role performs test analysis and test design activities, creates and executes test cases, and the test management role coordinates testing resources and reports to stakeholders."
        },
        {
            question: "Which of the following BEST explains a benefit of independence of testing?",
            options: [
                "No answer", 
                "A - The use of an independent test team allows project management to assign responsibility for the quality of the final deliverable to the test team.", 
                "B - If a test team external to the organization can be afforded, then there are distinct benefits in terms of this external team not being so easily swayed by the delivery concerns of project management and the need to meet strict delivery deadlines.", 
                "C - An independent test team can work separately from the developers, need not be distracted with project requirement changes, and can restrict communication with the developers to defect reporting through the defect management system.", 
                "D - When specifications contain ambiguities and inconsistencies, assumptions are made by developers on their interpretation, and an independent test team can be useful in questioning those assumptions and the interpretation made by the developer."],
            answer: "D - When specifications contain ambiguities and inconsistencies, assumptions are made by developers on their interpretation, and an independent test team can be useful in questioning those assumptions and the interpretation made by the developer."
        },
        {
            question: "How is the whole team approach present in the interactions between testers and business representatives?",
            options: [
                "No answer", 
                "A - Business representatives decide together with project management on testautomation approaches.", 
                "B - Testers help business representatives to define test strategy.", 
                "C - Business representatives are not part of the whole team approach.", 
                "D - Testers help business representatives to create suitable acceptance tests"],
            answer: "D - Testers help business representatives to create suitable acceptance tests"
        },
        {
            question: "Which of the following statements BEST describes a good practice for testing that applies to all software development lifecycles?",
            options: [
                "No answer", 
                "A - Testing should be performed only after development is complete.", 
                "B - Testing should be performed under the leadership of development.", 
                "C - Testing should start early in the development process.", 
                "D - Testing should be performed in a development test environment."],
            answer: "D - Testing should be performed in a development test environment."
        },
        {
            question: "Which of the following statements BEST describes the acceptance testdriven development (ATDD) approach?",
            options: [
                "No answer", 
                "A - In ATDD, acceptance criteria are typically created based on the given/when/then format.", 
                "B -  In ATDD, test cases are developed first and then the software is implemented incrementally against the test cases and defined acceptance criteria", 
                "C - In ATDD, tests are derived from acceptance criteria as part of the system design.", 
                "D - With ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand the tests and the defined acceptance criteria."
            ],
            answer: "D - With ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand the tests and the defined acceptance criteria."
        },
    ];

    // DOM elements for the quiz container, submit button, and results display
    const quizElement = document.getElementById("quiz");
    const submitButton = document.getElementById("submit");
    const resultsElement = document.getElementById("results");

    // Initial score and an array to store the user's selected answers for each question
    let score = 0;
    let selectedAnswers = Array(quizData.length).fill("No answer"); // Default answer is "No answer"

    // Function to display all the questions and options on the page
    function showQuestions() {
        quizData.forEach((questionData, index) => {
            // Create a container for each question
            const questionContainer = document.createElement("div");
            questionContainer.classList.add("question-container");

            // Add the question text
            const questionText = document.createElement("div");
            questionText.classList.add("question");
            questionText.innerText = `${index + 1}. ${questionData.question}`; // Display question number and text
            questionContainer.appendChild(questionText);

            // Add buttons for each option
            questionData.options.forEach(option => {
                const optionButton = document.createElement("button");
                optionButton.innerText = option; // Set the button text to the option value
                optionButton.addEventListener("click", () => selectAnswer(index, option, questionContainer)); // Add a click listener
                questionContainer.appendChild(optionButton);
            });

            // Append the question container to the quiz container
            quizElement.appendChild(questionContainer);
        });
    }

    // Function to handle answer selection
    function selectAnswer(questionIndex, selectedOption, container) {
        // Update the selected answer for this question
        selectedAnswers[questionIndex] = selectedOption;

        // Highlight the selected button and reset other buttons in the same question container
        const buttons = container.querySelectorAll("button");
        buttons.forEach(button => {
            if (button.innerText === selectedOption) {
                button.style.backgroundColor = "#add8e6"; // Highlight selected button with light blue
            } else {
                button.style.backgroundColor = ""; // Reset other buttons
            }
        });
    }

    // Function to calculate and display the results when the user submits the quiz
    submitButton.addEventListener("click", () => {
        // Clear previous results (if any)
        resultsElement.innerHTML = "";
        score = 0; // Reset score for this submission

        // Loop through each question to calculate individual scores and display results
        quizData.forEach((question, index) => {
            const userAnswer = selectedAnswers[index]; // Get the user's answer for this question
            const isCorrect = userAnswer === question.answer; // Check if the answer is correct
            const isSkipped = userAnswer === "No answer"; // Check if the question was skipped

            // Create a result block for this question
            const resultItem = document.createElement("div");
            resultItem.classList.add("result");

            // Display question text and user answer
            resultItem.innerHTML = `
                <p>${index + 1}. ${question.question}</p>
                <p>Your answer: <span class="${isCorrect ? 'correct' : isSkipped ? 'skipped' : 'incorrect'}">
                    ${userAnswer}</span></p>
                <p>${isCorrect ? "+2 points" : isSkipped ? "No points" : "-1 point"}</p>
            `;

            // Append the result block to the results container
            resultsElement.appendChild(resultItem);

            // Update the total score based on the user's answer
            if (isCorrect) {
                score += 2; // Add 2 points for a correct answer
            } else if (!isSkipped) {
                score -= 1; // Deduct 1 point for an incorrect answer
            }
        });

        score = Math.max(0, score); // sets score to 0 if it is below 0

        // Display the final score at the end of the results
        const finalScore = document.createElement("div");
        finalScore.classList.add("result");
        finalScore.innerHTML = `
            <h1><span class="${score >= 12 ? 'correct' : 'incorrect'}">Final Score: ${score}/${quizData.length * 2}</span></h1>`; //displays red or green if under or above 12
        resultsElement.appendChild(finalScore);
    });

    // Initialize the quiz by displaying all the questions
    showQuestions();