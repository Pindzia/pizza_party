namespace pizza_party_api.Models;

public class Cart
{
    public int Id { get; set; }
    public int? UserId { get; set; }
    public virtual User User { get; set; }
    public virtual ICollection<CartItem> CartItems { get; set; }

    // If you want to calculate the total quantity directly in the Cart entity:
    public int TotalQuantity => CartItems?.Sum(item => item.Quantity) ?? 0;
}
