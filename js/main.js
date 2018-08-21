window.onload = function(){
var cv = document.getElementById("lienzo");
var cx = cv.getContext("2d");
var lastPress = null;
dir = null;
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
var player = function(x,y,r,color,dir){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.controls ={
        LEFT: 37,
        UP:38,
        RIGHT:39,
        DOWN: 40
    };
    this.dir = dir;

    this.draw = function(){
        cx.beginPath();
        cx.fillStyle = this.color;
        cx.moveTo(this.x,this.y);
        cx.arc(this.x,this.y,this.r, Math.PI*2,0,true);
        cx.fill();
        cx.closePath();
        

    };
    this.move = function(TheKey){
        if(TheKey===37){
            dir = 0;
        }
        else if(TheKey === 38){
            dir = 1;
        }
        else if(TheKey === 39){
            dir = 2;
        }
        else if(TheKey === 40){
            dir = 3;
        }


        if(dir === 0 ){
        this.x -= 30;
        
        }
        if(dir === 1 ){
            this.y -= 30;
            
        }
        if(dir === 2 ){
            this.x += 30;
            
        }
        if(dir === 3 ){
            this.y += 30;
            
        }
            
        
    }
}
//elementos
var wall = [];
var pacman = new player(105,105,15,"#FFFF00",dir);
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
    cx.clearRect(0,0,cv.clientWidth,cv.height);
    for(i =0; i < wall.length; i++){
        wall[i].draw();
    }
    pacman.draw();
}

function run(){
    
    pacman.move(lastPress);
    setMap(level0, 30);
    draw();
    
}
window.setInterval(run,60)


window.addEventListener("keydown",function(evt){
    let code = evt.keyCode;
    lastPress = code;
    pacman.move(lastPress);
});
};