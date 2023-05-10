using pizza_party_api.Models;

namespace pizza_party_api.Services;

public interface ICartService
{
    Task<Cart> CreateCart(int userId, CancellationToken cancellationToken);
    Task<Cart> GetCartByUserId(int userId, CancellationToken cancellationToken);
    Task AddPizzaToCart(int userId, int pizzaId, CancellationToken cancellationToken);
    Task DeletePizzaFromCart(int userId, int pizzaId, CancellationToken cancellationToken);
    Task ClearCart(int userId, CancellationToken cancellationToken);
    Task DeleteCart(int id, CancellationToken cancellationToken);
}
