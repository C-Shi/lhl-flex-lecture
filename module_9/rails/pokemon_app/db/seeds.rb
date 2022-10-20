# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[
  ['Grass', '#9bcc50'], ['Poison', '#b97fc9'], ['Fire', '#fd7d24'], 
  ['Flying', '#3dc7ef'], ['Water', '#4592c4'], ['Bug', '#729f3f'], 
  ['Normal', '#a4acaf'], ['Electric', '##eed535']
].each do |type|
  Type.create(name: type[0], color: type[1])
end

[
  { name: 'Bulbasaur', weight: 15.2, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
  { name: 'Ivysaur', weight: 28.7, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png' },
  { name: 'Venusaur', weight: 220.5, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png' },
  { name: 'Charmander', weight: 18.7, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
  { name: 'Charmeleon', weight: 41.9, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png' },
  { name: 'Charizard', weight: 199.5, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png' },
  { name: 'Squirtle', weight: 19.8, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
  { name: 'Wartortle', weight: 49.6, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png' },
  { name: 'Blastoise', weight: 188.5, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png' },
  { name: 'Caterpie', weight: 6.4, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png'},
  { name: 'Metapod', weight: 21.8, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png'},
  { name: 'Butterfree', weight: 70.5, avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'}
].each do |pokemon|
  Pokemon.create(name: pokemon[:name], weight: pokemon[:weight], avatar: pokemon[:avatar])
end

[
  [1, 1], [1, 2], [2, 1], [2, 2], [3, 1], [3, 2],
  [4, 3], [5, 3], [6, 3], [6, 4],
  [7, 5], [8, 5], [9, 5],
  [10, 6], [11, 6], [12, 6], [12, 7]
].each do |pokedex|
  PokemonType.create(pokemon_id: pokedex[0], type_id: pokedex[1])
end