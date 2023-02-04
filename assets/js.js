const pDown = document.querySelector('#p-down');
let pDownNum = 0

pDown.addEventListener('pointerdown', () => {
    pDownNum++
    pDown.innerHTML = pDownNum
})

const pUp = document.querySelector('#p-up');
let pUpNum = 0

pUp.addEventListener('pointerup', () => {
    pUpNum++
    pUp.innerHTML = pUpNum
})