import { Routes } from '@angular/router';
import { CadastrarCategoriaComponent } from './components/cadastrar-categoria/cadastrar-categoria.component';
import { ConsultarCategoriaComponent } from './components/consultar-categoria/consultar-categoria.component';
import { EditarCategoriaComponent } from './components/editar-categoria/editar-categoria.component';
import { CadastrarTarefaComponent } from './components/cadastrar-tarefa/cadastrar-tarefa.component';
import { ConsultarTarefasComponent } from './components/consultar-tarefas/consultar-tarefas.component';
import { EditarTarefaComponent } from './components/editar-tarefa/editar-tarefa.component';

export const routes: Routes = [
    {
        path: 'pages/cadastrar-categoria',
        component: CadastrarCategoriaComponent
    },

    {
        path: 'pages/consultar-categoria',
        component: ConsultarCategoriaComponent
    },

    {
        path: 'pages/editar-categoria/:id',
        component: EditarCategoriaComponent
    },

    {
        path: 'pages/cadastrar-tarefa',
        component: CadastrarTarefaComponent
    },

    {
        path: 'pages/consultar-tarefas',
        component: ConsultarTarefasComponent
    },

    {
        path: 'pages/editar-tarefa/:id',
        component: EditarTarefaComponent
    }

];
