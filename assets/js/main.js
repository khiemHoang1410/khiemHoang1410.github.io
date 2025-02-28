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
            contactMessenger.textContent = 'Message sent successfully ✅';

            setTimeout(() => {
                contactMessenger.textContent = ''; // Reset message after 5 seconds
            }, 5000);

            contactForm.reset();
        })
        .catch((err) => {
            console.error('Error:', err);
            contactMessenger.textContent = 'Message not sent (service error) ❌';

            setTimeout(() => {
                contactMessenger.textContent = ''; // Reset message after 20 seconds
            }, 20000);
        });
};

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show_scroll') : scrollUp.classList.remove('show_scroll')
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]'); // Chọn tất cả các section có id

const scrollActive = () => {
    const scrollDown = window.scrollY; // Lấy vị trí cuộn trang

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight, // Chiều cao của section
            sectionTop = current.offsetTop - 58, // Vị trí của section (đã trừ đi một khoảng để tính toán)
            sectionId = current.getAttribute('id'), // Lấy id của section
            sectionClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]'); // Thêm dấu ngoặc kép xung quanh sectionId để đảm bảo chính xác

        // Kiểm tra nếu vị trí cuộn trang đang ở trong phạm vi của section hiện tại
        if (scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link'); // Thêm class active-link khi section đang hiển thị
        } else {
            sectionClass.classList.remove('active-link'); // Loại bỏ class active-link khi section không còn hiển thị
        }
    });
}

window.addEventListener('scroll', scrollActive); // Lắng nghe sự kiện scroll


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Kiểm tra nếu theme và icon đã lưu trữ trong local storage
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 0,
    reset: true
})

sr.reveal('.home__perfil, .about__image,.contact__mail', { origin: 'right' });
sr.reveal('.home__name, .home__info,.contact__data, .about__container .section__title-1, .about__info,.contact__social', { origin: 'left' });
sr.reveal('.services__card, .projects__card', { interval: 100 });

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
