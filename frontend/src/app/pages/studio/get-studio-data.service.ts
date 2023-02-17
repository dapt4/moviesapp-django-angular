import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {studioDataType} from './types';
import  host  from '../../../assets/host';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetStudioDataService {

  constructor(private http: HttpClient) { }

  private getDataUrl(id: string){
    return `${host}/estudio/${id}`;
  }

  private saveDataUrl(id: number){
    return `${host}/estudio/${id}`;
  }

  public getData(id:string):Observable<studioDataType>{
    return this.http.get<studioDataType>(this.getDataUrl(id))
  }

  public saveData(data:studioDataType): Observable<studioDataType>{
    if(data.id === 0){
      return this.http.post<studioDataType>(`${host}/estudio`, data)
    }else{
      return this.http.put<studioDataType>(this.saveDataUrl(data.id), data)
    }
  }
}
