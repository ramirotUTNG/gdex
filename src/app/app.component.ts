import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inventario', url: '/folder/Inventario', icon: 'archive' },
    { title: 'Sistema de Ventas', url: '/folder/Sistema de Ventas', icon: 'apps' },
    { title: 'Proveedores', url: '/folder/Proveedores', icon: 'compass' },
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'desktop' },
    { title: 'Configuracion', url: '/folder/Configuracion', icon: 'build' },
    
  ];
  /*public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];*/
  constructor() {}
}
