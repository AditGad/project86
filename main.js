var canvas=new fabric.Canvas("mycanvas");
player_x=10;
player_y=10;
blockimagewidth=30;
blockimageheight=30;
var playerobject="";
var blockimageobject="";
function playerupdate()
{
    fabric.Image.fromURL("superman.jpg",function(Img)
    {
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:player_y,left:player_x
        });
        canvas.add(playerobject);
    });
}
function imageupdate(getimg)
{
    fabric.Image.fromURL(getimg,function(Img)
    {
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top:player_y,left:player_x
        });
        canvas.add(blockimageobject);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    var keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true&&keypressed=="80")
{
    console.log("p&shiftpressedtogether");
    blockimageheight=blockimageheight+10;
    blockimagewidth=blockimagewidth+10;
    document.getElementById("currentwidth").innerHTML=blockimagewidth;
    document.getElementById("currentheight").innerHTML=blockimageheight;
}
if(e.shiftKey==true&&keypressed=="77")
{
    console.log("m&shiftpressedtogether");
    blockimageheight=blockimageheight+10;
    blockimagewidth=blockimagewidth+10;
    document.getElementById("currentwidth").innerHTML=blockimagewidth;
    document.getElementById("currentheight").innerHTML=blockimageheight;
}
if(keypressed=="38"){
    up();
    console.log("up");

}
if(keypressed=="40"){
    down();
    console.log("down");

}
if(keypressed=="37"){
    left();
    console.log("left");

}
if(keypressed==("40-1")){
    right();
    console.log("right");

}
if(keypressed=="72"){
imageupdate("hulk legs.jpg");
console.log("h");

}
if(keypressed=="67"){
    imageupdate("america.jpg");
    console.log("c");
    
    }
    if(keypressed=="73"){
        imageupdate("iron man.jpg");
        console.log("i");
        
        }
        if(keypressed=="84"){
            imageupdate("thor hand.png");
            console.log("t");
            
            }
            if(keypressed=="83"){
                imageupdate("spidey.png");
                console.log("s");
                
                }
                
                
                    
}