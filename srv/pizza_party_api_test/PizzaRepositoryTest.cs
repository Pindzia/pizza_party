using Microsoft.EntityFrameworkCore;
using pizza_party_api.Database;
using pizza_party_api.Models;
using pizza_party_api.Repositories;

namespace pizza_party_api_test;

public class PizzaRepositoryTest
{
    [Fact]
    public void CanCreateRepository()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanCreateRepository")
            .Options;

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            Assert.Equal(0, context.Pizzas.Count());
        }

    }

    [Fact]
    public void CanCreateRepositoryNullCheck()
    {
        Assert.Throws<NullReferenceException>(() => new Repository<Pizza>(null));
    }


    [Fact]
    public async Task CanInsertPizzaIntoDatabase()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanInsertPizza")
            .Options;

        var pizza = new Pizza
        {
            Name = "TestPizza",
            Price = 10.00m
        };

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            await pizzaRepository.AddAsync(pizza, CancellationToken.None);
        }

        using (var context = new PizzaShopDbContext(options))
        {
            Assert.Equal(1, context.Pizzas.Count());
            Assert.Equal("TestPizza", context.Pizzas.Single().Name);
            Assert.Equal(10.00m, context.Pizzas.Single().Price);
        }
    }

    [Fact]
    public async Task CanUpdatePizzaInDatabase()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanUpdatePizza")
            .Options;

        var pizza = new Pizza
        {
            Name = "TestPizza",
            Price = 10.00m
        };

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            await pizzaRepository.AddAsync(pizza, CancellationToken.None);
        }


        var newPizza = new Pizza
        {
            Name = "UpdatedPizza",
            Price = 12.00m
        };

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            await pizzaRepository.UpdateAsync(pizza.Id, newPizza, CancellationToken.None);
            Assert.Equal(1, context.Pizzas.Count());
            Assert.Equal("UpdatedPizza", context.Pizzas.Single().Name);
            Assert.Equal(12.00m, context.Pizzas.Single().Price);
        }
    }

    // Similar tests for GetByIdAsync, DeleteAsync methods

    [Fact]
    public async Task CanGetAllPizzasFromDatabase()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanGetAllPizzasFromDatabase")
            .Options;

        var pizza1 = new Pizza
        {
            Name = "TestPizza1",
            Price = 10.00m
        };

        var pizza2 = new Pizza
        {
            Name = "TestPizza2",
            Price = 12.00m
        };

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            await pizzaRepository.AddAsync(pizza1, CancellationToken.None);
            await pizzaRepository.AddAsync(pizza2, CancellationToken.None);
        }

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            var pizzas = await pizzaRepository.GetAll().ToListAsync();
            Assert.Equal(2, pizzas.Count());
            Assert.Equal("TestPizza1", pizzas[0].Name);
            Assert.Equal(10.00m, pizzas[0].Price);
            Assert.Equal("TestPizza2", pizzas[1].Name);
            Assert.Equal(12.00m, pizzas[1].Price);
        }
    }

    [Fact]
    public async Task CanGetPizzaByIdFromDatabase()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanGetPizzaById")
            .Options;

        var pizza1 = new Pizza
        {
            Name = "TestPizza1",
            Price = 10.00m
        };

        var pizza2 = new Pizza
        {
            Name = "TestPizza2",
            Price = 12.00m
        };
        Pizza wantedPizza = null;
        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            wantedPizza = await pizzaRepository.AddAsync(pizza1, CancellationToken.None);
            await pizzaRepository.AddAsync(pizza2, CancellationToken.None);
        }

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            var pizza = await pizzaRepository.GetByIdAsync(wantedPizza.Id, CancellationToken.None);
            Assert.Equal("TestPizza1", pizza.Name);
            Assert.Equal(10.00m, pizza.Price);
        }
    }

    [Fact]
    public async Task CanDeletePizzaFromDatabase()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanDeletePizzaFromDatabase")
            .Options;

        var pizza1 = new Pizza
        {
            Name = "TestPizza1",
            Price = 10.00m
        };

        var pizza2 = new Pizza
        {
            Name = "TestPizza2",
            Price = 12.00m
        };
        Pizza wantedPizza = null;
        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            wantedPizza = await pizzaRepository.AddAsync(pizza1, CancellationToken.None);
            await pizzaRepository.AddAsync(pizza2, CancellationToken.None);
        }

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            await pizzaRepository.DeleteAsync(wantedPizza.Id, CancellationToken.None);
            Assert.Equal(1, context.Pizzas.Count());
            Assert.Equal("TestPizza2", context.Pizzas.Single().Name);
            Assert.Equal(12.00m, context.Pizzas.Single().Price);
        }
    }

    [Fact]
    public void CanGetPrimaryKeyNameForPizzaModel()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanGetPrimaryKeyName")
            .Options;

        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            var primaryKey = pizzaRepository.GetPrimaryKeyName<Pizza>();
            Assert.Equal("Id", primaryKey);
        }
    }

    [Fact]
    public void CanSetPrimaryKeyNameForPizzaModel()
    {
        var options = new DbContextOptionsBuilder<PizzaShopDbContext>()
            .UseInMemoryDatabase(databaseName: "CanSetPrimaryKeyName")
            .Options;
        using (var context = new PizzaShopDbContext(options))
        {
            var pizzaRepository = new Repository<Pizza>(context);
            var newPizza = new Pizza
            {
                Name = "TestPizza",
                Price = 10.00m
            };
            pizzaRepository.SetProperty<Pizza>(ref newPizza, pizzaRepository.GetPrimaryKeyName<Pizza>(), 1);
            Assert.Equal(1, newPizza.Id);
        }

    }
}