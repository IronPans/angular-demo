import { Directive, ElementRef, AfterViewInit, Renderer2,
HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective implements AfterViewInit {

  @HostBinding('style.font-size') fontSize = '20px';
  @HostListener('click') onClick() {
    alert('你点了我!');
  }

  @Input('appButton') name: string;  // 定义别名
  constructor(private er: ElementRef, private renderer2: Renderer2) { }

  ngAfterViewInit() {
    this.renderer2.addClass(this.er.nativeElement, 'btn');

    if (this.name) {
      const text = this.renderer2.createText(this.name);
      this.renderer2.appendChild(this.er.nativeElement, text);
    }
  }
}
