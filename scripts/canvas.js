//load canvas
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


var mouse = {
    x: undefined,
    y: undefined
}
//get mouse coordinates
window.addEventListener('mousemove',
    function (event) {
        mouse.x = event.pageX;
        mouse.y = event.pageY;

    });
//resposive canvas, resizible canvas
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();

});
//color array
var colorArray = [
    '#31353D',
    '#445878',
    '#92CDCF',
    '#EEEFF7'
];
//circle object
function Circle(x, y, sx, sy, radius) {
    this.x = x;
    this.y = y;
    this.sx = sx;
    this.sy = sy;
    this.radius = radius;
    var maxRadius = 40;
    var minRadius = radius;
    var color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = color;
        c.fill();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.sx = -this.sx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.sy = -this.sy
        }
        this.x += this.sx;
        this.y += this.sy;
        //interactivity with mouse
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius)
                this.radius += 1;
        } else if (this.radius > minRadius) {
            this.radius -= 1;
        }
        this.draw()
    }
}
//square object
function Square(x, y, sx, sy, size) {
    this.x = x;
    this.y = y;
    this.sx = sx;
    this.sy = sy;
    this.size = size;
    var maxSize = 60;
    var minSize = size;
    var color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function () {

        c.fillStyle = color;
        c.fillRect(this.x, this.y, this.size, this.size)

    }
    this.update = function () {
        if (this.x + this.size > innerWidth || this.x < 0) {
            this.sx = -this.sx
        }
        if (this.y + this.size > innerHeight || this.y < 0) {
            this.sy = -this.sy
        }
        this.x += this.sx;
        this.y += this.sy;
        //interactivity with mouse
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.size < maxSize)
                this.size += 1;
        } else if (this.size > minSize) {
            this.size -= 1;
        }
        this.draw()
    }
}
//triangule object
function Triangule(x, y, sx, sy, size) {
    this.x = x;
    this.y = y;
    this.sx = sx;
    this.sy = sy;
    this.size = size;
    var maxSize = 60;
    var minSize = size;
    var color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function () {


        c.beginPath();
        c.moveTo(this.x, this.y);
        c.lineTo(this.x + this.size / 2, this.y + this.size);
        c.lineTo(this.x - this.size / 2, this.y + this.size);
        c.closePath();
        c.fillStyle = color;
        c.fill();

    }
    this.update = function () {
        if (this.x + this.size > innerWidth || this.x - (this.size / 2) < 0) {
            this.sx = -this.sx
        }
        if (this.y + this.size > innerHeight || this.y < 0) {
            this.sy = -this.sy
        }
        this.x += this.sx;
        this.y += this.sy;
        //interactivity with mouse
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.size < maxSize)
                this.size += 1;
        } else if (this.size > minSize) {
            this.size -= 1;
        }
        this.draw()
    }
}

//array that will containt the objects, circles,square and triangules
var objectArray = []
//fill the array with objects
function init() {
    objectArray = [];
    for (var i = 0; i < 1000; i++) {
        var size = Math.random() * 5 + 1;
        var x = Math.random() * (innerWidth - size * 2) + size;
        var y = Math.random() * (innerHeight - size * 2) + size;
        var sx = (Math.random() - 0.5);
        var sy = (Math.random() - 0.5);
        var rand = Math.floor(Math.random() * 3)
        if (rand == 0) {
            objectArray.push(new Circle(x, y, sx, sy, size))
        } else if (rand == 1) {
            objectArray.push(new Square(x, y, sx, sy, size))
        } else {
            objectArray.push(new Triangule(x, y, sx, sy, size))
        }

    }
}


init();
//animate the objects
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < objectArray.length; i++) {
        objectArray[i].update();
    }


}
animate();