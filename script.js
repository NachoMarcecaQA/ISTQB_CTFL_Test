
//Display Greeting message
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