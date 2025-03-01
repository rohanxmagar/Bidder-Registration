document.getElementById("bidderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.innerHTML = '<div class="loading"></div> Submitting...';
    submitButton.disabled = true;
    document.getElementById("statusMessage").textContent = "";

    // Simulate form submission with a delay
    setTimeout(() => {
        // Display success message
        document.getElementById("statusMessage").textContent = "✅ Registration Successful!";
        document.getElementById("statusMessage").classList.add('success-message');

        // Reset the form
        document.getElementById("bidderForm").reset();

        // Reset button state
        submitButton.innerHTML = 'Register Team';
        submitButton.disabled = false;
    }, 2000); // Simulate a 2-second delay
});