using Microsoft.EntityFrameworkCore;
using pizza_party_api.Database;
using pizza_party_api.Models;

namespace pizza_party_api.Repositories;

public class AdressRepository<T> : Repository<T> where T : class
{
    public AdressRepository(PizzaShopDbContext context) : base(context)
    {
    }

    public async Task<IEnumerable<Adress>> GetAdressesByUserId(int userId, CancellationToken cancellationToken)
    {
        return await _dbContext.Adresses.Where(a => a.UserId == userId)
            .ToListAsync();
    }



}
