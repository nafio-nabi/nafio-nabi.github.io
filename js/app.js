document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.getElementById('navbar-toggler');
    var navLinks = document.querySelectorAll('.nav-link');
    var offset = 185; // Adjust this value to set the offset

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
        var targetId = link.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);

        if (targetElement) {
            event.preventDefault();
            var elementPosition = targetElement.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
            });

            if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
            }
        }
    });
});
});