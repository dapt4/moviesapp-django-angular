import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetStudioDataService} from './get-studio-data.service';
import { studioDataType } from './types';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent {

  id : string = '';
  data: studioDataType = {
    id: 0,
    nombre: '',
    direccion: ''
  };

  constructor(
    private route: ActivatedRoute, 
    private getDataSvc: GetStudioDataService,
    private router: Router
  ){}

  private getStudioId(){
    this.route.params.subscribe(params => {
      this.id = params['id'] || '';
    })
  }

  private getStudioData(id:string){
    this.getDataSvc.getData(id).subscribe(data =>{
      this.data = data;
    })
  }

  public saveData(){
    this.getDataSvc.saveData(this.data).subscribe(data => {
      console.log(data);
      this.router.navigate(['/'])
    })
  }

  ngOnInit(){
    this.getStudioId();
    if(this.id){
      this.getStudioData(this.id);
    }
  }
}
