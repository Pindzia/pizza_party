
using Microsoft.EntityFrameworkCore;
using pizza_party_api.Database;
using pizza_party_api.Models;

namespace pizza_party_api.Repositories;

public class CartItemRepository<T> : Repository<T> where T : CartItem
{


    public CartItemRepository(PizzaShopDbContext dbContext) : base(dbContext)
    {
    }

    public async Task<T> GetCartItemCartIdAndPizzaId(int cartId, int pizzaId, CancellationToken cancellationToken)
    {
        return await _dbSet
            .Include(c => c.Cart).Include(ci => ci.Pizza)
            .FirstOrDefaultAsync(c => c.CartId == cartId && c.PizzaId == pizzaId, cancellationToken);
    }

    public async Task<IEnumerable<T>> GetCartItemsByCartId(int cartId, CancellationToken cancellationToken)
    {
        return await _dbSet
            .Include(c => c.Cart).Include(ci => ci.Pizza)
            .Where(c => c.CartId == cartId)
            .ToListAsync(cancellationToken);
    }

}