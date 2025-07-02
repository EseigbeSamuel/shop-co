import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      [class]="buttonClasses"
      (click)="onClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  // label = input('');
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'tiny' | 'small' | 'medium' | 'large' | 'full' = 'medium';

  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const baseClasses = 'rounded-full border-2 capitalize  font-medium';
    // the spaces in the classes styling are important and they need to be there
    const sizeClasses = {
      tiny: ' text-sm p-1 ',
      small: ' p-3  text-sm w-[150px] ',
      medium: ' p-4 text-base w-[200px] ',
      large: ' p-4 text-lg w-[300px] ',
      full: ' p-4 text-lg w-full ',
    };
    const variantClasses = {
      primary: 'bg-black text-white hover:bg-white hover:text-black',
      secondary: 'bg-white text-black hover:bg-black hover:text-white',
    };
    const disabledClasses = 'opacity-50 cursor-not-allowed';

    return [
      baseClasses,
      sizeClasses[this.size],
      variantClasses[this.variant],
      this.disabled ? disabledClasses : '',
    ]
      .filter(Boolean)
      .join('');
  }
}
