// function alternarPopup() {
//   var popup = document.getElementById("popup");
//   if (popup.style.display === "flex") {
//     popup.style.display = "none";
//   } else {
//     popup.style.display = "flex";
//   }
// }

function fecharPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function togglePopup() {
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');

  if (popup.style.display === "flex") {
    popup.style.display = "none";
  } else {
    popup.style.display = "flex";
  }
}
