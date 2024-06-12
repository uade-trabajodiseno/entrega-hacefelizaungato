document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let interest = document.getElementById('interest').value;
    let mensaje = document.getElementById('message').value;
    
    let emptyFields = [];

    if (name === '') {
        emptyFields.push('Nombre');
        document.getElementById('name').classList.add('invalid-input');
    } else {
        document.getElementById('name').classList.remove('invalid-input');
    }
    if (lastName === '') {
        emptyFields.push('Apellido');
        document.getElementById('last-name').classList.add('invalid-input');
    } else {
        document.getElementById('last-name').classList.remove('invalid-input');
    }
    if (email === '') {
        emptyFields.push('Email');
        document.getElementById('email').classList.add('invalid-input');
    } else {
        document.getElementById('email').classList.remove('invalid-input');
    }
    if (interest === '') {
        emptyFields.push('Interés');
        document.getElementById('interest').classList.add('invalid-input');
    } else {
        document.getElementById('interest').classList.remove('invalid-input');
    }
    if (mensaje === '') {
        emptyFields.push('Mensaje');
        document.getElementById('message').classList.add('invalid-input');
    }
    else {
        document.getElementById('message').classList.remove('invalid-input');
    }
    if (emptyFields.length > 0) {
        Toastify({
            text: "Completar los siguientes campos: " + emptyFields.join(', '),
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
              background: "linear-gradient(to bottom, #FF6B6B, #FF8E8E)",
            },
            onClick: function(){}
          }).showToast();
    } else {
        Toastify({
            text: "Formulario envíado correctamente. Gracias por contactarnos, " + name,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to bottom, #63FF84, #7FFFAD)",
            },
            onClick: function(){}
          }).showToast();
    }
});



let currentUrl = encodeURIComponent(window.location.href);

  function shareFacebook() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + currentUrl, '_blank');
  }

  function shareTwitter() {
    let text = encodeURIComponent('¡Adoptemos un gatito!');
    window.open('https://twitter.com/intent/tweet?text=' + text + '&url=' + currentUrl, '_blank');
  }

  function shareWhatsApp() {
    let text = encodeURIComponent('Te parece si hacemos feliz a un gato?');
    window.open('https://api.whatsapp.com/send?text=' + text + '%20' + currentUrl, '_blank');
  }

  function shareEmail() {
    let subject = encodeURIComponent('Hace feliz a un gatito');
    let body = encodeURIComponent('Mirá qué copado el laburo de esta ONG! Hagamos feliz a un gato: ' + currentUrl);
    window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
  }

  function printPage() {
    window.print();
  }