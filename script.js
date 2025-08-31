function sendToWhatsApp(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let whatsappUrl = "https://wa.me/918827306548?text=" 
      + "Hello, my name is " + name + 
      ". My phone is " + phone + 
      ". Message: " + message;

  window.location.href = "thankyou.html"; // redirect to thank you page
  window.open(whatsappUrl, "_blank"); // open WhatsApp chat
}
