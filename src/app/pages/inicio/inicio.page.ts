import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // <--- Importante para que funcione el botón

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true, // <--- Configuración moderna
  imports: [IonicModule, CommonModule, FormsModule, RouterModule] // <--- Importamos las herramientas
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Aquí no necesitamos lógica porque es solo información estática
  }

}