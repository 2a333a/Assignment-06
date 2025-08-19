<!-- Include EmailJS SDK -->
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // from EmailJS dashboard
  })();

  const form = document.getElementById("contact-form");
  const statusMessage = document.getElementById("status-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(() => {
        statusMessage.textContent = "Message sent successfully!";
        statusMessage.style.color = "lightgreen";
        form.reset();
      }, (error) => {
        statusMessage.textContent = "Failed to send. Try again later.";
        statusMessage.style.color = "tomato";
        console.error("EmailJS Error:", error);
      });
  });
</script>