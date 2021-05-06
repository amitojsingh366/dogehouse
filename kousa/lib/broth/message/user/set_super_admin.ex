defmodule Broth.Message.User.SetSuperAdmin do
  use Broth.Message.Call

  @primary_key false
  embedded_schema do
    field(:userId, :binary)
    field(:value, :boolean)
  end

  def changeset(initializer \\ %__MODULE__{}, data) do
    initializer
    |> cast(data, [:userId, :value])
    |> validate_required([:userId, :value])
  end

  defmodule Reply do
    use Broth.Message.Push

    @derive {Jason.Encoder, only: []}

    @primary_key false
    embedded_schema do
    end
  end

  def execute(changeset, state) do
    with {:ok, request} <- apply_action(changeset, :validate),
         :ok <- Kousa.User.set_super_admin(request.userId, request.value, admin_id: state.user.id) do
      {:reply, %Reply{}, state}
    end
  end
end
