namespace pizza_party_api.Models;

public class CartItem
{
    public int CartId { get; set; }
    public Cart Cart { get; set; }

    public int PizzaId { get; set; }
    public Pizza Pizza { get; set; }

    public int Quantity { get; set; }
}