/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}

navLink.forEach(element => {
    element.addEventListener('click', linkAction)
});

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHADOW HEADER ====== =========*/


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form');
const contactMessenger = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_iypfb5r', 'template_crsyj5b', '#contact-form', '9n4x5HcUCn7nTFbHT')
        .then(() => {
            contactMessenger.textContent = 'Message sent successfully'

            setTimeout(() => {
                contactMessenger.textContent = '' // Reset message after 5 seconds
            }, 5000);

            contactForm.reset()
        })
        .catch((err) => {
            console.error('Error:', err)
        }, () => { 
            contactMessenger.textContent = 'Message not sent (service error)'
        });
}

contactForm.addEventListener('submit', sendEmail)



/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

// Lắng nghe sự thay đổi giá trị input và textarea
const inputs = document.querySelectorAll('.contact__input, .contact__textarea');

inputs.forEach(input => {
    // Khi input có sự thay đổi (bao gồm autofill)
    input.addEventListener('input', function () {
        // Kiểm tra nếu có giá trị trong input, có thể là do autofill
        if (input.value !== '') {
            input.style.transition = 'background-color 0.5s, color 0.5s';
            input.style.backgroundColor = 'var(--white-color)'; // Màu nền khi có giá trị
            input.style.color = 'var(--black-color)'; // Màu chữ khi có giá trị
        } else {
            input.style.backgroundColor = 'var(--black-color)'; // Màu nền khi không có giá trị
            input.style.color = 'var(--white-color)'; // Màu chữ khi không có giá trị
        }
    });

    // Khi input mất focus (blur)
    input.addEventListener('blur', function () {
        if (input.value !== '') {
            input.style.transition = 'background-color 0.5s, color 0.5s';
            input.style.backgroundColor = 'var(--white-color)';
            input.style.color = 'var(--black-color)';
        } else {
            input.style.transition = 'background-color 0.5s, color 0.5s';
            input.style.backgroundColor = 'var(--black-color)';
            input.style.color = 'var(--white-color)';
        }
    });
});
