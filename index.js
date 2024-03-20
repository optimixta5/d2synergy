const darkModeToggle = document.getElementById("darkmode")

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.toggle("dark")
    darkModeToggle.innerText="Light Mode"
}

function toggleMode(){
    if(darkModeToggle.innerText=="Light Mode"){
        darkModeToggle.innerText="Dark Mode"
    }else{
        darkModeToggle.innerText="Light Mode"
    }
    document.body.classList.toggle("light")
    document.body.classList.toggle("dark")
}