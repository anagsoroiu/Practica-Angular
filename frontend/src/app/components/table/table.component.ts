import { Component } from '@angular/core';
import { ButtonDirective } from '../../shared/directives/button.directive';

@Component({
  selector: 'app-table',
  imports: [ButtonDirective],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {

}
