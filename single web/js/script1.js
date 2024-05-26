
document.addEventListener('DOMContentLoaded', function() {
    var natureBox = document.getElementById('natureBox');
    var foodBox = document.getElementById('foodBox');
    var animalsBox = document.getElementById('animalsBox');

    natureBox.addEventListener('click', function() {
        window.location.href = '../home/nature.html'; // Redirect to nature.html
    });

    foodBox.addEventListener('click', function() {
        window.location.href = '../home/food.html'; // Redirect to food.html
    });

    animalsBox.addEventListener('click', function() {
        window.location.href = '../home/animals.html'; // Redirect to animals.html
    });
});
