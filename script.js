
var crsr = document.querySelector("#cursor");

document.addEventListener("mousemove",function(dets){
     gsap.to(crsr,{
            x:  dets.x ,
            y : dets.y,
            duration : 1,
     })

})
var crsr_blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
       crsr_blur.style.left = dets.x -200 +"px"
       crsr_blur.style.top = dets.y -200 +"px"
})

var tl = gsap.timeline();

var imageNav = document.querySelector("#nav img")

tl.from(imageNav,{
    opacity: 0,
    // scale : 0,
    y:-30,
    stagger : "0.10s",
    scrub : 3
})
var h4all = document.querySelectorAll("#nav h4")

tl.from(h4all,{
    opacity: 0,
    // scale : 0,
    y:-30,
    stagger : "0.10s",
    scrub : 3
})

console.log(h4all)

h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
      gsap.to(crsr,{
        scale : 3,
        border : "1px solid #fff",
        backgroundColor : "rgba(173, 216, 230, 0.5)"
      })
  })
})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to(crsr,{
            scale : 1,
            border : "none",
            backgroundColor : "#95C11E"
          })
    })
  })


gsap.from("#about-us img,#about-us-in",{
     y : 90,
    opacity : 0,
    duration :2,
    delay : 1,
    // stagger : "0.4",
    // delay : 0.6,
    scrollTrigger:{
        trigger : "#about-us",
        scroller : "body",
        // markers :true,
        start : "top 70%",
        end : "top 65%",
        scrub : 2
    }
})

gsap.from(".card",{
    scale : 0.8,
   opacity : 0,
   duration :2,
   delay : 1,
   // stagger : "0.4",
   // delay : 0.6,
   scrollTrigger:{
       trigger : ".card",
       scroller : "body",
    //    markers :true,
       start : "top 70%",
       end : "top 65%",
       scrub : 2
   }
})

var crsrAtCards = document.querySelector("#cursor");
var cardsChange1 = document.querySelector("#card1");
var cardsChange2 = document.querySelector("#card2");
var cardsChange3 = document.querySelector("#card3");

cardsChange1.addEventListener("mouseenter",function(){
    crsrAtCards.style.height = "60px",
    crsrAtCards.style.width = "60px",
     crsrAtCards.style.backgroundColor = 'rgba(173, 216, 230, 0.5)',
     crsrAtCards.style.border = "2px solid white",
     crsrAtCards.style.transition = "all ease 0.6"
    //  crsrAtCards.style.cursor = "pointer"
})
cardsChange1.addEventListener("mouseleave",function(){
    crsrAtCards.style.height = "30px",
    crsrAtCards.style.width = "30px",
     crsrAtCards.style.backgroundColor = '#95C11E',
     crsrAtCards.style.border = "none"
})
cardsChange2.addEventListener("mouseenter",function(){
    crsrAtCards.style.height = "60px",
    crsrAtCards.style.width = "60px",
     crsrAtCards.style.backgroundColor = 'rgba(173, 216, 230, 0.5)',
     crsrAtCards.style.border = "2px solid white",
     crsrAtCards.style.transition = "all ease 0.6"
})
cardsChange2.addEventListener("mouseleave",function(){
    crsrAtCards.style.height = "30px",
    crsrAtCards.style.width = "30px",
     crsrAtCards.style.backgroundColor = '#95C11E',
     crsrAtCards.style.border = "none"
})
cardsChange3.addEventListener("mouseenter",function(){
    crsrAtCards.style.height = "60px",
    crsrAtCards.style.width = "60px",
     crsrAtCards.style.backgroundColor = 'rgba(173, 216, 230, 0.5)',
     crsrAtCards.style.border = "2px solid white",
     crsrAtCards.style.transition = "all ease 0.6"
})
cardsChange3.addEventListener("mouseleave",function(){
    crsrAtCards.style.height = "30px",
    crsrAtCards.style.width = "30px",
     crsrAtCards.style.backgroundColor = '#95C11E',
     crsrAtCards.style.border = "none"
})

var greenHovor = document.querySelector("#green-div");

gsap.to("#nav",{
    backgroundColor : "#000",
    height : "110px",
    duration : "0.5",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers : true,
        start : "top -8%",
        end : "top -9%",
        scrub : 2
    }
})
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
         trigger : "#main",
         scroller : "body",
        //  markers : true,
         start : "top -25%",
         end : "top -70%",
         scrub : 2
    }
})

// gsap easing

gsap.from("#colon1", {
    opacity:0,
    x: "-70",
    y: "-70",
    
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",  
        end: "top 45%",    
        scrub: 3
      } 
  });

  gsap.to("#colon2", {
    x: "-20",
    y: "-20",
    scrollTrigger: {
      trigger: "#colon2",
      scroller: "body",
    //   markers: true,
    start: "top 85%",  
    end: "top 55%",     
      scrub: 3
    }
  });

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",  // Adjust based on your design
        end: "top 70%",    // Adjust based on your design
        scrub: 3
      }
})






