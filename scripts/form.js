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
