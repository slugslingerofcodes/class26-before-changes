class Box extends Base{
    constructor(x,y,z,h){
     super(x,y,z,h) 
        this.image=loadImage("sprites/wood1.png")
    }
    object(){
       super.object()    
    }
}