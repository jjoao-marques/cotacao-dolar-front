import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Moeda } from 'src/app/models/moeda';
import { MoedaService } from 'src/app/services/moeda/moeda.service';

@Component({
  selector: 'app-content-cotacao',
  templateUrl: './content-cotacao.component.html',
  styleUrls: ['./content-cotacao.component.css']
})
export class ContentCotacaoComponent implements OnInit {
  public cotacaoForm!: FormGroup; 
  
  moedas: Moeda[] = [];

  constructor(private moedaService: MoedaService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cotacaoForm = this.fb.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]]
    })
  }


  buscarCotacao() {
      let newDateStart: moment.Moment = moment.utc(this.cotacaoForm.value.startDate).local();
      let newDateEnd: moment.Moment = moment.utc(this.cotacaoForm.value.endDate).local();
      let dataInicial = this.cotacaoForm.value.startDate = newDateStart.format("MM-DD-yyyy")
      let dataFinal = this.cotacaoForm.value.endDate = newDateEnd.format("MM-DD-yyyy")


      this.moedaService.buscarPorPeriodo(dataInicial, dataFinal).subscribe(resp => {
        this.moedas = resp;
        this.cotacaoForm.reset();
      })
  }

}
