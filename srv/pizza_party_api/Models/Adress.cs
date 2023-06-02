namespace pizza_party_api.Models;

public class Adress
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Street { get; set; }
    public string City { get; set; }
    public string ZipCode { get; set; }
    public string Country { get; set; }
    public string PhoneNumber { get; set; }
    public virtual User User { get; set; }
    // Other adress properties
}
