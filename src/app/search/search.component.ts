import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Libro } from '../interfaces/libro';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public enteredText: string;
public authorList: Set<string>;

public libros: any;


  constructor(public ClienteService: ClienteService) {
    this.authorList = new Set();

  }
  onPush() {
    const newLibro = this.enteredText.split('-');
    console.log(newLibro);
    let libro: Libro = {autor: newLibro[0], nombre: newLibro[1], fecha: new Date()};
    this.ClienteService.postAdd(libro).subscribe((data:{})=>{
      console.log(data);
    } )
  }


  ngOnInit() {
    this.ClienteService.getConfig().subscribe((data: {}) => {
      console.log(data);
      this.libros = data;
      this.getAuthorList();
    });
  }
  getAuthorList() {
    this.authorList.add('Any');
    this.libros.forEach(libro => {
      console.log(this.authorList.has(libro.autor));
      if (!(this.authorList.has(libro.autor))) {
        this.authorList.add(libro.autor);
      }
    });
    console.log(this.authorList);
  }
  filterBooks(authorS) {
    this.ClienteService.getConfig().subscribe((data: {}) => {
      console.log(data);
      this.libros = data;
      this.getAuthorList();
      const librosAux = [];
      console.log(authorS);
      if( authorS === 'Any') {

       } else {
      this.libros.forEach(libro => {
        console.log(libro.autor);
        if ((libro.autor) === String(authorS)) {
          console.log('TRUE');
          librosAux.push(libro);
        }
      });
      this.libros = librosAux;
      console.log(this.libros);
      }
    });
  }


}
