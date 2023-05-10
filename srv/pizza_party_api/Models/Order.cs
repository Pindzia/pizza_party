namespace pizza_party_api.Models;

public class Order
{
    public int Id { get; set; }
    public int CartId { get; set; }
    public int UserId { get; set; }
    public int AdressId { get; set; }
    public DateTime OrderDate { get; set; }
    public bool IsCompleted { get; set; }
    public virtual User User { get; set; }
    public virtual Cart Cart { get; set; }
    public virtual Adress Adress { get; set; }
    // Other order properties
}
