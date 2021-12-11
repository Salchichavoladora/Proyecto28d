class Launcher {
    constructor( bodyA , pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            //rigidez maximo de 1
            stiffness: 0.004,
            //largo maximo de 10
            length: 5
        }
        this.pointB = pointB;
        //le da las opciones a la resortera
        this.launcher = Constraint.create(options);
        World.add(world,this.launcher);
    }
    
    attach(){
        Body.add(body,this.bodyA);
    }

    //metodo para soltar el bird quitando la restriccion
    fly(){
        this.launcher.bodyA = null;
    }
    
    display(){
    
        //condicion que solo se ejecura si existe el body A
    if(this.launcher.bodyA){
        //define los pointsA Y B
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
    
        strokeWeight(3);
        //dibuja la linea de la chain
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
    }
