



    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            
            if(scrollPosition > 100) {  // Simplified scroll threshold for testing
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        });
    });
