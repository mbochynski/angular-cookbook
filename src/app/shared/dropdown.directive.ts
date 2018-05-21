import { Directive, HostListener, Renderer2, ElementRef, Input } from "@angular/core";

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @Input() className: string = 'dropdown-opened';

  private isOpened = false;

  @HostListener('click') mouseClickListener() {
    const el = this.elRef.nativeElement;
    if (!this.isOpened) {
      this.renderer.addClass(el, this.className);
      this.isOpened = true;
    } else {
      this.renderer.removeClass(el, this.className);
      this.isOpened = false;
    }
  }

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
}
