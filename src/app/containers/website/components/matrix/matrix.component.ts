import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})

export class MatrixComponent implements AfterViewInit {

  @ViewChild('canvas') refCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() colors = ['#00cbf8'];

  context!: CanvasRenderingContext2D;
  effect!: Effect;
  fps = 160;
  lastTime = 0;
  timer = 0;
  nextFrame = 1000 / this.fps;
  gradient!: CanvasGradient;

  ngAfterViewInit(): void {
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.effect.resize(canvas.width, canvas.height);
    })
    const canvas: HTMLCanvasElement = this.refCanvas.nativeElement;
    this.context = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (this.colors.length !== 1) {
      this.gradient = this.context.createLinearGradient(0, 0, canvas.width, canvas.height);
      let index = 0;
      let increment = 1 / (this.colors.length - 1);
      this.colors.map(c => {
        this.gradient.addColorStop(index, c)
        index += increment
      });
    }
    this.effect = new Effect(canvas.width, canvas.height);
    this.animate(0);
  }

  animate(timeStamp: number) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    if (this.timer > this.nextFrame) {
      this.context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      this.context.textAlign = 'center';
      this.context.fillRect(0, 0, this.refCanvas.nativeElement.width, this.refCanvas.nativeElement.height);
      this.context.fillStyle = this.colors.length !== 1 ? this.gradient : this.colors[0];
      this.context.font = `${this.effect.fontSize}px monospace`;
      this.effect.symbols.forEach(symbol => symbol.draw(this.context));
      this.timer = 0;
    } else {
      this.timer += deltaTime;
    }
    requestAnimationFrame(this.animate.bind(this));
  }
}

export class Symbol {

  characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  x: number;
  y: number;
  fontSize: number;
  text = '';
  canvasHeight: number;

  constructor(x: number, y: number, fontSize: number, cavasHeight: number) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = cavasHeight;
  }

  draw(context: CanvasRenderingContext2D) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    )
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize)
    this.y = (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98)
      ? 0 : this.y + 1;
  }
}

export class Effect {

  canvasWidth!: number;
  canvasHeight!: number;
  columns!: number;
  fontSize = 15;
  symbols!: Symbol[];

  constructor(canvasWidth: number, canvasHeight: number) {
    this.#start(canvasWidth, canvasHeight);
  }

  #start(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.#inicialize();
  }

  #inicialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
    }
  }

  resize = (width: number, height: number) => this.#start(width, height);
}
