let head_click = document.querySelector(".head-click")

let btnClick = document.querySelector(".btnClick")

let chit = document.querySelector(".chit")

let click =0;

btnClick.onclick = function () {
    click = click + 1
    head_click.innerHTML = click
}

chit.onclick = function () {
    click = click + 100
    head_click.innerHTML = click
}
    
    