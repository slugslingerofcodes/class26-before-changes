class Bird extends Base{
    constructor(x,y,z,h){
     super(x,y,z,h) 
        this.image=loadImage("sprites/bird.png")
    }
    object(){
       super.object() 
       this.body.position.x=mouseX
       this.body.position.y=mouseY   
    }
}