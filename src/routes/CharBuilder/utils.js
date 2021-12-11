export let mouseMov = [0, 0];
export let mousePos = [0, 0];

window.addEventListener('mousemove', (e) => {
    mouseMov = [e.movementX, e.movementY];
    mousePos = [e.clientX, e.clientY];
})