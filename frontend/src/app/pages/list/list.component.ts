import { Component } from '@angular/core';
import { GetMoviesService } from './getMovies.service';
import { moviesTypes, studiesTypes, actorsTypes} from './types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  public movies: moviesTypes[] = [];

  public studies: studiesTypes[] = [];

  public actors: actorsTypes[] = [];

  constructor(public getMoviesS: GetMoviesService){}

  private getMovies(){
    this.getMoviesS.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  private getStudies(){
    this.getMoviesS.getStudies().subscribe(data => {
      this.studies = data;
    });
  }

  private getActors(){
    this.getMoviesS.getActors().subscribe(data => {
      this.actors = data;
    });
  }

  public deleteMovie(id:number):void{
    this.getMoviesS.deleteMovie(id).subscribe((data:moviesTypes) => {
      console.log(data);
      this.getMovies();
    })
  }

  public deleteStudy(id:number):void{
    this.getMoviesS.deleteStudy(id).subscribe((data:studiesTypes) => {
      console.log(data);
      this.getStudies();
    })
  }

  public deleteActor(id: number):void{
    this.getMoviesS.deleteActor(id).subscribe((data:actorsTypes) => {
      console.log(data);
      this.getActors();
    })
  }

  ngOnInit(){
    this.getMovies();
    this.getStudies();
    this.getActors();
  }
}
