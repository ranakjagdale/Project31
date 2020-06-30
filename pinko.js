class Pinko{
    constructor(x,y){
      var  options= {
          isStatic: false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      
     
      this.body = Bodies.circle(x, y, 10,options);  
      this.color=color( 255,  255,  255);
      World.add(world,this.body);
      
    }

    display(){
       var pos = this.body.position;        
       ellipseMode(RADIUS);
       fill("white");
       ellipse(pos.x, pos.y, 10,10);
     
    }
}
