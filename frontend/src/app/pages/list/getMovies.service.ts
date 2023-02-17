import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import host from '../../../assets/host';
import {Observable} from 'rxjs';
import {moviesTypes, studiesTypes, actorsTypes} from './types';

@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {


  constructor(private http: HttpClient) { }

  private delete_url(id:number):string { 
    return `${host}/pelicula/${id}`;
  }

  private deleteStudy_url(id:number):string{
    return `${host}/estudio/${id}`;
  }

  private deleteActor_url(id:number): string{
    return `${host}/actor/${id}`;
  }

  public getMovies(): Observable<moviesTypes[]>{
    return this.http.get<moviesTypes[]>(host+'/pelicula');
  }

  public deleteMovie(id:number): Observable<moviesTypes>{
    return this.http.delete<moviesTypes>(this.delete_url(id));
  }

  public deleteStudy(id:number): Observable<studiesTypes>{
    return this.http.delete<studiesTypes>(this.deleteStudy_url(id));
  }

  public deleteActor(id:number): Observable<actorsTypes>{
    return this.http.delete<actorsTypes>(this.deleteActor_url(id));
  }

  public getStudies(): Observable<studiesTypes[]>{
    return this.http.get<studiesTypes[]>(host+'/estudio');
  }

  public getActors():Observable<actorsTypes[]>{
    return this.http.get<actorsTypes[]>(host+'/actor');
  }
}
