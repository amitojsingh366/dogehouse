defmodule Broth.Message.User.GetSuperAdmin do
  use Broth.Message.Call

  @primary_key false
  embedded_schema do
    # TODO: add a userId key in here.
    field(:userId, :string)
  end

  def changeset(initializer \\ %__MODULE__{}, data) do
    initializer
    |> cast(data, [:userId])
    |> validate_required([:userId])
  end

  defmodule Reply do
    use Broth.Message.Push

    @derive {Jason.Encoder, only: [:isSuperAdmin]}
    @primary_key false
    embedded_schema do
      field(:isSuperAdmin, :boolean)
    end
  end

  def execute(changeset, state) do
    # currently limit is unused.
    with {:ok, request} <- apply_action(changeset, :validate) do
      isSuperAdmin = Beef.Users.get_super_admin(request.userId)

      {:reply, %Reply{isSuperAdmin: isSuperAdmin}, state}
    end
  end
end
