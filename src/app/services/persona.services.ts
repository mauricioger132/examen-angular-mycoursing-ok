import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable } from 'rxjs';
import {map } from 'rxjs/operators';
import { of } from 'rxjs';
import { URLAPI } from './global.services';
@Injectable()

export class PersonaServices{
    public url :string;
    constructor(private _http:HttpClient)
    {
        this.url =`${URLAPI.url}/${URLAPI.hash}?fmt=raw&sole`; 
    }
  
    listPersona(){
    
        const header = new HttpHeaders().set('Content-Type','application/json');
        let result =this._http.get(this.url,{headers:header});
        return result.pipe(map((res : any)=>JSON.stringify(res)));
    }
}
