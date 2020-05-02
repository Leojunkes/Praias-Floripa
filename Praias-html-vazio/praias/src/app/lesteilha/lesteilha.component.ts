import { LesteilhaService } from './../lesteilha.service';
import { Praias } from './../shared/praias.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lesteilha',
  templateUrl: './lesteilha.component.html',
  styleUrls: ['./lesteilha.component.css'],
  providers:[LesteilhaService]
})
export class LesteilhaComponent implements OnInit {
public praias:Praias[]
  constructor(private lesteilha:LesteilhaService) { }

  ngOnInit() {
    this.praias=(this.lesteilha.getPraias())

  }

}
