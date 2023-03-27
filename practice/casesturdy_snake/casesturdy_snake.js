<<<<<<< HEAD
let save = [];
let n = 0;
let b = 0;
let resultInput = document.getElementById("resultInput");
let resultInput2 = document.getElementById("resultInput2");

let save2 = []; //tạo vùng dữ liệu để lưu highest score

//khung game

var canvas = document.getElementById("game");

var context = canvas.getContext("2d");
=======
let save=[];
let n =0;
let b=0;
let resultInput= document.getElementById("resultInput");
let resultInput2= document.getElementById("resultInput2");
let save2=[];
 //khung game

var canvas = document.getElementById('game');

var context = canvas.getContext('2d');


>>>>>>> main

var grid = 16;
// khởi tạo rắn là 1 ô vuông

var snake = {
<<<<<<< HEAD
  x: 160, //vị trí của snake

  y: 160,

  dx: grid, //hướng di chuyển theo phương x hoặc y start game
  //snake sẽ di chuyển theo hướng x

  dy: 0,

  cells: [],

  maxCells: 4,
=======

  x: 160, //vị trí của snake 

  y: 160,

  dx: grid, //hướng di chuyển theo phương x hoặc y start game 
 //snake sẽ di chuyển theo hướng x

  dy: 0,      

  cells: [],

  maxCells: 4

>>>>>>> main
};

var count = 0;
// vị  trí đặt apple
var apple = {
<<<<<<< HEAD
  x: 320,

  y: 320,
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop

function loop() {
  //hàm này giống như setTimeout, sẽ gọi lại hàm loop khi loop thực thi xong

  requestAnimationFrame(loop);

  // slow game loop to 15 fps instead of 60 - 60/15 = 4 chỉnh tốc độ rắn chạy

  if (++count < 4) {
    return;
  }

  count = 0;

  context.clearRect(0, 0, canvas.width, canvas.height);
=======

  x: 320,

  y: 320

};
//  score


function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;

}


// game loop

function loop() {
//hàm này giống như setTimeout, sẽ gọi lại hàm loop khi loop thực thi xong

  requestAnimationFrame(loop);


  // slow game loop to 15 fps instead of 60 - 60/15 = 4

  if (++count < 4) {

    return;

  }


  count = 0;

  context.clearRect(0,0,canvas.width,canvas.height);

>>>>>>> main

  snake.x += snake.dx; // dùng loop để rắn di chuyển mỗi loop rắn sẽ di chuyển thêm 1dx đơn vị

  snake.y += snake.dy;

<<<<<<< HEAD
  // khi snake đụng tường sẽ chạy lại từ edge đối diện

  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  } else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  } else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // Phương thức unshift sẽ thêm một hoặc nhiều phần tử vào đầu mảng

  snake.cells.unshift({ x: snake.x, y: snake.y });

  // nguyên lí di chuyển của rắn là dùng vòng lặp thêm 1 ô vuông phía trc thì phải remove 1 cái phía sau

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // draw apple - tạo apple cho rắn ăn

  context.fillStyle = "red";

  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  // thiết kế rắn

  context.fillStyle = "white";

  snake.cells.forEach(function (cell, index) {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    // cách rắn ăn táo

    if (cell.x === apple.x && cell.y === apple.y) {
      if (
        cell.x == apple.x &&
        cell.y == apple.y &&
        save.length >= save2.length
      ) {
        let c = b++;
        let a = n++;
        save.push(a);
        save2.push(c);
        console.log(save);
        resultInput.value = save.length;
        resultInput2.value = save2.length;
      } else if (
        cell.x == apple.x &&
        cell.y == apple.y &&
        save.length < save2.length
      ) {
        let a = n++;
        save.push(a);
        console.log(save);
        resultInput.value = save.length;
      }

      snake.maxCells++;
      apple.x = getRandomInt(0, 25) * grid;

      apple.y = getRandomInt(0, 25) * grid;
    }
=======

  // khi snake đụng tường sẽ chạy lại từ edge đối diện

  if (snake.x < 0) {

    snake.x = canvas.width - grid;

  }

  else if (snake.x >= canvas.width) {

    snake.x = 0;

  }


  if (snake.y < 0) {

    snake.y = canvas.height - grid;

  }

  else if (snake.y >= canvas.height) {

    snake.y = 0;

  }


  // Phương thức unshift sẽ thêm một hoặc nhiều phần tử vào đầu mảng

  snake.cells.unshift({x: snake.x, y: snake.y});


  // nguyên lí di chuyển của rắn là dùng vòng lặp thêm 1 ô vuông phía trc thì phải remove 1 cái phía sau 

  if (snake.cells.length > snake.maxCells) {

    snake.cells.pop();

  }


  // draw apple - tạo apple cho rắn ăn

  context.fillStyle = 'red';

  context.fillRect(apple.x, apple.y, grid-1, grid-1);


  // thiết kế rắn

  context.fillStyle = 'white';

  snake.cells.forEach(function(cell, index) {

    context.fillRect(cell.x, cell.y, grid-1, grid-1);

    // cách rắn ăn táo
    
    
    if (cell.x === apple.x && cell.y === apple.y) {       
        if (cell.x == apple.x && cell.y == apple.y&&save.length>=save2.length){
            let c=b++;
            let a = n++;
            save.push(a);
            save2.push(c);
            console.log(save);
            resultInput.value=save.length;
            resultInput2.value=save2.length;
          
        } else if(cell.x == apple.x && cell.y == apple.y&&save.length<save2.length){
            let a = n++;
            save.push(a);
            console.log(save);
            resultInput.value=save.length;
        }
        
      snake.maxCells++;
      apple.x = getRandomInt(0, 25) * grid;

      apple.y = getRandomInt(0, 25) * grid;      
      
 } 


        

>>>>>>> main

    // check va chạm khi rắn đụng đuôi

    for (var i = index + 1; i < snake.cells.length; i++) {
<<<<<<< HEAD
      // va chạm thì reset game

      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        //   tính điểm

=======
             

      // va chạm thì reset game
      

      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        //   tính điểm
    
>>>>>>> main
        snake.x = 160;

        snake.y = 160;

        snake.cells = [];

        snake.maxCells = 4;

        snake.dx = grid;

        snake.dy = 0;

<<<<<<< HEAD
        apple.x = getRandomInt(0, 25) * grid;

        apple.y = getRandomInt(0, 25) * grid;
        alert(`Your score is: ${save.length}, click OK to restart`);
        resultInput.value = 0;
        save.length = 0;
      }
    }
  });
}

//bắt sự kiện bàn phím ấn xuống

document.addEventListener("keydown", function (e) {
  // lọc sự kiện keydown để rắn không di ngược lại

  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;

    snake.dy = 0;
  } else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;

    snake.dx = 0;
  } else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;

    snake.dy = 0;
  } else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;

    snake.dx = 0;
  }
});

requestAnimationFrame(loop);
=======

        apple.x = getRandomInt(0, 25) * grid;

        apple.y = getRandomInt(0, 25) * grid;
        alert(`Your score is: ${save.length}`);
        resultInput.value=0;
        save.length=0;      
        
      }
      
    }

  });



}


//bắt sự kiện bàn phím ấn xuống

document.addEventListener('keydown', function(e) {

  // lọc sự kiện keydown để rắn không di ngược lại

  if (e.which === 37 && snake.dx === 0) {

    snake.dx = -grid;

    snake.dy = 0;

  }

  else if (e.which === 38 && snake.dy === 0) {

    snake.dy = -grid;

    snake.dx = 0;

  }

  else if (e.which === 39 && snake.dx === 0) {

    snake.dx = grid;

    snake.dy = 0;

  }

  else if (e.which === 40 && snake.dy === 0) {

    snake.dy = grid;

    snake.dx = 0;

  }

});


requestAnimationFrame(loop);

>>>>>>> main
