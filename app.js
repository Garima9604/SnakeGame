//part-1

// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [
//   [0, 0],
//   [50, 0],
//   [100, 0],
// ];

// function draw() {}

// function update() {}

// setInterval(function () {
//   update();
//   draw();
// }, 200);

// --------------Part-2&3--------------------

// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [
//   [0, 0],
//   [50, 0],
// ];

// function draw() {
//   for (let cell of snakeCells) {
//     //erase
//     ctx.clearRect(0, 0, 1200, 800);
//     //draw
//     ctx.fillStyle = "brown";
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
//   }
// }

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];
//   let newHeadX = headX + cellSize;
//   let newHeadY = headY;
//   snakeCells.push([newHeadX, newHeadY]);
//   snakeCells.shift();
// }

// setInterval(function () {
//   update();
//   draw();
// }, 200);

// // --------------Part-4&5--------------------

// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [
//   [0, 0],
//   [50, 0],
// ];
// let direction = "right";
// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowUp") {
//     direction = "up";
//   } else if (event.key === "ArrowDown") {
//     direction = "down";
//   } else if (event.key === "ArrowLeft") {
//     direction = "left";
//   } else if (event.key === "ArrowRight") {
//     direction = "right";
//   }
// });

// function draw() {
//   for (let cell of snakeCells) {
//     //erase
//     ctx.clearRect(0, 0, 1200, 800);
//     //draw
//     ctx.fillStyle = "brown";
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
//   }
// }

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];
//   let newHeadX;
//   let newHeadY;
//   if (direction === "up") {
//     newHeadX = headX;
//     newHeadY = headY - cellSize;
//   } else if (direction === "down") {
//     newHeadX = headX;
//     newHeadY = headY + cellSize;
//   } else if (direction === "left") {
//     newHeadX = headX - cellSize;
//     newHeadY = headY;
//   } else if (direction === "right") {
//     newHeadX = headX + cellSize;
//     newHeadY = headY;
//   }
//   snakeCells.push([newHeadX, newHeadY]);
//   snakeCells.shift();
// }

// setInterval(function () {
//   update();
//   draw();
// }, 200);

// // --------------Part-6--------------------

// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [
//   [0, 0],
//   [50, 0],
// ];
// let direction = "right";
// let gameOver = "false";

// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowUp") {
//     direction = "up";
//   } else if (event.key === "ArrowDown") {
//     direction = "down";
//   } else if (event.key === "ArrowLeft") {
//     direction = "left";
//   } else if (event.key === "ArrowRight") {
//     direction = "right";
//   }
// });

// function draw() {
//   if (gameOver === true) {
//     clearInterval(id);
//     return;
//   }
//   for (let cell of snakeCells) {
//     //erase
//     ctx.clearRect(0, 0, 1200, 800);
//     //draw
//     ctx.fillStyle = "brown";
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
//   }
// }

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];
//   let newHeadX;
//   let newHeadY;
//   if (direction === "up") {
//     newHeadX = headX;
//     newHeadY = headY - cellSize;
//     if (newHeadY < 0) {
//       gameOver = true;
//     }
//   } else if (direction === "down") {
//     newHeadX = headX;
//     newHeadY = headY + cellSize;
//     if (newHeadY === boardHeight) {
//       gameOver = true;
//     }
//   } else if (direction === "left") {
//     newHeadX = headX - cellSize;
//     newHeadY = headY;
//     if (newHeadX < 0) {
//       gameOver = true;
//     }
//   } else if (direction === "right") {
//     newHeadX = headX + cellSize;
//     newHeadY = headY;
//     if (newHeadX === boardWidth) {
//       gameOver = true;
//     }
//   }
//   snakeCells.push([newHeadX, newHeadY]);
//   snakeCells.shift();
// }

// let id = setInterval(function () {
//   update();
//   draw();
// }, 200);

// // --------------Part-7--------------------

// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [
//   [0, 0],
//   [50, 0],
// ];
// let direction = "right";
// let gameOver = "false";

// let foodCells = generateRandomFood();

// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowUp") {
//     direction = "up";
//   } else if (event.key === "ArrowDown") {
//     direction = "down";
//   } else if (event.key === "ArrowLeft") {
//     direction = "left";
//   } else if (event.key === "ArrowRight") {
//     direction = "right";
//   }
// });

// function draw() {
//   if (gameOver === true) {
//     clearInterval(id);
//     return;
//   }
//   //erase
//   ctx.clearRect(0, 0, 1200, 800);
//   //draw
//   for (let cell of snakeCells) {
//     ctx.fillStyle = "brown";
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
//   }
//   //draw food
//   ctx.fillStyle = "orange";
//   ctx.fillRect(foodCells[0], foodCells[1], cellSize, cellSize);
// }

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];
//   let newHeadX;
//   let newHeadY;
//   if (direction === "up") {
//     newHeadX = headX;
//     newHeadY = headY - cellSize;
//     if (newHeadY < 0) {
//       gameOver = true;
//     }
//   } else if (direction === "down") {
//     newHeadX = headX;
//     newHeadY = headY + cellSize;
//     if (newHeadY === boardHeight) {
//       gameOver = true;
//     }
//   } else if (direction === "left") {
//     newHeadX = headX - cellSize;
//     newHeadY = headY;
//     if (newHeadX < 0) {
//       gameOver = true;
//     }
//   } else if (direction === "right") {
//     newHeadX = headX + cellSize;
//     newHeadY = headY;
//     if (newHeadX === boardWidth) {
//       gameOver = true;
//     }
//   }
//   snakeCells.push([newHeadX, newHeadY]);
//   snakeCells.shift();
// }

// function generateRandomFood() {
//   return [
//     //x
//     Math.round((Math.random() * (boardWidth - cellSize)) / 50) * 50,
//     //y
//     Math.round((Math.random() * (boardHeight - cellSize)) / 50) * 50,
//   ];
// }

// let id = setInterval(function () {
//   update();
//   draw();
// }, 200);

// // --------------Part-8--------------------

// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [
//   [0, 0],
//   [50, 0],
// ];
// let direction = "right";
// let gameOver = "false";

// let foodCells = generateRandomFood();

// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowUp") {
//     direction = "up";
//   } else if (event.key === "ArrowDown") {
//     direction = "down";
//   } else if (event.key === "ArrowLeft") {
//     direction = "left";
//   } else if (event.key === "ArrowRight") {
//     direction = "right";
//   }
// });

// function draw() {
//   if (gameOver === true) {
//     clearInterval(id);
//     return;
//   }
//   //erase
//   ctx.clearRect(0, 0, 1200, 800);
//   //draw
//   for (let cell of snakeCells) {
//     ctx.fillStyle = "brown";
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
//   }
//   //draw food
//   ctx.fillStyle = "orange";
//   ctx.fillRect(foodCells[0], foodCells[1], cellSize, cellSize);
// }

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];
//   let newHeadX;
//   let newHeadY;
//   if (direction === "up") {
//     newHeadX = headX;
//     newHeadY = headY - cellSize;
//     if (newHeadY < 0) {
//       gameOver = true;
//     }
//   } else if (direction === "down") {
//     newHeadX = headX;
//     newHeadY = headY + cellSize;
//     if (newHeadY === boardHeight) {
//       gameOver = true;
//     }
//   } else if (direction === "left") {
//     newHeadX = headX - cellSize;
//     newHeadY = headY;
//     if (newHeadX < 0) {
//       gameOver = true;
//     }
//   } else if (direction === "right") {
//     newHeadX = headX + cellSize;
//     newHeadY = headY;
//     if (newHeadX === boardWidth) {
//       gameOver = true;
//     }
//   }
//   snakeCells.push([newHeadX, newHeadY]);
//   if (newHeadX === foodCells[0] && newHeadY === foodCells[1]) {
//     foodCells = generateRandomFood();
//   } else {
//     snakeCells.shift();
//   }
// }

// function generateRandomFood() {
//   return [
//     //x
//     Math.round((Math.random() * (boardWidth - cellSize)) / 50) * 50,
//     //y
//     Math.round((Math.random() * (boardHeight - cellSize)) / 50) * 50,
//   ];
// }

// let id = setInterval(function () {
//   update();
//   draw();
// }, 200);

// // --------------Part-9--------------------

// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [
//   [0, 0],
//   [50, 0],
// ];
// let direction = "right";
// let gameOver = "false";
// let score = 0;
// let foodCells = generateRandomFood();

// document.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowUp") {
//     direction = "up";
//   } else if (event.key === "ArrowDown") {
//     direction = "down";
//   } else if (event.key === "ArrowLeft") {
//     direction = "left";
//   } else if (event.key === "ArrowRight") {
//     direction = "right";
//   }
// });

// function draw() {
//   if (gameOver === true) {
//     clearInterval(id);
//     ctx.fillStyle = "red";
//     ctx.font = "50px monospace";
//     ctx.fillText(`GAME OVER !!`, 400, 400);
//     return;
//   }
//   //erase
//   ctx.clearRect(0, 0, 1200, 800);
//   //draw
//   for (let cell of snakeCells) {
//     ctx.fillStyle = "brown";
//     ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
//   }
//   //draw food
//   ctx.fillStyle = "orange";
//   ctx.fillRect(foodCells[0], foodCells[1], cellSize, cellSize);
//   //   draw score
//   ctx.font = "20px monospace";
//   ctx.fillText(`Score : ${score}`, 20, 30);
// }

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];
//   let newHeadX;
//   let newHeadY;
//   if (direction === "up") {
//     newHeadX = headX;
//     newHeadY = headY - cellSize;
//     if (newHeadY < 0) {
//       gameOver = true;
//     }
//   } else if (direction === "down") {
//     newHeadX = headX;
//     newHeadY = headY + cellSize;
//     if (newHeadY === boardHeight) {
//       gameOver = true;
//     }
//   } else if (direction === "left") {
//     newHeadX = headX - cellSize;
//     newHeadY = headY;
//     if (newHeadX < 0) {
//       gameOver = true;
//     }
//   } else if (direction === "right") {
//     newHeadX = headX + cellSize;
//     newHeadY = headY;
//     if (newHeadX === boardWidth) {
//       gameOver = true;
//     }
//   }
//   snakeCells.push([newHeadX, newHeadY]);
//   if (newHeadX === foodCells[0] && newHeadY === foodCells[1]) {
//     foodCells = generateRandomFood();
//     score += 1;
//   } else {
//     snakeCells.shift();
//   }
// }

// function generateRandomFood() {
//   return [
//     //x
//     Math.round((Math.random() * (boardWidth - cellSize)) / 50) * 50,
//     //y
//     Math.round((Math.random() * (boardHeight - cellSize)) / 50) * 50,
//   ];
// }

// let id = setInterval(function () {
//   update();
//   draw();
// }, 200);

// --------------Part-10--------------------

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let cellSize = 50;
let boardWidth = 1200;
let boardHeight = 700;
let snakeCells = [
  [0, 0],
  [50, 0],
];
let direction = "right";
let gameOver = "false";
let score = 0;
let foodCells = generateRandomFood();

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    direction = "up";
  } else if (event.key === "ArrowDown") {
    direction = "down";
  } else if (event.key === "ArrowLeft") {
    direction = "left";
  } else if (event.key === "ArrowRight") {
    direction = "right";
  }
});

function draw() {
  if (gameOver === true) {
    clearInterval(id);
    let audio = new Audio("end.mp3");
    audio.play();
    ctx.fillStyle = "red";
    ctx.font = "80px monospace";
    ctx.fillText(`GAME OVER !!`, 400, 400);
    return;
  }
  //erase
  ctx.clearRect(0, 0, 1200, 800);
  //draw
  for (let cell of snakeCells) {
    ctx.fillStyle = "brown";
    ctx.fillRect(cell[0], cell[1], cellSize, cellSize);
    ctx.strokeStyle = "golden";
    ctx.strokeRect(cell[0], cell[1], cellSize, cellSize);
  }
  //draw food
  ctx.fillStyle = "orange";
  ctx.fillRect(foodCells[0], foodCells[1], cellSize, cellSize);
  //   draw score
  ctx.font = "20px monospace";
  ctx.fillText(`Score : ${score}`, 20, 30);
}

function update() {
  let headX = snakeCells[snakeCells.length - 1][0];
  let headY = snakeCells[snakeCells.length - 1][1];
  let newHeadX;
  let newHeadY;
  if (direction === "up") {
    newHeadX = headX;
    newHeadY = headY - cellSize;
    if (newHeadY < 0 || ex(newHeadX, newHeadY)) {
      gameOver = true;
    }
  } else if (direction === "down") {
    newHeadX = headX;
    newHeadY = headY + cellSize;
    if (newHeadY === boardHeight || ex(newHeadX, newHeadY)) {
      gameOver = true;
    }
  } else if (direction === "left") {
    newHeadX = headX - cellSize;
    newHeadY = headY;
    if (newHeadX < 0 || ex(newHeadX, newHeadY)) {
      gameOver = true;
    }
  } else if (direction === "right") {
    newHeadX = headX + cellSize;
    newHeadY = headY;
    if (newHeadX === boardWidth || ex(newHeadX, newHeadY)) {
      gameOver = true;
    }
  }
  snakeCells.push([newHeadX, newHeadY]);
  if (newHeadX === foodCells[0] && newHeadY === foodCells[1]) {
    foodCells = generateRandomFood();
    score += 1;
  } else {
    snakeCells.shift();
  }
}

function generateRandomFood() {
  return [
    //x
    Math.round((Math.random() * (boardWidth - cellSize)) / 50) * 50,
    //y
    Math.round((Math.random() * (boardHeight - cellSize)) / 50) * 50,
  ];
}

function ex(newHeadX, newHeadY) {
  for (item of snakeCells) {
    if (item[0] === newHeadX && item[1] === newHeadY) {
      return true;
    }
  }
  return false;
}

let id = setInterval(function () {
  update();
  draw();
}, 150);
