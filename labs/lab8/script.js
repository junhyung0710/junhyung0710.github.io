let buttonelem = document.querySelector('#toggleButton')
function toggleTheme() {
    let bodyelement = document.querySelector('body')
    bodyelement.classList.toggle('dark-mode')
}

buttonelem.onclick = toggleTheme