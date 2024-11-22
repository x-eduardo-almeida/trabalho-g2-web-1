
function sendForms(event) {
    event.preventDefault();
    let emailInput = document.getElementById("email-input");
    let topicInput = document.getElementById("about-input");
    let emailTextarea =document.getElementById("textarea-email");

    let email = emailInput.value;
    let topic = topicInput.value;
    let message = emailTextarea.value;
    
    emailInput.value = "";
    topicInput.value = "";
    emailTextarea.value = "";

    alert("email: " + email + "\ntopic: " + topic + "\nmessage: " + message);
}