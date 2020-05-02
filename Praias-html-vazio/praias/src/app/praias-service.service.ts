import { Injectable } from '@angular/core';
import { Praias } from './shared/praias.model';


@Injectable({
  providedIn: 'root'
})
export class PraiasServiceService {
  public praias:Array<Praias>=[
    
      {
      id:1,
      imagens:[
      {url: "/assets/jurere.jpg"},
      ],
      praia:"Jurerê",
      descricao_praia:"Jurerê, popularmente conhecido como Jurerê Internacional é um bairro nobre situado na região norte de Florianópolis.",
      saiba_mais: "https://pt.wikipedia.org/wiki/Jurer%C3%AA",
      },
      
      
      {
      id:2,
      imagens:[
      {url:"/assets/canas.jpg"}
      ],
      praia:"canasvieiras",
      descricao_praia:"Canasvieiras é um bairro e uma praia localizados no norte da Ilha de Santa Catarina, no estado brasileiro de Santa Catarina.",
      saiba_mais:"https://pt.wikipedia.org/wiki/Canasvieiras"
    },
      
      
      {
      id:3,
      imagens:[
      {url: "/assets/brava.jpg"},
      ],
      praia:"Praia Brava",
      descricao_praia:"A Praia Brava é um bairro nobre situado ao norte da ilha de Santa Catarina, no município de Florianópolis.",
      saiba_mais:"https://pt.wikipedia.org/wiki/Praia_Brava_(Florian%C3%B3polis)"     
      },

      {
        id:4,
        imagens:[
        {url: "/assets/zinga.jpg"},
        ],
        praia:"Ingleses",
        descricao_praia:"A praia dos Ingleses está situada no bairro de Ingleses, norte da ilha de Santa Catarina, no municipio de Florianópolis.",
        saiba_mais:"https://pt.wikipedia.org/wiki/Praia_dos_Ingleses"     
        },  

        {
          id:5,
          imagens:[
          {url: "/assets/lagoinha.jpg"},
          ],
          praia:"Lagoinha",
          descricao_praia:"Praia da Lagoinha do Norte: Vila de pesca com modernidade, natureza e tranquiliadade no norte da ilha.",
          saiba_mais:"https://dicasdonossobrasil.com.br/florianopolis/praia-da-lagoinha-de-ponta-das-canas-em-florianopolis/"     
          },

          {
            id:6,
            imagens:[
            {url: "/assets/sambaqui.jpg"},
            ],
            praia:"Sambaqui",
            descricao_praia:"Sambaqui é um bairro e uma praia de Florianópolis, no distrito de Santo Antônio de Lisboa.",
            saiba_mais:"https://pt.wikipedia.org/wiki/Sambaqui_(Florian%C3%B3polis)"     
            },

            {
              id:7,
              imagens:[
              {url: "/assets/santoantonio.jpg"},
              ],
              praia:"Santo Antonio",
              descricao_praia:"Santo Antônio de Lisboa é um distrito, bairro e praia da cidade de Florianópolis.",
              saiba_mais:"https://pt.wikipedia.org/wiki/Santo_Ant%C3%B3nio_de_Lisboa"     
              },

              {
                id:8,
                imagens:[
                {url: "/assets/cachoeiranorte.jpg"},
                ],
                praia:"Cachoeira",
                descricao_praia:"Cachoeira do Bom Jesus é um distrito da cidade brasileira de Florianópolis, capital do estado de Santa Catarina.",
                saiba_mais:"https://pt.wikipedia.org/wiki/Cachoeira_do_Bom_Jesus"     
                },

                {
                  id:9,
                  imagens:[
                  {url: "/assets/santinho.jpg"},
                  ],
                  praia:"Santinho",
                  descricao_praia:"A Praia do Santinho se localiza no norte da Ilha de Santa Catarina , passando a praia dos Ingleses em sentido leste.",
                  saiba_mais:"http://www.vivafloripa.com.br/santinho/"     
                  },

                  {
                    id:10,
                    imagens:[
                    {url: "/assets/daniela.jpg"},
                    ],
                    praia:"Daniela",
                    descricao_praia:"O Balneário Daniela é um balneário do município de Florianópolis, capital do estado de Santa Catarina. Praia logo após Jurerê Internacional.",
                    saiba_mais:"https://pt.wikipedia.org/wiki/Daniela_(Florian%C3%B3polis)"     
                    },

                    
                      
            
          
        
      
    
  
      
      
      ]
      
      public getPraias():Array<Praias>{
        
      return this.praias
      
      }

    
    }
  


  
  
  
  
  
  
  
  
  
  

