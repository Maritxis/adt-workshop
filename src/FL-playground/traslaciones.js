class Cristal {
    constructor(x,y){
        this._x=x;
        this._y=y;
    }

    ['fantasy-land/map'](f){
        return new Cristal(f(this._x),f(this._y));
    }

    ['fantasy-land/bimap'](f,g){
        return new Cristal (f(this._x),g(this._y));
    }

    inspect(){
        return `Cristal at (${this._x}, ${this._y})`
    }
}

const p=new Cristal(3,5);
const f=x=>x+5;
const g=x=>2*x;
const h=x=>3*x;
const i=x=>x+8;

console.log(p['fantasy-land/bimap'](a => a, b => b));
console.log(p['fantasy-land/bimap'](a => f(g(a)), b => h(i(b))));
console.log(p['fantasy-land/bimap'](g, i)['fantasy-land/bimap'](f, h));