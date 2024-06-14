let btnone = document.getElementById("btnone")
let btnTwo = document.getElementById("btntwo");
let btnthree = document.getElementById("btnthree");
let btnfour = document.getElementById("btnfour");
let btnfive = document.getElementById("btnfive");
let srcrollClicks = document.getElementById("scroll")
isClick = true;

let navbarScrol = document.getElementById("navbarscrol");
window.addEventListener("scroll", () => {
    // navbar desktop//

    if(window.scrollY >= 300){
        navbarScrol.classList.add("navtop");
        srcrollClicks.style.display = "block";
    }else {
        navbarScrol.classList.remove("navtop");
        srcrollClicks.style.display = "none";
    }
 // navbar desktop //

  });


btnone.addEventListener("click" , () =>{
    if(window.scroll){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth",
        });
        isClick  = false;
    }else {
        isClick = true;
    }
});

btnTwo.addEventListener("click" , () =>{
    if(window.scroll){
        window.scrollTo({
            top:700,
            left:0,
            behavior:"smooth",
        });
        isClick  = false;
    }else {
        isClick = true;
    }
});
btnthree.addEventListener("click" , () =>{
    if(window.scroll){
        window.scrollTo({
            top:1200,
            left:0,
            behavior:"smooth",
            
        });
        isClick  = false;
    }else {
        isClick = true;
    }
});
btnfour.addEventListener("click" , () =>{
    
    if(window.scroll){
        window.scrollTo({
            top:1600,
            left:0,
            behavior:"smooth",
            
        });
        isClick  = false;
    }else {
        isClick = true;
    }
});
btnfive.addEventListener("click" , () =>{ 
    if(window.scroll){
        window.scrollTo({
            top:2100,
            left:0,
            behavior:"smooth",
            
        });
        isClick  = false;
    }else {
        isClick = true;
    }
});



