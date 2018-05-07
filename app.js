const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const path = require('path');

let prices = ['R$ 20 - R$ 90','R$ 2 - R$ 50','R$ 40 - R$ 100','R$ 8 - R$ 120','R$ 200 - R$ 400'];
let resTypes = ['Coxinha','Caranguejo','Yaksoba','Temaki','Cantina','Sushi','Pastelaria','Restaurante','Paraiso','Fogueira','Sabor','O Mundo','A Bahia','Boi','Churrascaria','Fogueira','Sorriso','Delicia','Macarronada','Brasa','Casa','Cozinha','Pizzaria','Pizza','Moqueca','Peixe','Ceu','Flor','Tapioca','Sanduiche','Feijoada']
let resName = ['do Marcelo','da Bahia','Top','Internacional','Massa','do Futuro','do Otacilio','Azul','de Tapioca','do Passado','Stop','Go','da Delicia','de Yemanja','ao Vivo','da Mistura','10','Tropical','com Ketchup','com Farofa','de Milho','na Brasa','no Espeto','Quente','no Prato','com Paladar','na Quentinha','com Maionese','com Presunto','dos Infernos','de Sal','Fitness','de Siri', 'com Quiabo', 'de Banana da Terra', 'de Aipim', 'com Churrasco', 'no Oleo Quente', 'com Sopa', 'com Salada', 'com Carne', 'do Interior','da Maria','do Rodizio Amaldicoado', 'Tradicional','na Chapa', 'Show', 'da Ilha', 'de Salvador', 'com Azeite', 'no Dende', 'de Madeira','Light','da Cidade','com Sorriso', 'com Refresco','de Soja Organica', 'Gourmet', 'do Chef', 'Especial', 'Master', 'do Ceu', 'dos Brothers', 'com Sabor']
let locations = ["Acupe","Aeroporto","Águas Claras","Alto da Terezinha","Alto das Pombas","Alto do Cabrito","Alto do Coqueirinho","Amaralina","Areia Branca","Arenoso","Arraial do Retiro","Bairro da Paz","Baixa de Quintas","Barbalho","Barra","Barreiras","Barris","Beiru/Tancredo Neves","Boa Viagem","Boa Vista de Brotas","Boa Vista de São Caetano","Boca da Mata","Boca do Rio","Bom Juá","Bonfim","Brotas","Cabula","Cabula VI","Caixa D’Água","Cajazeiras II","Cajazeiras IV","Cajazeiras V","Cajazeiras VI","Cajazeiras VII","Cajazeiras VIII","Cajazeiras X","Cajazeiras XI","Calabar","Calabetão","Calçada","Caminho das Árvores","Caminho de Areia","Campinas de Pirajá","Canabrava","Candeal","Canela","Capelinha","Cassange","Castelo Branco","Centro","Centro Administrativo da Bahia","Centro Histórico","Chapada do Rio Vermelho","Cidade Nova","Comércio","Cosme de Farias","Costa Azul","Coutos","Curuzu","Dom Avelar","Doron","Engenho Velho da Federação","Engenho Velho de Brotas","Engomadeira","Fazenda Coutos","Fazenda Grande do Retiro","Fazenda Grande I","Fazenda Grande II","Fazenda Grande III","Fazenda Grande IV","Federação","Garcia","Graça","Granjas Rurais Presidente Vargas","IAPI","Ilha de Bom Jesus dos Passos","Ilha de Maré","Ilha dos Frades","Imbuí","Itacaranha","Itaigara","Itapuã","Itinga","Jaguaripe I","Jardim Armação","Jardim Cajazeiras","Jardim das Margaridas","Jardim Nova Esperança","Jardim Santo Inácio","Lapinha","Liberdade","Lobato","Luiz Anselmo","Macaúbas","Mangueira","Marechal Rondon","Mares","Massaranduba","Mata Escura","Matatu","Monte Serrat","Moradas da Lagoa","Mussurunga","Narandiba","Nazaré","Nordeste de Amaralina","Nova Brasília","Nova Constituinte","Nova Esperança","Nova Sussuarana","Novo Horizonte","Novo Marotinho","Ondina","Palestina","Paripe","Patamares","Pau da Lima","Pau Miúdo","Periperi","Pernambués","Pero Vaz","Piatã","Pirajá","Pituaçu","Pituba","Plataforma","Porto Seco Pirajá","Praia Grande","Resgate","Retiro","Ribeira","Rio Sena","Rio Vermelho","Roma","Saboeiro","Santa Cruz","Santa Luzia","Santa Mônica","Santo Agostinho","Santo Antônio","São Caetano","São Cristóvão","São Gonçalo","São João do Cabrito","São Marcos","São Rafael","São Tomé","Saramandaia","Saúde","Sete de Abril","Stella Maris","STIEP","Sussuarana","Tororó","Trobogy","Uruguai","Vale das Pedrinhas","Vale dos Lagos","Valéria","Vila Canária","Vila Laura","Vila Ruy Barbosa/Jardim Cruzeiro","Vitória"]
let parking = ["Sim", "Nao", "Talvez"];
let time = ["12:00 - 22:00", "12:00 - 12:01","02:00 - 18:00","16:00 - 23:00","00:00 - 00:00"]

function randomName(){
  return resTypes[Math.floor(Math.random() * resTypes.length)] + ' ' + resName[Math.floor(Math.random() * resName.length)];
}

let data = [];

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/data', (req, res) => {
  data = [];
  for (var i = 0; i < 200; i++) {
    data.push(
      {
        "id": i,
        "nome":randomName(),
        "preco":prices[Math.floor(Math.random() * prices.length)],
        "bairro":locations[Math.floor(Math.random() * locations.length)],
        "horario":time[Math.floor(Math.random() * time.length)],
        "estacionamento":parking[Math.floor(Math.random() * parking.length)]
      }
    )
  }

  res.send(data);
});

app.listen(port);
