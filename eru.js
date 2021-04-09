/**const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-links');

hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show'); 
} );**/
$(document).ready(function(){
    $('#hamburger').click(function(){
        $('ul .nav-links').toggleClass('show');
    });
});