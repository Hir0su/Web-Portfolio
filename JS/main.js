/*=========================================================== Toggle Icon Navbar ===========================================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*=========================================================== Scroll Section Active Link ===========================================================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*=========================================================== Sticky Navbar ===========================================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=========================================================== Remove Toggle Icon and Navbar ===========================================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*=========================================================== Scroll Reveal ===========================================================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .requirements-container, ojt-box, .certi-box, .semiwork-box, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*=========================================================== Typed JS ===========================================================*/
const typed = new Typed('.multiple-text', {
    strings: ['an IT Student', 'a Software Developer', 'a Web Developer', 'a Streamer', 'an Athlete'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

const typedTwo = new Typed('.multiple-textTwo', {
    strings: ['Owen', 'Bowen','Gab', 'Hiro', 'Hirosu', 'Hayro'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*=========================================================== Project Modal ===========================================================*/
// Project modal functionality
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalSlidesContainer = document.getElementById('modal-slides-container');
const modalBody = document.getElementById('modal-body');
const modalGithub = document.getElementById('modal-github');
const closeModal = document.querySelector('.close-modal');

const projectDetails = {
    autochart: {
        title: "AutoChart",
        description: "AutoChart is a Python application that allows users to easily create charts from Excel data. It provides a user-friendly graphical interface for selecting Excel files, specifying data ranges, and generating various types of charts.",
        github: "https://github.com/Hir0su/Auto-Chart",
        slides: "https://docs.google.com/presentation/d/e/2PACX-1vTu5GjiPq9SOZwDXNgyqViJSOHxiiUj7PfWluJOBVLbyCr641G8WTCVpDYr9KnB7udG0ret9UKHYsid/embed?start=true&loop=true&delayms=2000"
    },
    
    heywhizzy: {
        title: "Hey Whizzy",
        description: "Hey Whizzy is an innovative interactive voice-assistive kiosk designed to enhance information accessibility and engagement at Mapúa Malayan Colleges Laguna. By leveraging advanced technologies like Raspberry Pi, Flask API, and MySQL, it provides real-time, organized information to students and visitors, making campus navigation and information retrieval seamless and efficient.",
        github: "https://github.com/Hir0su/Hey-Whizzy",
        slides: "https://docs.google.com/presentation/d/e/2PACX-1vTjWYyZhVQp38gvp7lmxTewmg5NWvKaZtBzNR_50Vq20MWDDR4bQihYWiMTJLx7v9Ez8fGJ7c2atZzJ/embed?start=true&loop=true&delayms=2000"
    },

    heyweb: {
        title: "Hey Whizzy:Admin Website",
        description: "Hey Whizzy's Admin website designed to manipulate data for the main kiosk.",
        github: "https://github.com/Hir0su/Hey-Whizzy-Admin-Website",
        slides: "https://docs.google.com/presentation/d/e/2PACX-1vRwTygF6g2NaWjaG9Juzk6_Oq26tUq9zwwrmn0g2lKdZiWbhFfMSSXgSoqW7cy03JNSmtRBVMRJOvqU/embed?start=true&loop=true&delayms=2000"
    },

    gpitch: {
        title: "Guess the Pitch",
        description: "Arduino Machine Problem Project",
        github: "https://github.com/Hir0su/Guess-the-Pitch",
        slides: "https://docs.google.com/presentation/d/e/2PACX-1vQgBQFAvx-v-PbAPY3b5DiLI0xCQxVo2Asyq9Y8FKOqDO97U3_s0TTGa4uW0YimVgeY-rsCxAcmiWUM/embed?start=true&loop=true&delayms=2000",
    },

    equake: {
        title: "Earthquake Sensor",
        description: "Arduino Machine Problem Final Project",
        github: "https://github.com/Hir0su/Earthquake-Detection",
        slides: "https://docs.google.com/presentation/d/e/2PACX-1vSomMrzdWOyNpXbTnMn5FxOeF5CGRVlHSdg3GFmwSE51y1PRcuXmhcN8XQiQfz_Bjz2-AJRVh7AaRTG/embed?start=true&loop=true&delayms=2000",
    },

    ppttopdf: {
        title: "PPT to PDF Module",
        description: "It's a module created for a Web Application in my previous internship company. It is used to convert PPT files to PDF and be directly accessible to a new tab",
        github: "https://github.com/andododo/PPT-to-PDF-Tool",
        slides: "https://docs.google.com/presentation/d/e/2PACX-1vTVKUrO01NvUOWT8ZqSO5l_QvlubBxtnu1ZCmsH4df_gnWrVsjBDi0cIkVWlJF2JyUnB5yhT3E83gdQ/embed?start=true&loop=true&delayms=2000"
    }


};

document.querySelectorAll('.project-details').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const project = projectDetails[button.dataset.project];
        if (project) {
            modalTitle.textContent = project.title;
            modalSlidesContainer.innerHTML = project.slides ? 
                `<iframe src="${project.slides}" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>` : 
                '';
            modalBody.innerHTML = `<p>${project.description}</p>`;
            modalGithub.href = project.github;
            projectModal.style.display = 'block';
        }
    });
});

closeModal.onclick = () => {
    projectModal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target == projectModal) {
        projectModal.style.display = 'none';
    }
};