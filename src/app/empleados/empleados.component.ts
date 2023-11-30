import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
empleados = [
  {id:1, nombre:"Juan",sueldo:450.45,activo:false},
  {id:2, nombre:"Evelyn",sueldo:45.45,activo:true},
  {id:3, nombre:"Francisco",sueldo:40.45,activo:false},
  {id:4, nombre:"Omar",sueldo:48.45,activo:true},
  {id:5, nombre:"Alan",sueldo:49.45,activo:false},
  {id:6, nombre:"Arnold",sueldo:41.45,activo:true},
  {id:7, nombre:"Eduardo",sueldo:23.45,activo:false},
  {id:8, nombre:"Samantha",sueldo:14.45,activo:true},
  {id:9, nombre:"Angela",sueldo:65.45,activo:false},
  {id:10, nombre:"Hania",sueldo:457.45,activo:true},
]
}
