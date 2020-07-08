const fuses = [];

function init() {
    fuses.push(new Fuse(10,20))
    fuses.push(new Fuse(20,10,-1,.5))
    fuses.push(new Fuse(30,50,5))
    fuses.push(new Fuse(40,90))
    setInterval(
        x => mainloop(),
        10)
}

function mainloop() {

    for (const fuse of fuses) {
        fuse.updatePosition()
    }
}

class Fuse {
    constructor(x, y, dx=1, dy=1) {
        this.x=x
        this.y=y
        this.dx=dx
        this.dy=dy
        this.content = document.createElementNS("http://www.w3.org/2000/svg", 'text');
        this.content.innerHTML = "text"
        this.content.setAttribute("x", x)
        this.content.setAttribute("y", y)
        document.querySelector("svg").appendChild(this.content)
    }

    updatePosition() {
        this.x=parseInt(this.content.getAttribute("x"))+this.dx
        this.y=parseInt(this.content.getAttribute("y"))+this.dy
        this.content.setAttribute("x",this.x)
        this.content.setAttribute("y",this.y)
    }
}