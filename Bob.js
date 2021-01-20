class Bob {

    constructor (x,y) {

        //set predefined radius
        this.radius=55;

        //give options
        var bob_options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        //create body for bob
        this.body=Bodies.circle(x,y,this.radius/2-10,bob_options);

        //add body to world
        World.add(world,this.body);

    }

    //display to show
    display(){
        
        //control position
        var pos=this.body.position;

        push()

        //translate origin
        translate(pos.x,pos.y);
        //color it purple
        fill ("magenta");
        //make ellipse mode to center
        ellipseMode (CENTER); 
        //create ellipse to display 
        ellipse(0,0,this.radius, this.radius);

        pop ()

    }



}