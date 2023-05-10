using Microsoft.EntityFrameworkCore;
using pizza_party_api.Database;
using pizza_party_api.Models;

namespace pizza_party_api.Repositories;

public class CartRepository<T> : Repository<T> where T : class
{

    private readonly PizzaShopDbContext _dbContext;

    public CartRepository(PizzaShopDbContext dbContext) : base(dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<Cart> GetCartByUserId(int userId, CancellationToken cancellationToken)
    {
        return await _dbContext.Carts
            .Include(c => c.Pizzas)
            .FirstOrDefaultAsync(c => c.UserId == userId, cancellationToken);
    }

}
