namespace pizza_party_api.Models;

public class User
{
    public int Id { get; set; }
    public string Username { get; set; }

    // Other user properties
    public virtual ICollection<Cart> Carts { get; set; }
    public virtual ICollection<Order> Orders { get; set; }
    public virtual ICollection<Adress> Adresses { get; set; }
}
