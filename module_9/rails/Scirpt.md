1. run `rails new todo` to start a new app. Make sure you have `yarn` install
2. run `npm install` and `bundle install`
3. run `rails server` and show there is a rails server created
4. Talk about ERD structure and db folder and model
5. To create a Model, run `rails g model Category[Item]`, which generate models and migration
6. Talk about what is Model and what is ORM

```ruby
class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|

      t.string :name
      t.timestamps
    end
  end
end

class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :done
      t.references :category, foreign_key: true, index: true
      t.timestamps
    end
  end
end
```

7. after add column, run `rails db:migrate` and then inspect the database
8. Add relationship in Model

    ```ruby
    class Category < ApplicationRecord
        has_many :items
    end

    class Item < ApplicationRecord
        belongs_to :category
    end

    ```

9. Look at schema realtime update and then add some seed to table

```ruby
["Shopping", "Housework"].each do |cat|
    Category.create(name: cat)
end

["Buy Lobster", "Buy iPhone 15"].each do |buy|
    # Object Relation Mapper map from Category to Item, carring foreign key information
    Category.find_by(name: "Shopping").items.create(name: buy, done: false)
end
```

10. Create a new controller `rails g controller category` and Add controller resources to routes in `config/routes.rb`. confirmed by running `rails routes | grep category`

    ```ruby
        resources :category
    ```

11. Walk through Error code and make controller work, create `index.html.erb` in Category folder

  ```ruby
  <h1>Category</h1>

  <ul>
      <% @categories.each do |category| %>
          <li><%= link_to category.name, "/category/#{category.id}/item" %></li>
      <% end %>
  </ul>
  ```

12. add a second controller on `rails g controller item` and add nested routes using block
  ```ruby
    Rails.application.routes.draw do
      # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
      resources :category do
        resources :item
      end
    end
  ```

13. Item controller 
  ```ruby
  class ItemController < ApplicationController
      def index
          @items = Category.find(params[:category_id]).items
      end
  end
  ```