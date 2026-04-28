import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // encapsulation: ViewEncapsulation.Emulated --- This is default encapsulation behaviour for angular which enables style scoping in DOM
  encapsulation: ViewEncapsulation.None,    // --- This will disable style scoping and enables global styling for input and textarea fields
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   alert("Clicked");
  // }

  label = input.required<string>();
  private el = inject(ElementRef);

  onClick() {
    // alert("Clicked");
    console.log("Clicked");
    console.log(this.el);
  }
}
