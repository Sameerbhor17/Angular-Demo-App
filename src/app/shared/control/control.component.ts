import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // encapsulation: ViewEncapsulation.Emulated --- This is default encapsulation behaviour for angular which enables style scoping in DOM
  encapsulation: ViewEncapsulation.None     // --- This will disable style scoping and enables global styling for input and textarea fields
})
export class ControlComponent {
  label = input.required<string>();
}
