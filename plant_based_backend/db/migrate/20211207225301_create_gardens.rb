class CreateGardens < ActiveRecord::Migration[6.1]
  def change
    create_table :gardens do |t|

      t.timestamps
    end
  end
end
