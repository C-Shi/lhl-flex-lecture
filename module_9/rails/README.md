## Rails Review
- [x] Rails and MVC architecture
- [x] Resource
- [x] Migration and Seeding
- [x] Model
- [x] Controller
- [x] View
- [x] Form and Validation

### MVC Framework
* Model-View-Controller
* (Probably) most popular architectural pattern to build scalable, extensible web projects

    |Language|Framework|
    |-|-|
    |Java|Spring|
    |Ruby|Rails|
    |PHP|Laravel|
    |Python|Django|
    |C#|.NET|


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
* Data and Data manipulation part of MVC
* Object Relational Mapping: The system to build objects carry **persistent data, relations and behaviors**
* Data: information in each row convered into accessors in object
* [Active Record](https://guides.rubyonrails.org/v5.1/active_record_basics.html)

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
* Behavior: customized action to be used frequently

  ```rb
  class Pokemon < ApplicationRecord
    # Relation
    has_many :pokemon_types
    has_many :types, through: :pokemon_types

    # Behavior
    def intro
      my_types = types.map { |t| t.name }
      my_types = my_types.join(" and ")
      "My name is #{name}. I am #{weight}lb. I belongs to #{my_types}"
    end
  end
  ```

### Controller
* Controller file handle incoming and outgoing traffic, and determine business logic
* Resigster the resouces on `config/routes.rb`, (with optional modifier)

  ```rb
    resources :pokemons, only: [:index, :show] do
      get :gender, on: :member  # /pokemons/:id/gender
      get :types, on: :collection # /pokemons/types
    end
  ```

* Controller has methods corresponding to each route

  |http method|routes|action|
  |-|-|-|
  |GET|`/pokemons`|index|
  |POST|`/pokemons`|create|
  |GET|`/pokemons/new`|new|
  |GET|`/pokemons/:id/edit`|edit|
  |GET|`/pokemons/:id`|show|
  |PUT/PATCH|`/pokemons/:id`|update|
  |DELETE|`/pokemons/:id`|destroy|

* By default, controller will render `.erb` file with same name. Eg: `index` method will return `index.erb` template
* Controller often grab **Model** to interact with database
* By default, Rails is able to handle both `html` and `json` reponse

### View
* A software class that contains template and data, and produce a response for browser
* Rails use **embedded ruby** as template engine. It is similar to EJS
* Render a custom template from controller

  ```rb
  def update
    # send 404 response with error_404.index.erb file on update action
    render :error_404, status: :not_found
  end
  ```

* You can use [Action View Helper](https://guides.rubyonrails.org/action_view_helpers.html) to speed up generating template

  ```
    <%= link_to 'New Pokemon', new_pokemon_path %>
    
    <a href="/pokemons/new">New Pokemon</a>
  ```

### Form & Validation
* Use [Action View Form Helpers](https://guides.rubyonrails.org/form_helpers.html) to build form

  ```rb
    <%= form_with(model: pokemon) do |form| %>
      <%= form.label :name, "Pokemon Name:" %>
      <%= form.text_field :name %>
      <img src=""></img>
      <%= form.submit %>
    <% end %>
  ```

* Validations are defined at **Model** level
* Validation is handled by [Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html)
* Validations run automatically, but can also be called

  ```rb
  class Pokemon < ApplicationRecord
    # Vlidate a Pokemon needs to have name, weight and avatar before getting into database
    validates :name, :weight, :avatar, presence: true
  end

  Pokemon.create() # Validation run

  p = Pokemon.new
  p.save # Validation run

  p2 = Pokemon.first
  p2.save # Validation run
  ```
* Validations do not change database setting