using pizza_party_api.Models;
using pizza_party_api.Repositories;

namespace pizza_party_api.Services;

public class CartService : ICartService
{
    private readonly CartRepository<Cart> _cartRepository;
    private readonly IRepository<Pizza> _pizzaRepository;

    public CartService(CartRepository<Cart> cartRepository, IRepository<Pizza> pizzaRepository)
    {
        _cartRepository = cartRepository;
        _pizzaRepository = pizzaRepository;
    }

    public Task<Cart> CreateCart(int userId, CancellationToken cancellationToken)
    {
        var cart = new Cart
        {
            UserId = userId
        };
        return _cartRepository.AddAsync(cart, cancellationToken);
    }

    public async Task<Cart> GetCartByUserId(int userId, CancellationToken cancellationToken)
    {
        return await _cartRepository.GetCartByUserId(userId, cancellationToken);
    }

    public async Task AddPizzaToCart(int userId, int pizzaId, CancellationToken cancellationToken)
    {
        var cart = await _cartRepository.GetCartByUserId(userId, cancellationToken);
        var pizza = await _pizzaRepository.GetByIdAsync(pizzaId, cancellationToken);
        cart.Pizzas.Add(pizza);
        await _cartRepository.SaveAsync(cancellationToken);
    }

    public async Task DeletePizzaFromCart(int userId, int pizzaId, CancellationToken cancellationToken)
    {
        var cart = await _cartRepository.GetCartByUserId(userId, cancellationToken);
        var pizza = await _pizzaRepository.GetByIdAsync(pizzaId, cancellationToken);
        cart.Pizzas.Remove(pizza);
        await _cartRepository.SaveAsync(cancellationToken);
    }

    public async Task ClearCart(int userId, CancellationToken cancellationToken)
    {
        var cart = await _cartRepository.GetCartByUserId(userId, cancellationToken);
        cart.Pizzas.Clear();
        await _cartRepository.SaveAsync(cancellationToken);
    }

    public Task DeleteCart(int id, CancellationToken cancellationToken)
    {
        return this._cartRepository.DeleteAsync(id, cancellationToken);
    }
}
