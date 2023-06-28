
using Microsoft.EntityFrameworkCore;
using pizza_party_api.Models;

namespace pizza_party_api.Database;
public class PizzaShopDbContext : DbContext
{
    public PizzaShopDbContext(DbContextOptions<PizzaShopDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Pizza> Pizzas { get; set; }
    public DbSet<Cart> Carts { get; set; }
    public DbSet<CartItem> CartItems { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<Adress> Adresses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(u => u.Id);
            entity.Property(u => u.Username).IsRequired();
            entity.HasMany(u => u.Carts).WithOne().HasForeignKey(c => c.UserId).OnDelete(DeleteBehavior.Restrict);
            entity.HasMany(u => u.Orders).WithOne().HasForeignKey(o => o.UserId).OnDelete(DeleteBehavior.Restrict);
            entity.HasMany(u => u.Adresses).WithOne().HasForeignKey(a => a.UserId).OnDelete(DeleteBehavior.Restrict);
            // Configure other properties and relationships
        });

        modelBuilder.Entity<Pizza>(entity =>
        {
            entity.HasKey(p => p.Id);
            entity.Property(p => p.Name).IsRequired();
            entity.Property(p => p.Price).HasColumnType("decimal(18,2)");
            entity.Property(p => p.listOfIngredients).HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries)
                );
            // Configure other properties and relationships
        });
        modelBuilder.Entity<Pizza>().HasData(
        new Pizza()
        {
            Name = "4 in 1",
            Description = "Four tasty pizzas in one. \"Four cheese\" ,\"Minced\" ,\"Schroomy\" ,\"Basilicana\" ",
            listOfIngredients = new[]
            {
                "Mozarella",
                "Gouda",
                "Grana Padano",
                "Gorgonzola",
                "Ricotta",
                "Mushrooms",
                "Basil",
                "Salami",
                "Olives",
                "Onions",
                "Minced meat"
            },
            ImageUrl = "/assets/pizzas/4in1.png",
            Price = 50.99m,
            TypeOfPizza = TypeOfPizza.Meat | TypeOfPizza.ThinCrust | TypeOfPizza.Vegetarian | TypeOfPizza.Cheese,
        },
         new Pizza()
         {
             Name = "Argurella",
             Description = "Tasty fresh pizza ",
             listOfIngredients = new[]
            {
                "Argula",
                "Salami",
                "Mozarella",
            },
             ImageUrl = "/assets/pizzas/argula_correct.png",
             Price = 11.99m,
             TypeOfPizza = TypeOfPizza.Meat | TypeOfPizza.ThinCrust
         },
         new Pizza()
         {
             Name = "Argurella",
             Description = "Tasty fresh pizza with classic bit of argula",
             listOfIngredients = new[]
            {
                "Argula",
                "Salami",
                "Mozarella",
            },
             ImageUrl = "/assets/pizzas/argula_correct.png",
             Price = 11.99m,
             TypeOfPizza = TypeOfPizza.Meat | TypeOfPizza.ThinCrust
         },
         new Pizza()
         {
             Name = "Basilicana",
             Description = "Classic ",
             listOfIngredients = new[]
            {
                "Basil",
                "Salami",
                "Gorgonzola",
            },
             ImageUrl = "/assets/pizzas/argula_correct.png",
             Price = 11.99m,
             TypeOfPizza = TypeOfPizza.Meat | TypeOfPizza.ThinCrust
         });

        modelBuilder.Entity<Cart>(entity =>
        {
            entity.HasKey(c => c.Id);
            entity.HasOne(c => c.User)
                .WithMany()
                .HasForeignKey(c => c.UserId)
                .OnDelete(DeleteBehavior.Restrict);
            // Configure other properties and relationships
        });

        modelBuilder.Entity<CartItem>()
                .HasKey(ci => new { ci.CartId, ci.PizzaId });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(o => o.Id);
            entity.HasOne(o => o.Cart)
                  .WithOne()
                  .HasForeignKey<Order>(o => o.CartId)
                  .OnDelete(DeleteBehavior.Restrict);
            entity.HasOne(o => o.User).WithOne().HasForeignKey<Order>(o => o.UserId).OnDelete(DeleteBehavior.Restrict);
            entity.HasOne(o => o.Adress).WithOne().HasForeignKey<Order>(o => o.AdressId).OnDelete(DeleteBehavior.Restrict);
            // Configure other properties and relationships
        });

        modelBuilder.Entity<Adress>(entity =>
        {
            entity.HasKey(a => a.Id);
            entity.Property(a => a.Street).IsRequired();
            entity.Property(a => a.City).IsRequired();
            entity.Property(a => a.ZipCode).IsRequired();
            entity.HasOne(a => a.User).WithMany().HasForeignKey(a => a.UserId).OnDelete(DeleteBehavior.Restrict);
            // Configure other properties and relationships
        });


    }
}
