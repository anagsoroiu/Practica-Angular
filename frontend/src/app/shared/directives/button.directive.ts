import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true
})

export class ButtonDirective {
  @HostBinding('class')
  elementClass = 'app-button'
}
