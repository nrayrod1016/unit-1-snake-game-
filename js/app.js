

//<-----------------------------------Constants-------------------------------------------------->

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const start = document.getElementById(startBtn)
const reset = document.getElementById(resetBtn)

const grid = 16;
let count = 0;
// <-----------------------------------Variables-------------------------------------------------->
let snake = {
  x: 160,
  y: 160,
  // velocity - snake moves one grid length every frame 
  dx: grid,
  dy: 0,
  // tracks snake body 
  cells: [],
  //  length of snake at start of frame 
  maxCells: 3
};
let apple = {
  x: 320,
  y: 320
};


//  apple resets at random location after eaten 
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// <-----------------------------------Functions-------------------------------------------------->
// game loop
function loop() {
    requestAnimationFrame(loop);
    // control animation loop speed or velocity of the snake. 
    if (++count < 4) {
      return;
  }
  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);
// move snake by its own velocity 
  snake.x += snake.dx;
  snake.y += snake.dy;

  // wraps snake horizontally 
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

    

  // wrap snake position vertically 
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // draw apple
  context.fillStyle = 'white';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);

  // draw snake one cell at a time
  context.fillStyle = 'blueviolet';
  snake.cells.forEach(function(cell, idx) {


    context.fillRect(cell.x, cell.y, grid-1, grid-1);

    // snake eats apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;

      // canvas is 400x400 which is 25x25 grids
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    // check collision (bubble sort)
    for (let i = idx + 1; i < snake.cells.length; i++) {

      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
  });
}
// <-----------------------------------Event Listeners-------------------------------------------------->

//  move the snake
//  move left -- move head(x) negatively along the X axis tail(y) follows 
document.addEventListener('keydown', function(e) {
  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

// start the game
startBtn.onclick = function() {
  

requestAnimationFrame(loop);
}

resetBtn.onclick = function() { 
  snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
}

// resetBtn.onclick = function() { 
//    cancelAnimationFrame(loop)

// }
    /*  add sounds event listeners  */
