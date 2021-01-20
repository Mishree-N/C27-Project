//create roof class
class Roof {

    constructor (){

        //setup width and height and positions
        this.width = 340;
        this.height = 30;
        this.x=240;
        this.y=70;

        //give static option
        var roof_options = {
            isStatic : true
        }
        //create roof body
        this.body = Bodies.rectangle (this.x, this.y, this.width, this.height, roof_options);
        //add roof body to world
        World.add (world, this.body );
    }

    //display function to show 
    display () {

        //make pos variable to control positions
        var pos =this.body.position;
        //make rectMode center
        rectMode(CENTER);
        //color and make rectangle visible
        fill("black");
        rect(pos.x, pos.y, this.width, this.height);
        
    }

}