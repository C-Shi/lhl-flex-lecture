### MVC Framework

### Resource
* use `rails g scaffold <Resource_Name>` to generate a complete set of resource
* Resources 
  - Migration: script that build/revoke the database table structure
  - Model: A file that contains data logic (ActiveRecord)
  - Views: GUI  for frontend display (template for CRUB)
  - Controller: Routing file that handle request/response


### Migration and Seeding
* Migration is a scripting file that build and reverse the database structure
* Rails keep track of migrations committed to DB and provide rollback
* use `change` method or use `up` and `down` if Rails don't know how to reverse

  ```rb
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :health
      t.string :avatar
      t.timestamps
    end
  end
  ```
* run in batch `bin/rails db:migrate` and `bin/rails db:rollback` | `bin/rails db:reset`
* Foreign key is not necessary when using relations, but recommended
* Seeding is a process of shipping default/initial data
* run `rails db:seed` to execute seeding. 
* Recommened to create data using Factory or using Model

### Model
* Object Relationsal Mapping: The system to build objects carray **persistent data, relations and behaviors**
* Data: information in each row convered into accessors in object

  ```rb
    Pokemon.first # object of first pokemon
    Pokemon.where({name: 'Venusaur'}).take.weight # get weight of Venusaur
  ```
* Relation: connect model to model for quick accessing 

  ```rb
    class Pokemon < ApplicationRecord
      # Relation
      has_many :pokemon_types
      has_many :types, through: :pokemon_types
    end

    class PokemonType < ApplicationRecord
      belongs_to :pokemon
      belongs_to :type
    end

    class Type < ApplicationRecord
      has_many :pokemon_types
      has_many :pokemons, through: :pokemon_types
    end

    Pokemon.where(name: 'Bulbasaur').take.types #Check what types is Bulbasaur
    Type.where(name: 'Fire').take.pokemons #Check what pokemons belong to Fire category
  ```
* Behavior: save custom operation

### Q & A
* ActiveRecord Relation vs Object