class Box{
  constructor(x,y,w,h){

    var options={
        isStatic:false,
        restitution:0.04,
        
    }
    this.visiblity= 255;
    // this.body.frictionAir = 0.001;
    this.body = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.w = w;
    this.h = h;
  }


  score(){
    if(this.visiblity<0 && this.visiblity >-105){
      score++;
      
    }
      }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      if (this.body.speed<3){
      push ();
      strokeWeight(2);
      translate(this.body.position.x, this.body.position.y);
      rotate (angle);
      rectMode(CENTER);
      rect(0,0,30,40);
      pop ();
      }

      else{
        push ();
        World.remove(world,this.body);
        tint (255, this.visiblity);
        pop ();
      }
  }

 
}