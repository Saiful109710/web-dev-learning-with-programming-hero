export default class Player{
    constructor(ctx,width,height,minJumpHeight,maxJumpHeight,scaleRatio){
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.height = height;
        this.width = width;
        this.minJumpHeight = minJumpHeight;
        this.maxJumpHeight = maxJumpHeight;
        this.scaleRatio = scaleRatio
        this.x = 10*scaleRatio;
        this.y = this.canvas.heigh - this.height - 1.5*scaleRatio;
        this.standingStillImage = new Image();
        this.standingStillImage.src = "images/standing_still.png";
        this.image = this.standingStillImage;
    }
    draw(){
        this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}