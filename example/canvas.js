const canvas2 = document.querySelector('#canvas-2');

function drawLine() {
  const context2 = canvas2.getContext('2d');

  context2.strokeStyle = 'black';
  context2.lineWidth = 100;
  context2.lineCap = 'square';
  context2.lineJoin = 'round';
  context2.beginPath();
  context2.moveTo(0, 0);
  context2.lineTo(500, 0);
  context2.lineTo(500, 450);
  context2.lineTo(600, 200);
  context2.stroke();
  context2.closePath();

  context2.lineCap = 'butt';
  context2.beginPath();
  context2.moveTo(300, 500);
  context2.lineTo(500, 500);
  context2.stroke();
  context2.closePath();

  context2.lineCap = 'round';
  context2.beginPath();
  context2.moveTo(300, 600);
  context2.lineTo(500, 600);
  context2.stroke();
  context2.closePath();

}

drawLine();

const canvas3 = document.querySelector('#canvas-3');

function drawArc() {
  const context3 = canvas3.getContext('2d');
  context3.beginPath();
  context3.strokeStyle = 'black';
  context3.lineWidth = 5;
  context3.arc(100, 100, 60, 0, (Math.PI / 180) * 120, true);
  context3.stroke();
  context3.closePath();

  context3.beginPath();
  context3.moveTo(100, 100);
  context3.lineTo(200, 200);
  context3.arcTo(400, 200, 100, 100, 20);
  context3.moveTo(400, 200);
  context3.strokeStyle = 'red';
  context3.lineTo(400, 220);
  context3.stroke();
  context3.closePath();

  context3.beginPath();
  context3.moveTo(200, 200);
  context3.quadraticCurveTo(0,30, 100, 600, 100, 600); 
  context3.stroke();
  context3.closePath();
}

drawArc();

const canvas4 = document.querySelector('#canvas-4');

function clip() {
  const context4 = canvas4.getContext('2d');
  context4.fillStyle = 'black';
  context4.fillRect(10, 10, 200, 200);
  context4.save();
  context4.beginPath();

  context4.rect(30, 30, 50, 50);

  context4.clip();

  context4.fillStyle = 'green';
  context4.fillRect(0, 0, 150, 100);
  
  context4.stroke();

  context4.closePath();
}

clip();


const canvas5 = document.querySelector('#canvas-5');

function operation() {
  const context5 = canvas5.getContext('2d');
  context5.fillStyle = 'black';
  context5.fillRect(10, 10, 200, 200);

  context5.fillStyle = 'red';
  context5.fillRect(1, 1, 50, 50);

  context5.globalCompositeOperation = 'source-over';
  context5.fillRect(60, 1, 50, 50);

  // context5.globalCompositeOperation = 'destination-atop';
  context5.fillRect(1, 60, 50, 50);

  context5.globalAlpha = 0.5;

  context5.globalCompositeOperation = 'source-atop';
  context5.fillRect(60, 60, 50, 50);

}

operation();

const canvas6 = document.querySelector('#canvas-6');

function testtransform() {
  const context6 = canvas6.getContext('2d');
  // let angleInRadians = 45 * Math.PI / 180;
  context6.fillStyle = 'red';
  // context6.setTransform(1, 1, 1, 1, 0, 0);
  // context6.rotate(angleInRadians);

  context6.setTransform(1,0.5,0,1,0,0);
  context6.fillRect(300, 300, 100, 100);
}

testtransform();


const canvas7 = document.querySelector('#canvas-7');


function change() {
  let deg = Math.PI / 180;

  const context7 = canvas7.getContext('2d');
  context7.fillStyle = 'red';
  context7.fillRect(100, 100, 100,100);

  context7.setTransform(Math.cos(deg * 45), Math.sin(deg * 45), -Math.sin(deg * 45), Math.cos(deg * 45), 150, -60);

  context7.fillRect(100, 100, 100,100);

}

change();

const canvas8 = document.querySelector('#canvas-8');

function rotate() {
  const context8 = canvas8.getContext('2d');
  context8.setTransform(1, 0 , 0, 1, 0, 0);
  let angleInRadians = 45 * Math.PI / 180;
  let x = 100;
  let y = 100;
  let width = 50;
  let height = 50;

  context8.translate(x + 0.5 * width, y + 0.5 * height);
  context8.scale(2, 2);
  context8.rotate(angleInRadians);
  context8.fillStyle = 'red';
  context8.fillRect(- 0.5 * width, - 0.5 * height, width, height);
}


rotate();

const canvas9 = document.querySelector('#canvas-9');

function linearGradient() {
  const context9 = canvas9.getContext('2d');
  let gr = context9.createLinearGradient(0, 0, 100, 0);
  gr.addColorStop(0, 'rgb(255, 0, 0)');
  gr.addColorStop(.5, 'rgb(0, 255, 0)');
  gr.addColorStop(1, 'rgb(0, 0, 255)');
  context9.fillStyle = gr;
  context9.fillRect(0, 0, 100, 100);
  context9.fillRect(0, 100, 50, 100);
  context9.fillRect(0, 200, 200, 100);
  context9.fillRect(300, 300, 200, 200);
}

linearGradient();

const canvas10 = document.querySelector('#canvas-10');

function linearGradient1() {
  const context10 = canvas10.getContext('2d');
  let gr = context10.createLinearGradient(0, 0, 100, 0);
  gr.addColorStop(0, 'rgb(255, 0, 0)');
  gr.addColorStop(.5, 'rgb(0, 255, 0)');
  gr.addColorStop(1, 'rgb(0, 0, 255)');
  context10.strokeStyle = gr;  
  context10.strokeRect(0, 0, 100, 100);
  context10.strokeRect(0, 100, 50, 100);
  context10.strokeRect(0, 200, 200, 100);
  context10.strokeRect(300, 300, 200, 200);
}

linearGradient1();


const canvas11 = document.querySelector('#canvas-11');

function linearGradient2() {
  const context11 = canvas11.getContext('2d');
  let gr = context11.createLinearGradient(0, 0, 100, 0);
  gr.addColorStop(0, 'rgb(255, 0, 0)');
  gr.addColorStop(.5, 'rgb(0, 255, 0)');
  gr.addColorStop(1, 'rgb(0, 0, 255)');

  context11.fillStyle = gr;
  context11.beginPath();
  context11.moveTo(0, 0);
  context11.lineTo(50, 0);
  context11.lineTo(100, 50);
  context11.lineTo(50, 100);
  context11.lineTo(0, 100);
  context11.lineTo(0, 0);
  context11.stroke();
  context11.fill();
  context11.closePath();
}

linearGradient2();


const canvas12 = document.querySelector('#canvas-12');

function linearGradient3() {
  const context12 = canvas12.getContext('2d');
  let gr = context12.createLinearGradient(0, 0, 0, 100);
  gr.addColorStop(0, 'rgb(255, 0, 0)');
  gr.addColorStop(.5, 'rgb(0, 255, 0)');
  gr.addColorStop(1, 'rgb(0, 0, 255)');

  context12.fillStyle = gr;
  context12.beginPath();
  context12.moveTo(0, 0);
  context12.lineTo(50, 0);
  context12.lineTo(100, 50);
  context12.lineTo(50, 100);
  context12.lineTo(0, 100);
  context12.lineTo(0, 0);
  context12.stroke();
  context12.fill();
  context12.closePath();
}

linearGradient3();


const canvas13 = document.querySelector('#canvas-13');

function radialGradient() {
  const context13 = canvas13.getContext('2d');
  let gr = context13.createRadialGradient(50, 50, 25, 50, 50, 100);

  gr.addColorStop(0, 'rgb(255, 0, 0)');
  gr.addColorStop(.5, 'rgb(0, 255, 0)');
  gr.addColorStop(1, 'rgb(0, 0, 255)');

  context13.fillStyle = gr;
  context13.fillRect(0, 0, 200, 200);
}

radialGradient();


const canvas14 = document.querySelector('#canvas-14');

function radialGradient1() {
  const context14 = canvas14.getContext('2d');
  let gr = context14.createRadialGradient(50, 50, 25, 100, 100, 100);

  gr.addColorStop(0, 'rgb(255, 0, 0)');
  gr.addColorStop(.5, 'rgb(0, 255, 0)');
  gr.addColorStop(1, 'rgb(0, 0, 255)');

  context14.fillStyle = gr;
  context14.fillRect(0, 0, 200, 200);
}

radialGradient1();


const canvas15 = document.querySelector('#canvas-15');

function radialGradient2() {
  const context15 = canvas15.getContext('2d');
  let gr = context15.createRadialGradient(50, 50, 25, 100, 100, 100);

  gr.addColorStop(0, 'rgb(255, 0, 0)');
  gr.addColorStop(.5, 'rgb(0, 255, 0)');
  gr.addColorStop(1, 'rgb(0, 0, 255)');

  context15.strokeStyle = gr;
  context15.arc(100, 100, 50, 0, (Math.PI / 180)* 360, false);
  context15.stroke();
}

radialGradient2();

const canvas16 = document.querySelector('#canvas-16');

function createPattern() {
  const context16 = canvas16.getContext('2d');
  let img = new Image();
  img.src = './icon.jpeg';
  img.onload = function() {
    let fillPattern = context16.createPattern(img, 'repeat');
    context16.fillStyle = fillPattern;
    context16.fillRect(0, 0, 800, 800);
  }
}

createPattern();

const canvas17 = document.querySelector('#canvas-17');

function testShadow() {
  const context17 = canvas17.getContext('2d');
  context17.shadowOffsetX = -4;
  context17.shadowOffsetY = -4;
  context17.shadowColor = 'black';
  context17.shadowBlur = 4;
  context17.fillRect(10, 10, 100, 100);

  context17.shadowOffsetX = -4;
  context17.shadowOffsetY = -4;
  context17.shadowColor = 'black';
  context17.shadowBlur = 4;
  context17.fillRect(150, 10, 100, 100);

  context17.shadowOffsetX = 10;
  context17.shadowOffsetY = 10;
  context17.shadowColor = 'rgb(100, 100, 100)';
  context17.shadowBlur = 8;
  context17.arc(200, 300, 100, 0, (Math.PI / 180) * 360, false);
  context17.fill();
}

testShadow();

const canvas18 = document.querySelector('#canvas-18');

function testPointIsInPath() {
  const context18 = canvas18.getContext('2d');

  context18.strokeStyle = 'red';
  context18.lineWidth = 5;
  context18.moveTo(0, 0);
  context18.lineTo(50, 0);
  context18.lineTo(50, 50);
  context18.stroke();
  let isPointInPath1 = context18.isPointInPath(1,1);
  let isPointInPath2 = context18.isPointInPath(10, 0); 
  console.log('isPointInPath1=', isPointInPath1, 'isPointInPath2=', isPointInPath2);
}

testPointIsInPath();

const canvas19 = document.querySelector('#canvas-19');

function putText() {
  const context19 = canvas19.getContext('2d');
  const text = 'I want to find you.';
  const text1 = 'I want to see you.';
  context19.fillStyle = 'red';
  context19.font = '30px PingFang SC';
  
  context19.textAlign = 'center'; // 将text的中心置于 xpos 点上

  const textWidth = context19.measureText(text);
  const xPos = 800 / 2;
  const yPos = 100;

  context19.fillText(text, xPos, 100);
}

putText();

let colorStopArray = [
  {
    color: "#FF0000",
    stopPercent: 0
  },
  {
    color: "#FFFF00",
    stopPercent: 0.125
  },
  {
    color: "#00FF00",
    stopPercent: 0.375
  },
  {
    color: "#0000FF",
    stopPercent: 0.625
  },
  {
    color: "#FF00FF",
    stopPercent: 0.875
  },
  {
    color: "#FF0000",
    stopPercent: 1
  }
];

const canvas20 = document.querySelector('#canvas-20');

function textGradientAnimate() {
  const context20 = canvas20.getContext('2d');
  context20.font = '30px PingFang SC';
  context20.textAlign = 'center';
  context20.textBaseline = 'middle';
  let text = 'You are my best friend .';
  let metrics = context20.measureText(text);
  let xPos = canvas20.width / 2;
  let yPos = canvas20.height / 2;
  
  let lineGradient = context20.createLinearGradient(xPos, yPos, canvas20.width, yPos);
  
  for (let i = 0; i < colorStopArray.length; i++) {
    let stopPercent = (colorStopArray[i].stopPercent + 0.1);
    stopPercent = stopPercent - 1 > 0? stopPercent - 1 : stopPercent;
    colorStopArray[i].stopPercent = stopPercent;
    lineGradient.addColorStop(stopPercent, colorStopArray[i].color);
  }

  context20.fillStyle = lineGradient;

  context20.fillText(text, xPos, yPos);
}

setInterval(textGradientAnimate, 300);


