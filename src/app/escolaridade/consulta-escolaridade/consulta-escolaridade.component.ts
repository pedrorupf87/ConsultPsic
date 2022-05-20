import { Component, OnInit } from '@angular/core';
import { AcessoService } from '../../acesso.service';

@Component({
  selector: 'app-consulta-escolaridade',
  templateUrl: './consulta-escolaridade.component.html',
  styleUrls: ['./consulta-escolaridade.component.css']
})
export class ConsultaEscolaridadeComponent implements OnInit {

  constructor(private acesso: AcessoService) { }

  ListaEscolaridade: any = [];
  TituloModal: string;
  EditaEscolaridade: boolean = false;
  esc: any;

  ngOnInit(): void{
    this.atualizaLista();
  }

  insereClick(){
    this.esc = {
      COD_ESCOLARIDADE: 0,
      TXT_ESCOLARIDADE: ""
    }
    this.TituloModal = "Nova Escolaridade";
    this.EditaEscolaridade = true;
  }

  editaClick(item){
    this.esc = item;
    this.TituloModal = "Alterar Escolaridade";
    this.EditaEscolaridade = true;
  }

  deletaClick(item){
    if(confirm('Deseja realmente excluir esta Escolaridade?')){
      this.acesso.deletaEscolaridade(item.COD_ESCOLARIDADE).subscribe(dados => {
        alert(dados.toString());
        this.atualizaLista();
      })
    }
  }

  fechaClick(){
    this.EditaEscolaridade = false;
    this.atualizaLista();
  }

  atualizaLista(){
    this.acesso.consultaEscolaridade().subscribe(dados => {
      this.ListaEscolaridade = dados;
    });
  }
}
