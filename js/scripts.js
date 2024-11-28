// Function to open the modal
function openModal() {
  document.getElementById("contactModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

// Optional: Close the modal if the user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("contactModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
