window.onload = function(){
var cv = document.getElementById("lienzo");
var cx = cv.getContext("2d");

var square = function(x,y,wi,he,color){
    this.x = x;
    this.y = y;
    this.wi = wi;
    this.he = he;
    this.color = color;

    this.draw = function(){
        cx.beginPath();
        cx.fillStyle = this.color;
        cx.fillRect(this.x,this.y,this.wi,this.he);
        
        cx.fill();
        cx.closePath();

    };
    
};
//elementos
var wall = [];

var level0=[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1],
    [1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1],
    [1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1],
    [1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1],
    [1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1],
    [1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1],
    [1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1],
    [1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1],
    [1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function setMap(map, blockSize){
    var col = 0,
    row = 0,
    columns = 0,
    rows = 0;
    wall.length = 0;

    for(row = 0, rows = map.length; row < rows; row++){
        for(col = 0, columns = map[row].length; col < columns; col++){
            if(map[row][col]=== 1){
                wall.push(new square(col * blockSize, row * blockSize, blockSize, blockSize, "#0055ff"));
            }
        }
    }
}

function draw(){
    for(i =0; i < wall.length; i++){
        wall[i].draw();
    }
}

function run(){
    setMap(level0, 30);
    draw();
}
run();
};