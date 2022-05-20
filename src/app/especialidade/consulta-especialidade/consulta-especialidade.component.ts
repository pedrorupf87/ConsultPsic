import { Component, OnInit } from '@angular/core';
import { AcessoService } from '../../acesso.service';

@Component({
  selector: 'app-consulta-especialidade',
  templateUrl: './consulta-especialidade.component.html',
  styleUrls: ['./consulta-especialidade.component.css']
})
export class ConsultaEspecialidadeComponent implements OnInit {

  constructor(private acesso: AcessoService) { }

  ListaEspecialidade: any = [];
  TituloModal: string;
  EditaEspecialidade: boolean = false;
  esp: any;

  ngOnInit(): void{
    this.atualizaLista();
  }

  insereClick(){
    this.esp = {
      COD_ESPECIALIDADE: 0,
      TXT_ESPECIALIDADE: ""
    }
    this.TituloModal = "Nova Especialidade";
    this.EditaEspecialidade = true;
  }

  editaClick(item){
    this.esp = item;
    this.TituloModal = "Alterar Especialidade";
    this.EditaEspecialidade = true;
  }

  deletaClick(item){
    if(confirm('Deseja realmente excluir esta Especialidade?')){
      this.acesso.deletaEspecialidade(item.COD_ESPECIALIDADE).subscribe(dados => {
        alert(dados.toString());
        this.atualizaLista();
      })
    }
  }

  fechaClick(){
    this.EditaEspecialidade = false;
    this.atualizaLista();
  }

  atualizaLista(){
    this.acesso.consultaEspecialidade().subscribe(dados => {
      this.ListaEspecialidade = dados;
    });
  }
}
