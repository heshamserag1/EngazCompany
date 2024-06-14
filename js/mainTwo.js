
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

