const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro'
    ]
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat'
    ]
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen'
    ]
  }
]

// escreva seu código abaixo 👇🏻

for (var i = 0; i < filmes.length; i++) {
  console.log(
    `${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por, ${filmes[i].diretor}`
  )
  for (var j = 0; j < filmes[i].elenco.length; j++) {
    console.log(`Tem no elenco: ${filmes[i].elenco}`)
  }
}

for (i in filmes) {
  console.log(
    `${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por, ${filmes[i].diretor}`
  )
  for (z of filmes) {
    console.log(
      `Tem no elenco: ${filmes[i].elenco[0]}, ${filmes[i].elenco[1]}, ${filmes[i].elenco[2]}, ${filmes[i].elenco[3]}`
    )
  }
}
