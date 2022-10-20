class CreatePokemonTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :pokemon_types do |t|
      t.integer :pokemon_id
      t.integer :type_id
    end
    add_foreign_key :pokemon_types, :pokemons
    add_foreign_key :pokemon_types, :types
  end
end
