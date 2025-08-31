function sendToWhatsApp(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  console.log("🚀 sendToWhatsApp triggered!");
  console.log("Captured Data →", { name, phone, message });

  let whatsappUrl = "https://wa.me/918825114380?text=" 
      + "Hello, my name is " + name 
      + ". My phone is " + phone 
      + ". Message: " + message;

  console.log("Generated WhatsApp URL:", whatsappUrl);

  // Redirect user to Thank You page
  window.location.href = "thankyou.html";

  // Open WhatsApp chat
  window.open(whatsappUrl, "_blank");

  console.log("✅ Redirecting to thankyou.html and opening WhatsApp...");
}
