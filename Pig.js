class Pig extends Base{
    constructor(x,y,z,h){
     super(x,y,z,h) 
        this.image=loadImage("sprites/enemy.png")
    }
    object(){
       super.object()    
    }
}