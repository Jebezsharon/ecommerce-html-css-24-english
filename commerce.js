const menuicon =document.getElementById("menu-icon")
const navmenu =document.getElementById("menu")

menuicon?. addEventListener("click", ()=>{

    if(navmenu?. className=="hidden"){
        navmenu.classList.remove("hidden");
    }else{
        navmenu. classList.add("hidden")

    }
});