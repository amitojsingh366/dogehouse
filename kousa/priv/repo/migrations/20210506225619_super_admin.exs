defmodule Beef.Repo.Migrations.SuperAdmin do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add(:superAdmin, :boolean, default: false)
    end
  end
end
