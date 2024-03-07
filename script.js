const form = document.querySelector('form');
const fullName = document.getElementById('name');
const userEmail = document.getElementById('Email');
const userPhone = document.getElementById('Phone');
const userSubject = document.getElementById('Subject');
const userMessage = document.getElementById('message');

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${userEmail.value}<br> Phone Number ${userPhone.value}<br> Message: ${userMessage.value}<br>`;

  Email.send({
    SecureToken: '4983166a-2654-4feb-92cc-f51fb6088a47',
    To: 'yakobutama1903@gmail.com',
    From: 'yakobutama1903@gmail.com',
    Subject: userSubject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == 'OK') {
      Swal.fire({
        tittle: 'Success!',
        text: 'Message sent successfuly!',
        icon: 'Success',
      });
    }
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  sendEmail();
});

// linkedin
document.addEventListener('DOMContentLoaded', function () {
  var bxllinkedin = document.getElementById('bxllinkedin');

  bxllinkedin.addEventListener('click', function () {
    window.location.href = 'https://www.linkedin.com/in/yakob-utama/';
  });
});
