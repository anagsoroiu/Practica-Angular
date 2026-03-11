import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { ButtonDirective } from '../../shared/directives/button.directive';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-home',
  imports: [TableComponent, ButtonDirective, BreadcrumbComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
