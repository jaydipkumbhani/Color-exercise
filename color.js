// const button = document.querySelector('button');
// const h1 = document.querySelector('h1')
// button.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'olive';
//     // console.log('clicked')
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     const newColor = `rgb(${r}, ${g}, ${b})`
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

function makeRandColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const buttons = document.querySelectorAll("button")

// for (let button of buttons) {
//     button.addEventListener("click", function() {
//         this.style.backgroundColor = makeRandColor();
//         button.style.color = makeRandColor();
//     })
// }
// OR
for (let button of buttons) {
    button.addEventListener("click", colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}