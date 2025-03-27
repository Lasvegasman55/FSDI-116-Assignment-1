// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get hamburger menu element
    const hamburger = document.querySelector('.hamburger-menu');
    const navOptions = document.querySelector('.nav-options');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-options a');
    
    // Log elements to debug
    console.log('Hamburger element found:', hamburger);
    console.log('Nav options element found:', navOptions);
    
    // Add click event listener to hamburger menu
    hamburger.addEventListener('click', function(e) {
        // Prevent default behavior
        e.preventDefault();
        
        // Toggle active class on hamburger menu
        this.classList.toggle('change');
        
        // Toggle active class on nav options
        navOptions.classList.toggle('active');
        
        // Log the action for debugging
        console.log('Hamburger clicked, nav active:', navOptions.classList.contains('active'));
    });
    
    // Add click event listeners to all navigation links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove active class from hamburger menu
            hamburger.classList.remove('change');
            // Remove active class from nav options
            navOptions.classList.remove('active');
            
            // Set active class on clicked link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add scroll event listener to shrink header on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Highlight active section on scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Simple form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation logic could go here
            
            // Show success message (in a real app, you would send the form data to a server)
            alert('Thanks for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }
    
    // Log to confirm script is loaded
    console.log('Hamburger menu script loaded and initialized');
});