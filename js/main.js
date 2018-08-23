window.onload = function(){
var cv = document.getElementById("lienzo");
var cx = cv.getContext("2d");
var lastPress = null;
var dir = null;
 var recordLastPress;
var square = function(x,y,wi,he,color){
    this.x = x;
    this.y = y;
    this.wi = wi;
    this.he = he;
    this.color = color;
    
};

square.prototype ={
    draw: function(){
        cx.beginPath();
        cx.fillStyle = this.color;
        cx.fillRect(this.x,this.y,this.wi,this.he);
        
        cx.fill();
        cx.closePath();

    }
    
};
 player = function(x,y,wi,he,color,dir){
    this.x = x;
    this.y = y;
    this.wi = wi;
    this.he = he;
    this.color = color;
    this.dir = dir;

   
}
player.prototype ={
    draw: function(){
        cx.beginPath();
        cx.fillStyle = this.color;
        cx.fillRect(this.x,this.y,this.wi,this.he);
        cx.closePath();
        

    },
    move: function(TheKey){
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

        this.lastX = this.x;
        this.lastY = this.y;
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
            
        
    },
    intersects: function(rect){
        return (this.x < rect.x + rect.wi &&
            this.x + this.wi > rect.x &&
            this.y < rect.y + rect.he &&
            this.y + this.he > rect.y);
    }
};
//elementos
var wall = [];
var pacman = new player(90,90,30,30,"#FFFF00",dir);
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
        if(pacman.intersects(wall[i])){
            pacman.x = pacman.lastX;
            pacman.y = pacman.lastY;
            pacman.dir = null;
            canMove = false;
        }
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
    
    

   
    
});
};