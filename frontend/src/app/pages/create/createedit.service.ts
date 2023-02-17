import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {formDataType} from './types';
import {Observable} from 'rxjs';
import host from 'src/assets/host';
import {studiesTypes} from '../list/types';

@Injectable({
  providedIn: 'root'
})
export class CreateeditService {

  private headers = { 'content-type': 'application/json'}  

  constructor(private http: HttpClient) { }

  private getEditUrl(id: number){
    return `${host}/pelicula/${id}`;
  }

  private editUrl(id: number){
    return `${host}/pelicula/${id}`;
  }

  private saveUrl(){
    return `${host}/pelicula`;
  }

  public getFormData(id: number): Observable<formDataType>{
    return this.http.get<formDataType>(this.getEditUrl(id))
  }

  public getStudies():Observable<studiesTypes[]>{
    return this.http.get<studiesTypes[]>(`${host}/estudio`)
  }

  public edit(id: number, data: formDataType): Observable<formDataType>{
    return this.http.put<formDataType>(this.editUrl(id), data, {'headers': this.headers})
  }

  public save(data: formDataType):Observable<formDataType>{
    console.log(data)
    return this.http.post<formDataType>(this.saveUrl(), data, {'headers': this.headers});
  }
}
