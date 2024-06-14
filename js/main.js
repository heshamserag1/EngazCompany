
// navbarscrol  scrolll btn //
let navbarScrol = document.getElementById("navbarscrol");
window.addEventListener("scroll", () => {
    // navbar desktop//

    if(window.scrollY >= 300){
        navbarScrol.classList.add("navtop");

    }else {
        navbarScrol.classList.remove("navtop");
    }
 // navbar desktop //

  });
// navbarscrol and scrolll btn // 

// عنا  click//
let about = document.getElementById("articles");
about.addEventListener("click", () => {
    window.scrollTo({
        left:0,
        top:600,
        behavior:"smooth",
    });
});
// عنا  click//

// social //

let myContacts = document.getElementById("contacts");
let myBtn = document.getElementById("mybtn");
let myScroll = document.getElementById("scroll");
let isShow = true;
function toggleBtn () {
    if(isShow ){
        myContacts.style.display = "none";
        myBtn.style.transform = "rotate(0deg)";
        myBtn.style.transition = "0.5s";
       myContacts.classList.add("trans");
        isShow = false;
    }else {
        myContacts.style.display = "block";
        myBtn.style.transform = "rotate(180deg)";
        isShow = true;
    }
};
window.addEventListener("scroll", () =>{
    if(window.scrollY >= 300) {
        myScroll.style.display = "block";
    }else {
        myScroll.style.display = "none";
    }
});
// social //