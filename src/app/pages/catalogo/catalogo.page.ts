import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
// FIJATE AQUÍ: debe decir 'movie.service'
import { MovieService } from '../../services/movie.service'; 

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class CatalogoPage implements OnInit {
  peliculas: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPeliculas().subscribe((resp: any) => {
      this.peliculas = resp;
      console.log('Peliculas cargadas:', this.peliculas); // Esto te ayuda a ver si funciona en la consola (F12)
    });
  }
}