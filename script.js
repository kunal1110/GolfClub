const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}


var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var card = document.querySelectorAll("#card-container .card");
document.addEventListener("mousemove", function(dets)
{crsr.style.left = dets.x+20+"px"
crsr.style.top= dets.y+20+"px"
blur.style.left = dets.x-200+"px"
blur.style.top= dets.y-200+"px"
})

document.addEventListener("mouseenter",function(){
    crsr.style.opacity=1,
    blur.style.opacity=1
});
document.addEventListener("mouseleave", function(){
    crsr.style.opacity=0,
    blur.style.opacity=0

});


var h4all = document.querySelectorAll("#navbar h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "0.3px solid #fff"
        crsr.style.backgroundColor = "transparent"
        // crsr.style.transition=" .1s ease"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border ="0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})

var h1all = document.querySelectorAll(".elem h2")
h1all.forEach(function(elem){
elem.addEventListener("mouseenter", function(){
    crsr.style.scale = 3
    crsr.style.border= "0.3px solid #fff"
    crsr.style.backgroundColor="transparent"
})
elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor= "#95C11E"
})
})
    

gsap.to("#navbar",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    width:"100%",
    scrollTrigger:{
        trigger:"#navbar",
        scroll:"body",
        //markers:true,
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    duration:1,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start: "top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})


gsap.from("#colon1",{
    y:-60,
    x:-60,
    // duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
      //  markers:true,
        start:"top 55%",
        end: "top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:60,
    x:60,
    // duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub:4
        
    }
  
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });

