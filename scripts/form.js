const openPopup = document.querySelector(".open_feedback");
const feedbackOverlay = document.querySelector(".feedback-overlay");
const feedbackPopup = document.querySelector(".feedback_popup");
const closePopup = document.querySelector(".close_feedback");
const form = document.querySelector("#feedback_form");
const sendButton = form.querySelector("input[type=submit]");

openPopup.addEventListener("click", () => {
  feedbackOverlay.style.display = "block";

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      feedbackOverlay.style.display = "none";
      sendButton.disabled = false;
      sendButton.value = "Отправить";
    }
  });
});

closePopup.addEventListener("click", () => {
  feedbackOverlay.style.display = "none";
  sendButton.disabled = false;
  sendButton.value = "Отправить";
});

form.addEventListener("submit", (e) => {
  sendButton.value = "Отправляем";
  setTimeout(function() {
    sendButton.value = "Отправлено!";
    sendButton.disabled = true;
  }, 2000); 
  e.preventDefault();
  const formData = new FormData(form);
  fetch("/feedback", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
});


input_name = document.querySelector("#name");
function validName(name) {
  if (name.length === 0) {
    return false;
  }
  return true;
}

input_email = document.querySelector("#email");
const validEmail = (email) => {
  return email.match(
    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/
  );
};


input_message = document.querySelector("#message");
function validMessage(message) {
  if (message === "") {
    return false;
  }
  return true;
}


function handleInput(predicat, element) {
  if (predicat(element.value)) {
    element.classList.remove("invalid");
    element.classList.add("valid");
  } else {
    element.classList.remove("valid");
    element.classList.add("invalid");
  }
}

handleInput(validEmail, input_email);
handleInput(validName, input_name)
handleInput(validMessage, input_message)

input_email.addEventListener("keydown", (e) => {
  handleInput(validEmail, input_email);
});

input_name.addEventListener("keydown", (e) => {
  handleInput(validName, input_name);
});

input_message.addEventListener("keydown", (e) => {
  handleInput(validMessage, input_message);
});





