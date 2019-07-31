import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Libro } from './interfaces/libro';
import { Observable, throwError, of, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class ClienteService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://demolibros-lean-llama.mybluemix.net';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json'
    })
  };

  getConfig(): any {
    // now returns an Observable of Config
    return this.http.get(this.configUrl.concat('/libros'));
  }
  postAdd(libro: Libro) {
    return this.http.post<Libro>(this.configUrl.concat('/addLibro'), libro, this.httpOptions);
  }
 
}
