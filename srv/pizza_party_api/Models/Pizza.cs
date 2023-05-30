namespace pizza_party_api.Models;

public class Pizza
{
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public virtual ICollection<CartItem> CartItems { get; set; }
    public string ImageUrl { get; set; }
    public string Description { get; set; }
    public string[] listOfIngredients { get; set; }
    public TypeOfPizza TypeOfPizza { get; set; }
}


