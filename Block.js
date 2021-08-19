class Block extends BaseClass{
 // constructor(x, y, width, height) {
   //   var options = {
     //     restitution :0.4,
       //   friction :0.0,
      //}
      //this.body = Bodies.rectangle(x, y, width, height, options);
      //this.width = width;
      //this.height = height;
      //this.image= loadImage("block.png")
      //this.visiblity=255;
      //World.add(world, this.body);
    //}
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("block.png");
      this.Visiblity = 255;
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 20, 20);
        pop();
      }
      
    }
   };