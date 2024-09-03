import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environments } from '../../../environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultar-categoria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consultar-categoria.component.html',
  styleUrl: './consultar-categoria.component.css'
})
export class ConsultarCategoriaComponent {

  categorias: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(environments.apiCategorias).subscribe({
      next: (data) => {
        this.categorias = data as any[];
      }
    });
  }

  onDelete(id: number) {
    if (confirm('Deseja realmente excluir a categoria selecionada?')) {

      this.httpClient.delete(environments.apiCategorias + "/" + id, { responseType: 'text' })
        .subscribe({
          next: (data) => {
            alert(data);

            this.ngOnInit();
          }
        })

    }
  }

}
