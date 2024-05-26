
document.addEventListener('DOMContentLoaded', function() {
   
    var homeLink = document.getElementById('homeLink');

    homeLink.addEventListener('click', function(event) {
        
        event.preventDefault();

        window.location.href = 'page/home.html';
    });
});
