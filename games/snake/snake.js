window.onload = function() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const scoreDisplay = document.getElementById("score");
    const messageDisplay = document.getElementById("message");
    const gridSizeInput = document.getElementById("gridSizeInput");
    const updateGridBtn = document.getElementById("updateSettings");
  
    let gridSize = parseInt(gridSizeInput.value) || 9;
    let cellSize = canvas.width / gridSize;
    let snake = [];
    let food = {};
    let direction = { x: 1, y: 0 };
    let nextDirection = { x: 1, y: 0 };
    let gameInterval;
    const gameSpeed = 200;
    let isGameOver = false;
    let isGameStarted = false;
    let canRestart = false;
  
    function initGame() {
      gridSize = parseInt(gridSizeInput.value) || 9;
      cellSize = canvas.width / gridSize;
      snake = [];
      const startX = Math.floor(gridSize / 2);
      const startY = Math.floor(gridSize / 2);
  
      for (let i = 2; i >= 0; i--) {
        snake.unshift({ x: startX - i, y: startY });
      }
  
      direction = { x: 1, y: 0 };
      nextDirection = { x: 1, y: 0 };
      placeFood();
      scoreDisplay.textContent = "Score: 0";
      isGameOver = false;
      isGameStarted = false;
      canRestart = false;
      messageDisplay.textContent = "Press any key to start";
      draw();
    }
  
    function placeFood() {
      let valid = false;
      while (!valid) {
        food.x = Math.floor(Math.random() * gridSize);
        food.y = Math.floor(Math.random() * gridSize);
        valid = !snake.some(segment => segment.x === food.x && segment.y === food.y);
      }
    }
  
    function gameLoop() {
      direction = nextDirection;
      const newHead = {
        x: (snake[0].x + direction.x + gridSize) % gridSize,
        y: (snake[0].y + direction.y + gridSize) % gridSize
      };
  
      if (snake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        endGame();
        return;
      }
  
      snake.unshift(newHead);
  
      if (newHead.x === food.x && newHead.y === food.y) {
        scoreDisplay.textContent = "Score: " + (snake.length - 3);
        placeFood();
      } else {
        snake.pop();
      }
      draw();
    }
  
    function draw() {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = "red";
      ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);
  
      ctx.fillStyle = "green";
      snake.forEach(segment => {
        ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
      });
    }
  
    function endGame() {
      clearInterval(gameInterval);
      isGameOver = true;
      isGameStarted = false;
      canRestart = true;
      messageDisplay.textContent = "Game Over! Press any key to restart.";
    }
  
    document.addEventListener("keydown", function(e) {
      if (isGameOver && canRestart) {
        initGame();
        isGameStarted = true;
        messageDisplay.textContent = "";
        gameInterval = setInterval(gameLoop, gameSpeed);
        canRestart = false;
        return;
      }
  
      if ((e.key === "ArrowUp" || e.key === "w" || e.key === "W") && direction.y !== 1) {
        nextDirection = { x: 0, y: -1 };
      } else if ((e.key === "ArrowDown" || e.key === "s" || e.key === "S") && direction.y !== -1) {
        nextDirection = { x: 0, y: 1 };
      } else if ((e.key === "ArrowLeft" || e.key === "a" || e.key === "A") && direction.x !== 1) {
        nextDirection = { x: -1, y: 0 };
      } else if ((e.key === "ArrowRight" || e.key === "d" || e.key === "D") && direction.x !== -1) {
        nextDirection = { x: 1, y: 0 };
      }
  
      if (!isGameStarted) {
        isGameStarted = true;
        messageDisplay.textContent = "";
        gameInterval = setInterval(gameLoop, gameSpeed);
      }
    });
  
    updateGridBtn.addEventListener("click", function() {
      clearInterval(gameInterval);
      initGame();
    });
  
    initGame();
  };  
