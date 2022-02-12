import { Component,OnInit,Input } from '@angular/core';
import { PersonaServices } from './services/persona.services';
import { PersonaModel } from './models/persona.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonaServices]
})
export class AppComponent implements OnInit{

  title = 'examen-angular-my';
  public persona : PersonaModel;
  public personas :any;
  @Input() auth:any;

  constructor(
    
    private _personaService:PersonaServices,

  ){
    
    this.persona=new PersonaModel('','');
  }

  ngOnInit(){
    
    this.obtenerListPersonas();
  
  }
  
  public obtenerListPersonas()
  {
      let items =this._personaService.listPersona().subscribe(resp=>{
      return  this.personas = JSON.parse(resp);
    
    },error=>{

      let errorMessage = <any>error;
      throw `Error al realizar la petición ${errorMessage}`;
    
    });
  }

  public guardarDatos(){

    localStorage.clear(); 
    
    let data ={
      
      nombre:this.persona.nombre,
      documento:this.persona.documento
    }
    localStorage.setItem('data',JSON.stringify(data) );    
    
  }
}
