/* 
create canvas
onbuttonclick create n gon
onbuttonclick create edge from vertexA to vertex B
onubuttonclcik calculate H_1
*/

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let nodeBtn = document.getElementById('nodeBtn')
let edgeBtn = document.getElementById('edgeBtn')

nodeBtn.addEventListener('click',redraw)
edgeBtn.addEventListener('click', redraw)

function drawNode(x,y){
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.arc(x,y,30,0, Math.PI*2)
    ctx.fill();
}

function redraw(){
    drawNode(100, 100);
}


