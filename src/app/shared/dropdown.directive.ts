import { Directive, HostListener, Renderer2, ElementRef, Input, HostBinding } from "@angular/core";

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpened = false;

  @HostListener('click') mouseClickListener() {
    this.isOpened = !this.isOpened;
  }

}
