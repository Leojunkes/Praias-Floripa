import { Injectable } from '@angular/core';
import { Praias } from './shared/praias.model';

@Injectable({
  providedIn: 'root'
})
export class SulilhaService {
public praias:Array<Praias>=[

  {
    id:1,
    imagens:[
    {url: "/assets/campeche.jpg"},
    ],
    praia:"Campeche",
    descricao_praia:"A praia do Campeche é uma praia oceânica situa-se no bairro de mesmo nome, fica entre a praia da Joaquina e a praia do Morro das Pedras.",
    saiba_mais: "https://pt.wikipedia.org/wiki/Praia_do_Campeche",
    },

    {
      id:2,
      imagens:[
      {url: "/assets/pantanosul.jpg"},
      ],
      praia:"Pantano do Sul",
      descricao_praia:"A Praia da Armação do Pântano do Sul ou simplesmente Armação é uma praia brasileira situada na cidade de Florianópolis.",
      saiba_mais: "https://pt.wikipedia.org/wiki/Praia_da_Arma%C3%A7%C3%A3o_do_P%C3%A2ntano_do_Sul",
      },

      {
        id:3,
        imagens:[
        {url: "/assets/matadeiro.jpg"},
        ],
        praia:"Matadeiro",
        descricao_praia:"Matadeiro é uma praia localizada no sul da Ilha de Santa Catarina. O mar gelado com ondas, separada da praia da Armação por um rio de água salobra.",
        saiba_mais: "https://pt.wikipedia.org/wiki/Praia_do_Matadeiro",
        },

        {
          id:4,
          imagens:[
          {url: "/assets/naufragados.jpg"},
          ],
          praia:"Naufragados",
          descricao_praia:"A Praia de Naufragados é a praia mais ao sul de Florianópolis, ficando a 43 km do centro da cidade. Lugar onde há cachoeiras e ruínas de um engenho de farinha.",
          saiba_mais: "https://pt.wikipedia.org/wiki/Praia_de_Naufragados",
          },

          {
            id:6,
            imagens:[
              {url:"/assets/açores.jpg"},
            ],
            praia:"Açores",
            descricao_praia:"Praia dos Açores é uma praia situada na cidade de Florianópolis, no estado de Santa Catarina.Localiza-se a, aproximadamente, no meio das praias da solidão e do Pântano do Sul.",
            saiba_mais:"https://pt.wikipedia.org/wiki/Praia_dos_A%C3%A7ores",
          },

          {
            id:7,
            imagens:[
              {url:"/assets/saquinho.jpg"},
            ],
            praia:"Saquinho",
            descricao_praia:"A Praia do Saquinho é uma praia pequena, de areia branca, águas claras e mar agitado. Está localizada no extremo sul da face oceânica da ilha de Florianópolis.",
            saiba_mais:"https://pt.wikipedia.org/wiki/Praia_do_Saquinho",
          },

          {
            id:8,
            imagens:[
              {url:"/assets/solidão.jpg"},
            ],
            praia:"Solidão",
            descricao_praia:"A Praia da Solidão é uma praia pequena, de areia branca, águas claras e mar agitado. Possui 850 metros de extensão e seu acesso se dá por trilha a partir da Praia do Pântano do Sul.",
            saiba_mais:"https://pt.wikipedia.org/wiki/Praia_da_Solid%C3%A3o",
          },

          {
            id:9,
            imagens:[
              {url:"/assets/peri.jpg"},
            ],
            praia:"Lagoa do Peri",
            descricao_praia:"A lagoa do Peri é a segunda maior da ilha, sendo uma lagoa de água doce, tanto que suas águas são utilizadas para o abastecimento de algumas regiões de Florianópolis.",
            saiba_mais:"https://pt.wikipedia.org/wiki/Lagoa_do_Peri",
          },

  
      
  ]
 
  public getPraias():Array<Praias>{
        
    return this.praias

  }
}
