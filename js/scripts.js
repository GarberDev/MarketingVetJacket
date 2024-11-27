function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const clinic = document.getElementById("clinic").value;

    // Send email (replace with your actual email sending logic)
    console.log("Sending email with data:", { name, email, clinic });
    // You'll need to use a server-side language or a service like EmailJS to actually send the email

    // Close the modal and optionally display a success message
    closeModal("registerModal");
    alert("Thank you for your interest! We will contact you soon.");
  });
