import { Praias } from '../shared/praias.model';
import { PraiasServiceService } from './../praias-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  providers:[PraiasServiceService]

})
export class PainelComponent implements OnInit {
public praias:Praias[]
constructor(private praiasServiceService:PraiasServiceService) { }

  ngOnInit() {
this.praias=(this.praiasServiceService.getPraias())
    
  }

}
