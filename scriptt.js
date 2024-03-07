// Pastikan tidak ada deklarasi variabel 'Email' di tempat lain dalam skrip ini atau di file lain yang dimuat di halaman yang sama.

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const userEmail = document.getElementById("Email"); // Ubah nama variabel menjadi userEmail atau nama lain yang unik
const userPhone = document.getElementById("Phone");
const userSubject = document.getElementById("Subject");
const userMessage = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${userEmail.value}<br> Phone Number ${userPhone.value}<br> Message: ${userMessage.value}<br>`;

  Email.send({
    SecureToken:"4983166a-2654-4feb-92cc-f51fb6088a47", 
    To: 'yakobutama1903@gmail.com',
    From: "yakobutama1903@gmail.com",
    Subject: userSubject.value,
    Body: bodyMessage,
  }).then(
    message => {
      if (message == "OK") {
        Swal.fire({
          tittle: "Success!",
          text: "Message sent successfuly!",
          icon: "Success"
        });
      }
    }
  );
}



form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  sendEmail();
});
