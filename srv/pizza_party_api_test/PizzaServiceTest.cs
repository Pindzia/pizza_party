using Microsoft.EntityFrameworkCore;
using Xunit;
using System.Linq;
using pizza_party_api.Database;
using pizza_party_api.Models;
using pizza_party_api.Repositories;
using pizza_party_api.Services;

namespace pizza_party_api_test;


public class PizzaServiceTest
{

    [Fact]
    public void CanCreateService()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanCreateService")
            .Options;

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            var pizzaService = new PizzaService(pizzaRepository);
            Assert.Equal(0, context.Pizzas.Count());
        }

    }

    [Fact]
    public async Task CanGetAllPizzasService()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanGetAllPizzasService")
            .Options;

        var pizza = new Pizza
        {
            Name = "TestPizza",
            Price = 10.00m
        };
        var pizza2 = new Pizza
        {
            Name = "TestPizza2",
            Price = 10.00m
        };
        var pizza3 = new Pizza
        {
            Name = "TestPizza",
            Price = 10.00m
        };

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            await pizzaRepository.AddAsync(pizza, CancellationToken.None);
            await pizzaRepository.AddAsync(pizza2, CancellationToken.None);
            await pizzaRepository.AddAsync(pizza3, CancellationToken.None);
        }

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            var pizzaService = new PizzaService(pizzaRepository);
            var pizzas = await pizzaService.GetAllPizzas(CancellationToken.None);
            Assert.Equal(3, pizzas.Count());
        }
    }

    [Fact]
    public async Task CanSpecificPizza()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanSpecificPizza")
            .Options;

        var pizza = new Pizza
        {
            Name = "TestPizza1",
            Price = 10.00m
        };
        var pizza2 = new Pizza
        {
            Name = "TestPizza2",
            Price = 10.00m
        };
        var pizza3 = new Pizza
        {
            Name = "TestPizza3",
            Price = 10.00m
        };
        Pizza? pizzaWithID = null;
        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            await pizzaRepository.AddAsync(pizza, CancellationToken.None);
            await pizzaRepository.AddAsync(pizza2, CancellationToken.None);
            pizzaWithID = await pizzaRepository.AddAsync(pizza3, CancellationToken.None);
        }

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            var pizzaService = new PizzaService(pizzaRepository);
            var specificPizza = await pizzaService.GetPizzaById(pizzaWithID.Id, CancellationToken.None);
            Assert.Equal(3, context.Pizzas.Count());
            Assert.Equal(pizzaWithID.Id, specificPizza.Id);
            Assert.Equal("TestPizza3", specificPizza.Name);
            Assert.Equal(10.00m, specificPizza.Price);

        }
    }
}
