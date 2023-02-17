import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {CreateeditService} from './createedit.service';
import { formDataType, studyType} from './types';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  private id: string = '';

  public studies: studyType[] = [];

  public formData: formDataType = {
    id: 0,
    titulo: '',
    fecha: 0,
    estudio: 0
  }; 

  constructor(
    private route: ActivatedRoute,
    private createEditS: CreateeditService,
    private router: Router
  ){}

  private getId(){
    this.route.params.subscribe(params => this.id = params['id']);
  }

  private getFormData(id: string){
    this.createEditS.getFormData(parseInt(id)).subscribe(data => {
      this.formData = {...data}
    })
  }

  private getStudies(){
    this.createEditS.getStudies().subscribe(data => {
      this.studies = data;
    });
  }

  public submitForm(){
    if (this.id){
      this.createEditS.edit(parseInt(this.id), this.formData).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      });
    }
    if(!this.id){
      this.createEditS.save(this.formData).subscribe(data => {
        console.log(data);
        this.router.navigate(['/']);
      })
    }
  }

  ngOnInit(){
    this.getId();
    this.getStudies();
    if (this.id) this.getFormData(this.id);
  }
}
