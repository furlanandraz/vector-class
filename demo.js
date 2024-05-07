import Vector from "./vector.js";

const box = document.getElementById('box');
const vect = document.getElementById('vector');
const boxCenter = new Vector(box.offsetLeft + box.offsetWidth / 2, box.offsetTop + box.offsetHeight / 2);
vect.style.left = `${boxCenter[0]}px`;
vect.style.top = `${boxCenter[1]}px`;

let shadowX, shadowY, shadowL, rgb;
window.addEventListener('mousemove', (event) => {

    let cursor = new Vector(event.clientX, event.clientY);
    let dist = boxCenter.distance(cursor);
    let ang = boxCenter.angle(cursor);
    let difference = cursor.addition(boxCenter, 'sub');
    difference.norm();

    vect.style.width = `${dist}px`;
    vect.style.transform = `rotate(${ang}deg)`;
    shadowX = difference[0] * 2 * dist / document.documentElement.offsetWidth;
    shadowY = difference[1] * 2 * dist / document.documentElement.offsetHeight;
    shadowL = dist / document.documentElement.offsetWidth * 2;
    box.style.boxShadow = `${-shadowX}em ${-shadowY}em ${shadowL}em ${shadowL}em #333`;

});
