// Simple contact form handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");
  const inputs = form.querySelectorAll("input, textarea");

  // Show custom error messages
  inputs.forEach((input) => {
    input.addEventListener("invalid", function (e) {
      e.preventDefault();
      const errorSpan = document.getElementById(
        "error" + input.id.replace("contact", "")
      );

      if (input.validity.valueMissing) {
        errorSpan.textContent = "This field is required.";
      } else if (input.validity.typeMismatch) {
        errorSpan.textContent =
          "Please enter a valid email (e.g., name@example.com).";
      } else if (input.validity.tooShort) {
        errorSpan.textContent = "Message must be at least 10 characters long.";
      } else if (input.validity.patternMismatch) {
        errorSpan.textContent = "Please enter a valid email format.";
      }

      input.classList.add("input-error");
    });

    // Clear errors on input
    input.addEventListener("input", function () {
      const errorSpan = document.getElementById(
        "error" + input.id.replace("contact", "")
      );
      errorSpan.textContent = "";
      input.classList.remove("input-error");
    });
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show success message
    successMessage.style.display = "block";
    successMessage.scrollIntoView({ behavior: "smooth" });

    // Reset form
    form.reset();

    // Hide success after 5 seconds
    setTimeout(() => (successMessage.style.display = "none"), 5000);
  });
});
