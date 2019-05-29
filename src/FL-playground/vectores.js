
class Vector {
    constructor(x,y,z){
        this._x=x;
        this._y=y;
        this._z=z;
    }

    static ['fantasy-land/empty'](){
        return new Vector(0,0,0);
    }

    ['fantasy-land/invert'](){
        return new Vector(-this._x,-this._y, -this._z);
    }

    ['fantasy-land/concat'](vector){
        return new Vector(this._x+vector._x, this._y+vector._y, this._z+vector._z);
    }

    inspect(){
        return `Vector (${this._x}, ${this._y}, ${this._z})`
    }
}

const a=new Vector(1,2,3);
const b=new Vector(4,3,5);
const c=new Vector(0,0,1);

console.log(a['fantasy-land/concat'](Vector['fantasy-land/empty']()));
console.log(Vector['fantasy-land/empty']()['fantasy-land/concat'](a));

console.log(a['fantasy-land/concat'](a['fantasy-land/invert']()));
console.log(a['fantasy-land/invert']()['fantasy-land/concat'](a));