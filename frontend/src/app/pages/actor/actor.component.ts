import { Component } from '@angular/core';
import { movieType, actorType } from './actorTypes';
import { Router, ActivatedRoute } from '@angular/router';
import { ActorService } from './actor.service';


@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent {
  id: number = 0

  actorData: actorType = {
    nombre: ''
  };

  movies: movieType[] = [];

  constructor (
    private route: ActivatedRoute,
    private actorSvc: ActorService,
    private router: Router
  ){}
  public saveData(){
    try {
      this.actorSvc.save(this.id, this.actorData).subscribe(res => {
        console.log(res)
        this.router.navigate(['/'])
      })
    } catch (err) {
      console.log(err)
    }
  }
  private getActorId(){
    this.route.params.subscribe(params => {
      this.id = params['id'] || 0;
    })
  }
  private getActorData(){
    this.actorSvc.getData(this.id).subscribe(data => {
      this.actorData = data;
    })
  }
  private getPeliculas(){
    this.actorSvc.getPeliculas().subscribe(data => {
      this.movies = data;
    })
  }
  ngOnInit(){
    this.getActorId()
    this.getPeliculas()
    if (this.id){
      this.getActorData()
    }
  }
}
