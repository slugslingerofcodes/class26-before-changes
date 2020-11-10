class Log extends Base{
    constructor(x,y,z,h,angle){
     super(x,y,z,h,angle) 
        this.image=loadImage("sprites/wood2.png")
        Matter.Body.setAngle(this.body, angle);
    }
    object(){
       super.object()    
    }
}