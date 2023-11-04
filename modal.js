// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll(".modal");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("modal-close-btn ");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  };
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};

// var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".modal-close-btn");
// var overlay = document.querySelector(".overlay")

// function toggleModal() {
//   modal.classList.toggle("show-modal");
//   overlay.classList.toggle('is-visible')
// }

// function windowOnClick(event) {
//   if (event.target === modal) {
//     toggleModal();
//   }
// }

// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);

// var modal_two = document.querySelector(".modal_two");
// var trigger_two = document.querySelector(".trigger_two");
// var closeButton_two = document.querySelector(".modal-close-btn_two");
// var overlay_two = document.querySelector(".overlay_two")

// function toggleModal() {
//   modal_two.classList.toggle("show-modal");
//   overlay_two.classList.toggle('is-visible')
// }

// function windowOnClick(event) {
//   if (event.target === modal_two) {
//     toggleModal();
//   }
// }

// trigger_two.addEventListener("click", toggleModal);
// closeButton_two.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);
