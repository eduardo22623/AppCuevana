import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // URL de la API de TVMaze (pública y gratis)
  private apiUrl = 'https://api.tvmaze.com/shows';

  constructor(private http: HttpClient) { }

  // Obtener lista de películas
  getPeliculas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Obtener detalle de una película por ID
  getPeliculaDetalle(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}