import { Component, OnInit, Input } from '@angular/core';
import { AcessoService } from '../../acesso.service';

@Component({
  selector: 'app-edita-escolaridade',
  templateUrl: './edita-escolaridade.component.html',
  styleUrls: ['./edita-escolaridade.component.css']
})
export class EditaEscolaridadeComponent implements OnInit {

  constructor(private acesso: AcessoService) { }

  @Input() esc: any;
  COD_ESCOLARIDADE: string;
  TXT_ESCOLARIDADE: string;

  ngOnInit(): void {
    this.COD_ESCOLARIDADE = this.esc.COD_ESCOLARIDADE;
    this.TXT_ESCOLARIDADE = this.esc.TXT_ESCOLARIDADE;
  }

  insereEsc(){
    var dados = {COD_ESCOLARIDADE: this.COD_ESCOLARIDADE,
                 TXT_ESCOLARIDADE: this.TXT_ESCOLARIDADE};
    this.acesso.insereEscolaridade(dados).subscribe(res => {
      alert(res.toString());
    });
  }

  alteraEsc(){
    var dados = {COD_ESCOLARIDADE: this.COD_ESCOLARIDADE,
                 TXT_ESCOLARIDADE: this.TXT_ESCOLARIDADE};
    this.acesso.alteraEscolaridade(dados).subscribe(res => {
      alert(res.toString());
});
  }

}
