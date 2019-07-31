import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { ClienteService } from '../cliente.service';
import { Libro1 } from '../interfaces/Libro1';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('parentData') public libros;

//public libros: Array<Libro>;

constructor(public ClienteService: ClienteService) {
  this.showConfig();
}

   showConfig() {
     this.ClienteService.getConfig().subscribe((data: Array<Libro>) => {this.libros = data; });

   }


  ngOnInit() {
  }
  
  filterBooks(author: string) {
    const librosAux = [];
    this.libros.forEach(libro => {
      if(libro.autor === author){
        librosAux.push(libro);
      }
    });
    this.libros = librosAux;
    console.log(this.libros);


}

}
