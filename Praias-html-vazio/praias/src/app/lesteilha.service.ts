import { Praias } from './shared/praias.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LesteilhaService {
public praias:Array<Praias>=[
  {
    id:1,
    imagens:[
    {url: "/assets/joaca.jpg"},
    ],
    praia:"Joaquina",
    descricao_praia:"Praia da Joaquina é uma praia que fica ao leste da ilha de Santa Catarina. O ponto procurado por surfistas.",
    saiba_mais: "https://pt.wikipedia.org/wiki/Praia_da_Joaquina",
    },

    {
      id:2,
      imagens:[
      {url: "/assets/mole.jpg"},
      ],
      praia:"Praia Mole",
      descricao_praia:"A Praia Mole é uma praia de mar aberto de Florianópolis. Fica no leste da Ilha de Santa Catarina, próxima a Lagoa da Conceição.",
      saiba_mais: "https://pt.wikipedia.org/wiki/Praia_Mole",
      },

      {
        id:3,
        imagens:[
        {url: "/assets/barra.jpg"},
        ],
        praia:"Barra da Lagoa",
        descricao_praia:"A Barra da Lagoa é um distrito de classe média alta de Florianópolis. Foi desmembrada do Distrito da Lagoa da Conceição em 21/12/1995.",
        saiba_mais: "https://pt.wikipedia.org/wiki/Barra_da_Lagoa",
        },

        {
          id:4,
          imagens:[
          {url: "/assets/galheta.jpg"},
          ],
          praia:"Galheta",
          descricao_praia:"A Praia da Galheta é uma praia de mar aberto localizada ao leste da Ilha de Florianópolis.A Galheta é uma praia de nudismo opcional.",
          saiba_mais: "https://pt.wikipedia.org/wiki/Praia_da_Galheta",
          },

          {
            id:5,
            imagens:[
            {url: "/assets/lagoinhaleste1.jpg"},
            ],
            praia:"Lagoinha do Leste",
            descricao_praia:"Situada na cidade de Florianópolis, seu difícil acesso possibilitou a preservação de um dos últimos redutos de Mata Atlântica de Florianópolis.",
            saiba_mais: "https://pt.wikipedia.org/wiki/Praia_da_Lagoinha_do_Leste",
            },
]
  public getPraias():Array<Praias>{
    return this.praias


  }

    
  }



