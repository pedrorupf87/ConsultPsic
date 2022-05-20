import { Component, OnInit, Input } from '@angular/core';
import { AcessoService } from '../../acesso.service';

@Component({
  selector: 'app-edita-especialidade',
  templateUrl: './edita-especialidade.component.html',
  styleUrls: ['./edita-especialidade.component.css']
})
export class EditaEspecialidadeComponent implements OnInit {

  constructor(private acesso: AcessoService) { }

  @Input() esp: any;
  COD_ESPECIALIDADE: string;
  TXT_ESPECIALIDADE: string;

  ngOnInit(): void {
    this.COD_ESPECIALIDADE = this.esp.COD_ESPECIALIDADE;
    this.TXT_ESPECIALIDADE = this.esp.TXT_ESPECIALIDADE;
  }

  insereEsc(){
    var dados = {COD_ESPECIALIDADE: this.COD_ESPECIALIDADE,
                 TXT_ESPECIALIDADE: this.TXT_ESPECIALIDADE};
    this.acesso.insereEspecialidade(dados).subscribe(res => {
      alert(res.toString());
    });
  }

  alteraEsc(){
    var dados = {COD_ESPECIALIDADE: this.COD_ESPECIALIDADE,
                 TXT_ESPECIALIDADE: this.TXT_ESPECIALIDADE};
    this.acesso.alteraEspecialidade(dados).subscribe(res => {
      alert(res.toString());
    });
  }
}
