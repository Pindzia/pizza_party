using Microsoft.EntityFrameworkCore;
using pizza_party_api.Database;
using pizza_party_api.Models;

namespace pizza_party_api.Repositories
{
    public class OrderRepository<T> : Repository<T> where T : class
    {


        public OrderRepository(PizzaShopDbContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Order>> GetOrdersByUserId(int userId, CancellationToken cancellationToken)
        {
            return await _dbContext.Orders
                .Include(o => o.Cart).ThenInclude(c => c.CartItems).ThenInclude(ci => ci.Pizza)
                .Where(o => o.UserId == userId)
                .ToListAsync(cancellationToken);
        }


    }

}