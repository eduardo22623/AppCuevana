import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <--- Arregla el error del pipe 'date'
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

// IMPORTANTE: Importamos los componentes de Ionic uno por uno para evitar el error NG8001
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonIcon, 
  IonChip, 
  IonLabel, 
  IonButton 
} from '@ionic/angular/standalone';

// Para que funcionen los íconos (como el de Play)
import { addIcons } from 'ionicons';
import { playCircle } from 'ionicons/icons';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [
    CommonModule,     // <--- Necesario para las fechas
    FormsModule,
    RouterModule,
    // Lista de componentes visuales que usamos en el HTML
    IonContent, 
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonBackButton, 
    IonIcon, 
    IonChip, 
    IonLabel, 
    IonButton
  ]
})
export class DetallePage implements OnInit {
  pelicula: any = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {
    // Registramos el ícono de play
    addIcons({ playCircle });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      this.movieService.getPeliculaDetalle(id).subscribe((resp: any) => {
        this.pelicula = resp;
      });
    }
  }
}