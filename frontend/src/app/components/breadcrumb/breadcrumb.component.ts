import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
  currentUrl: string = '';
  breadcrumbParts: string[] = [];

  constructor(private router: Router) {}

  //Obtenemos la url actual
  ngOnInit(){
  const parts = this.router.url.split('/');
  
  //Eliminamos el primer espacio en blanco del link
  parts.shift();

  this.breadcrumbParts = parts
  }
}
