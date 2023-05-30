using Microsoft.EntityFrameworkCore;
using pizza_party_api.Database;
using pizza_party_api.Models;

namespace pizza_party_api.Repositories;

public class CartRepository<T> : Repository<T> where T : Cart
{


    public CartRepository(PizzaShopDbContext dbContext) : base(dbContext)
    {
    }

    public async Task<Cart> GetCartByUserId(int userId, CancellationToken cancellationToken)
    {
        return await _dbSet
            .Include(c => c.CartItems).ThenInclude(ci => ci.Pizza)
            .FirstOrDefaultAsync(c => c.UserId == userId, cancellationToken);
    }

}
