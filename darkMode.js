const darkModeButton = document.querySelector('#darkmode')
darkModeButton.addEventListener("click" , (ev) => {
    document.querySelector('body').classList.toggle('dark');
    darkModeButton.classList.toggle('darkbutton');
}) 

