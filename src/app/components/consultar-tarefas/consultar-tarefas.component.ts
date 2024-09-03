import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environments } from '../../../environment';

@Component({
  selector: 'app-consultar-tarefas',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './consultar-tarefas.component.html',
  styleUrl: './consultar-tarefas.component.css'
})
export class ConsultarTarefasComponent {

  tarefas: any[] = [];

  constructor(private httpClient: HttpClient) { }

  form = new FormGroup({
    dataMin: new FormControl('', [Validators.required]),
    dataMax: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }

  onSubmit() {

    this.httpClient.get(environments.apiTarefas + "/" + this.form.value.dataMin + "/" + this.form.value.dataMax)
      .subscribe({
        next: (data) => {
          this.tarefas = data as any[];
        }
      })
  }


  ngOnInit() {
    this.httpClient.get(environments.apiTarefas).subscribe({
      next: (data) => {
        this.tarefas = data as any[];
      }
    });
  }

  onDelete(id: number) {
    if (confirm('Deseja realmente excluir a tarefa selecionada?')) {

      this.httpClient.delete(environments.apiTarefas + "/" + id, { responseType: 'text' })
        .subscribe({
          next: (data) => {
            alert(data);

            this.ngOnInit();
          }
        })

    }
  }

}
