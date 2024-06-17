let nav = document.querySelector('nav');

function navAnimation(){
    nav.addEventListener('mouseenter', function(){
        let tl = gsap.timeline();
    
        tl.to('.nav-dropdown',{
            height:"25vh"
        });
        tl.to('.nav-list-items h5', {
            display:"block",
        });
        tl.to('.nav-list-items span',{
            y:0,
            stagger:{
                amount:0.6
            }
        });
    });
    
    nav.addEventListener('mouseleave', function(){
        let tl = gsap.timeline();
        tl.to('.nav-list-items span',{
            y:20,
            stagger:{
                amount:0.2
            }
        });
        tl.to('.nav-list-items h5', {
            display:"none",
            duration:0.1
        });
        tl.to('.nav-dropdown',{
            height:"0vh",
            duration:0.2
        });
       
    });
     
}
navAnimation();

let rsDivs = document.querySelectorAll(".rs-div");
let rsDivImgs = document.querySelectorAll(".rs-div img"); 
let playBtn = document.querySelector('.play-button');
let video = document.querySelector('#page3 video');
function articlesHover(){
    rsDivs.forEach(function(e){
        e.addEventListener('mouseenter',function(){
            gsap.to(e.childNodes[1],{
                opacity:1,
                scale:1
            });
        });
        e.addEventListener('mouseleave',function(){
            gsap.to(e.childNodes[1],{
                opacity:0,
                scale:0
            });
        });
        e.addEventListener('mousemove',function(dets){
            gsap.to(e.childNodes[1],{
                x:dets.x - e.getBoundingClientRect().x -90,
                y:dets.y - e.getBoundingClientRect.y -215
            })
        });
    });
}
articlesHover();

function videoAnimation(){
    playBtn.addEventListener('click', function(){
        video.style.display = 'block';
        video.play();
        gsap.to(video, {
            transform:"scaleX(1) scaleY(1)",
            borderRadius:0
        });
    });
    
    video.addEventListener('click', function(){
        video.pause();
        gsap.to(video, {
            transform:"scaleX(0.7) scaleY(0)",
            borderRadius:"30px"
        });
    });
}
videoAnimation();