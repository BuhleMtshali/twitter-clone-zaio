//function toggling active nav bar elements
let iconTextDivs = document.querySelectorAll('.nav-icons');
iconTextDivs.forEach((div) => {
    div.addEventListener('click', () => {
        div.classList.remove('.nav-icons');
        div.classList.add('active-nav')
    })
})
