import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import host from '../../../assets/host';
import {actorType} from './actorTypes';
import { movieType } from './actorTypes';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) { }
  
  public getData(id:number){
    let url = `${host}/actor/${id}`;
    return this.http.get<actorType>(url)
  }

  public getPeliculas(){
    let url = `${host}/pelicula`
    return this.http.get<movieType[]>(url)
  }

  public save(id: number, actor:actorType){
    if (id){
      let url = `${host}/actor/${id}`;
      return this.http.put<actorType>(url, actor);
    }else{
      let url = `${host}/actor`;
      return this.http.post<actorType>(url, actor)
    }
  }
}
