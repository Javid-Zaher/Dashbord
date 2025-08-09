let lightBtn = document.getElementById("lightModeBtn");
let darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener('click',function(){
    console.log('click darkMode');
    document.documentElement.setAttribute("data-bs-theme","dark")
    darkBtn.classList.add("active")
    lightBtn.classList.remove("active")
    localStorage.setItem("themeMode","dark")
});
lightBtn.addEventListener('click',function(){
    console.log('click lightMode');
    document.documentElement.setAttribute("data-bs-theme","light")
    lightBtn.classList.add("active")
    darkBtn.classList.remove("active")
    localStorage.setItem("themeMode","light")
});
let saveTheme = localStorage.getItem("themeMode")
if(saveTheme == "dark"){
    document.documentElement.setAttribute("data-bs-theme","dark")
    darkBtn.classList.add("active")
    lightBtn.classList.remove("active")
}else{
    document.documentElement.setAttribute("data-bs-theme","light")
    lightBtn.classList.add("active")
    darkBtn.classList.remove("active")
};
