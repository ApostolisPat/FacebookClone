
/* Drop down settings */
const settingsMenuEl = document.querySelector(".settings-menu")
function settingsMenuToggle(){
    settingsMenuEl.classList.toggle("settings-menu-height");
    settingsMenuEl.classList.toggle("settings-menu-width"); 
}

/* Dark mode functionality */
const darkBtnEl = document.getElementById("dark-btn");

darkBtnEl.onclick = function(){
    darkBtnEl.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    /* Update local storage */
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
}

/* Check local storage for theme settings */
if(localStorage.getItem("theme") == "dark"){
    darkBtnEl.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}else if(localStorage.getItem("theme") == "light"){
    darkBtnEl.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}else{
    localStorage.setItem("theme","light");
}