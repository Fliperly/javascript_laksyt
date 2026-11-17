const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');

trigger.addEventListener('mouseover', function() {
    target.src = 'picB.jpg';
});
