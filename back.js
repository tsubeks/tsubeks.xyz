const canvas = document.getElementById("wall");
console.log(canvas);
const ctx = canvas.getContext("2d");
const colors = ['#f44336', '#fdd835','#1e88e5' ];//["#FA2E59", "#FF703F", "#F7BC05", "#76BCAD"];
let cw = (canvas.width = window.innerWidth),
  cx = cw / 2;
let ch = (canvas.height = window.innerHeight),
  cy = ch / 2;
ctx.lineCap = "round";
const rad = Math.PI / 180;
let frames = 0;
//let N = 10;
let waves = [];

class Particle {
  constructor(x, N) {
    this.pos = {
      x: x + (Math.random() * cw / (N * 2) - cx / (N * 2)),
      y: -100
    };
    this.vel = {
      x: 0,
      y: 0
    };
    this.timeIncrement = this.pos.x * 10;
    this.in = true;
  }

  update(moment, frames) {
    //53, 59, 61, 67
    let t = moment + this.timeIncrement;
    this.vel.y = 1 + Math.cos(t / 23 + Math.cos(t / 29 + frames * rad));
    this.pos.y += this.vel.y;
  }
  draw() {
    ctx.beginPath();
    ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
  }
}

class Wave {
  constructor(color) {
    this.color = color;
    this.N = 10;
    this.particles = [];
    this.memory = 0;
    this.create();
    this._setLineDash();
  }

  create() {
    let first = new Particle(-100, this.N);
    first.pos.y = -1000;
    this.particles.push(first);
    let second = new Particle(-100, this.N);
    this.particles.push(second);
    for (let i = 0; i < this.N; i++) {
      let _x = i * cw / this.N;
      this.particles.push(new Particle(_x, this.N));
    }
    this.particles.push(new Particle(cw + 100, this.N));
    let last = new Particle(cw + 100, this.N);
    last.pos.y = -1000;
    this.particles.push(last);
  }

  _setLineDash() {
    this.dashArray = [];
    for (let i = 1; i < this.particles.length - 3; i++) {
      let d = dist(this.particles[i].pos, this.particles[i + 1].pos);
      this.dashArray.push(d / 3);
      this.dashArray.push(2 * d / 3);
    }
  }

  connect() {
    this._setLineDash();
    let points = this.particles;
    ctx.beginPath();
    ctx.moveTo(points[0].pos.x, points[0].pos.y);
    for (var i = 1; i < points.length - 2; i++) {
      var cp = {};
      cp.x = (points[i].pos.x + points[i + 1].pos.x) / 2;
      cp.y = (points[i].pos.y + points[i + 1].pos.y) / 2;
      ctx.quadraticCurveTo(points[i].pos.x, points[i].pos.y, cp.x, cp.y);
    }
    ctx.quadraticCurveTo(
      points[i].pos.x,
      points[i].pos.y,
      points[i + 1].pos.x,
      points[i + 1].pos.y
    );
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = this.color;
    ctx.setLineDash([]);
    ctx.lineWidth = 30;
    ctx.stroke();
    ctx.lineWidth = 20;
    ctx.setLineDash(this.dashArray);
    ctx.strokeStyle = "rgba(255,255,255,.4)";
    ctx.stroke();
  }

  draw(moment, frames) {
    this.particles.map(p => {
      if (p.pos.y > ch && p.in) {
        p.in = false;
        this.memory++;
      }
    });
    this.particles.map(p => {
      p.update(moment, frames);
      //p.draw();
    });
    this.connect();
  }
}

waves.push(new Wave(colors[0]));
let cnt = 0;

function Frame() {
  requestId = window.requestAnimationFrame(Frame);
  ctx.clearRect(0, 0, cw, ch);
  let moment = new Date().getTime() / 30;
  frames++;
  if (frames % 200 == 0) {
    cnt++;
    waves.push(new Wave(colors[cnt % colors.length]));
  }
  //increment: allways a positive number
  let timevariable =
    1 + Math.cos(moment / 23 + Math.cos(moment / 29 + frames * rad));

  waves.map((w, i) => {
    if (w.memory == w.N + 4 && frames % 200) {
      let color = w.color;
      waves.splice(i, 1);
    }
    w.draw(moment, frames);
  });
}
Frame();

function dist(p1, p2) {
  let dx = p2.x - p1.x;
  let dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

