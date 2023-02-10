let dropdownMenu = document.getElementsByClassName("dropdown-menu")
let downdropItem = document.getElementsByClassName('dropdown-item')
let arrUp = document.getElementsByClassName('arr-up')
let hamburger = document.getElementById("hamburger")
let menu = document.getElementById('menu')
let overlay = document.getElementById('overlay')
let down = '<img src="./assets/images/icon-arrow-down.svg" alt="">'
let img = '<img src="./assets/images/icon-arrow-up.svg" alt="">'

let isOnDiv = false

for(let i = 0; i < downdropItem.length; i++){
    downdropItem[i].addEventListener('click', () => {
        dropdownMenu[i].classList.toggle('hidden')
        if(arrUp[i].innerHTML == down){
            arrUp[i].innerHTML = img
        }else{
            arrUp[i].innerHTML = down
        }
    })

}

function hidedivs(){
    if(window.matchMedia('(max-width:1124px)').matches){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
        menu.style.display = 'flex'
        overlay.style.display = 'none'
    }
}

hidedivs()

window.addEventListener('resize', hidedivs)

hamburger.addEventListener('click', () => {
    if(menu.style.display == 'none'){
        menu.style.display = 'block'
        overlay.style.display = 'block'
        
    }else{
        menu.style.display = 'none'
        overlay.style.display = 'none'
    }
})