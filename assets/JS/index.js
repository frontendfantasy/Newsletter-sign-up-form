var btn = document.querySelector('.btn');
// var btn = document.querySelectorAll('.btn');
var card = document.querySelector('.card');
var successCard = document.querySelector('.success-card');


// btn.array.forEach(element => {
//         addEventListener('click', function() {

btn.addEventListener('click', function() {

   if(successCard.classList.contains('visibility-hidden')) {
        successCard.classList.remove('visibility-hidden');
        card.classList.add('visibility-hidden');
}
else {
        successCard.classList.add('visibility-hidden');
        card.classList.remove('visibility-hidden');
        }
   });
