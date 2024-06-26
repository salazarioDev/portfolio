function sendMessage() {   
    var username = document.querySelector("#username").value;
    var email = document.querySelector("#email").value;
    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#message").value;
    
    if (!username || !email || !subject || !message) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "All fields are required. Please fill in all fields."
        });
        return;
    }
    
    process.env.PUBLIC_KEY;
    process.env.SERVICE_ID;
    process.env.TEMPLATE_ID;

    emailjs.init("PUBLIC_KEY");
    
    var serviceId = "SERVICE_ID";
    var templateId = "TEMPLATE_ID";
    
    var params = {
        username: username,
        email: email,
        subject: subject,
        message: message
    };
    
    emailjs.send(serviceId, templateId, params)
        .then(res => {
            Swal.fire("Your message has been sent successfully!");

            document.querySelector("#username").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#subject").value = "";
            document.querySelector("#message").value = "";
        })
        .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "It was not possible to send the message."
            });
        });
}







let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });





    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);



    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
    
};





ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 300 
});




ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .about-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content, .home-content p, .about-content, .heading, .home-content h1, .about-content p, .heading h2', { origin: 'left' });






function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  
  function closeModal() {
    document.querySelectorAll('.modal').forEach(function(modal) {
      modal.style.display = 'none';
    });
  }