const spiderImg = document.querySelector('.img')
const ball = document.getElementById('score')
let changeTime = document.querySelector('#changeTime')

let score = 0
let speed = 2000

let innerWidth = window.innerWidth - 50
let innerHeight = window.innerHeight - 50

let moveSpiderInterval

window.addEventListener('resize', (e) => {
   innerWidth = window.innerWidth - 50
   innerHeight = window.innerHeight - 50
})

function moveSpider(speed){
    moveSpiderInterval = setInterval(()=>{
        let top = Math.random() * innerWidth
        let left = Math.random() * innerHeight
        
        spiderImg.style = `
        position: absolute;
        left: ${top}px;
        top: ${left}px;
        transition: 0.2s
        `
    }, speed);
}

changeTime.addEventListener("change", ()=> {
    clearInterval(moveSpiderInterval)
    moveSpider(parseInt(changeTime.value))
})
moveSpider(speed)

document.addEventListener('click', (e)=>{
    if(e.target.getAttribute('id') === 'img'){
        score++
        ball.textContent = score
    }
})