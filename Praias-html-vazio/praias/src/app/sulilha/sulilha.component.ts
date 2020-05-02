import { SulilhaService } from './../sulilha.service';
import { Praias } from './../shared/praias.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sulilha',
  templateUrl: './sulilha.component.html',
  styleUrls: ['./sulilha.component.css'],
  providers:[SulilhaService]
})
export class SulilhaComponent implements OnInit {
public praias: Praias[]
  
constructor(private sulilhaservice:SulilhaService) { }

  ngOnInit() {
    this.praias=(this.sulilhaservice.getPraias())
  }

}
