let popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.top = "50%";
popup.style.left = "50%";
popup.style.transform = "translate(-50%, -50%)";
popup.style.background = "rgb(178, 221, 205)";
popup.style.padding = "20px";
popup.style.border = "1px solid #ddd";
popup.style.borderRadius = "10px";
popup.style.boxShadow = "0 0 40px rgba(0, 0, 0, 1)";
popup.style.display = "none";

let text = document.createElement("p");
text.textContent = "Вы еще здесь?";
popup.appendChild(text);

let closeButton = document.createElement("button");
closeButton.textContent = "Закрыть";
closeButton.style.marginLeft = "22%";
closeButton.style.marginRight = "25%";

closeButton.onclick = function() {
  popup.style.display = "none";
  localStorage.setItem("popupClosed", true);
};
popup.appendChild(closeButton);

document.body.appendChild(popup);

if (localStorage.getItem("popupClosed") === "true") {
  popup.style.display = "none";
} else {
  setTimeout(function() {
    popup.style.display = "block";
  }, 10000); 
}