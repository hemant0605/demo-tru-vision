function sendToWhatsApp(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let whatsappUrl = "https://wa.me/918827306548?text=" 
      + "Hello, my name is " + name 
      + ". My phone is " + phone 
      + ". Message: " + message;

  // Redirect user to Thank You page
  window.location.href = "thankyou.html";

  // Also open WhatsApp chat
  window.open(whatsappUrl, "_blank");
}
