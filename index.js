let viewBtn=document.getElementById("view-btn")
let joinBtn=document.getElementById("join-btn")
let viewSection=document.getElementById("view")
let joinSection=document.getElementById("join")
let viewBtnimg=document.getElementById("viewimg");
let joinBtnimg=document.getElementById("joinimg");
let img=document.getElementById("chng-imgs");
viewBtn.addEventListener("click", ()=>{

viewSection.classList.add("d-flex")
viewSection.classList.remove("d-none")
joinSection.classList.add("d-none")
joinBtn.classList.remove("active")
viewBtn.classList.add("active")
viewBtnimg.src="./img/view.png";
joinBtnimg.src="./img/database.png"


});
joinBtn.addEventListener("click", ()=>{
viewSection.classList.add("d-none")
joinSection.classList.add("d-flex")
joinSection.classList.remove("d-none")
joinBtn.classList.add("active")
viewBtn.classList.remove("active")
viewBtnimg.src="./img/View-dark.svg";
joinBtnimg.src="./img/Join-Light.svg"
});

$('.count').counterUp({
    delay: 10,
    time: 1000,
  });





//   ========================================
//                 Note
// please write all of your javascript/jQuery code above this
// ==========================================
$(document).ready(function(){
$('.fadeInTopLeft').waypoint(function(direction){
    $('.fadeInTopLeft').addClass('animate__animated animate__fadeIn')
},{
    offset:'100%'
})
$('.slide').waypoint(function(direction){
    $('.slide').addClass('animate__animated animate__fadeIn')
},{
    offset:'60%'
})
$('.Number1').waypoint(function(direction){
    $('.Number1').addClass('animate__animated animate__fadeInLeft')
},{
    offset:'60%'
})
$('.Number2').waypoint(function(direction){
    $('.Number2').addClass('animate__animated animate__fadeIn')
},{
    offset:'60%'
})
$('.Number3').waypoint(function(direction){
    $('.Number3').addClass('animate__animated animate__fadeInLeft')
},{
    offset:'60%'
})
$('.Number4').waypoint(function(direction){
    $('.Number4').addClass('animate__animated animate__fadeIn')
},{
    offset:'60%'
})
$('.Number5').waypoint(function(direction){
    $('.Number5').addClass('animate__animated animate__fadeInLeft')
},{
    offset:'60%'
})
$('.Number6').waypoint(function(direction){
    $('.Number6').addClass('animate__animated animate__fadeIn')
},{
    offset:'60%'
})
$('.Number7').waypoint(function(direction){
    $('.Number7').addClass('animate__animated animate__fadeInLeft')
},{
    offset:'60%'
})


});