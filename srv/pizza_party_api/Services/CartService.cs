using pizza_party_api.Models;
using pizza_party_api.Repositories;

namespace pizza_party_api.Services;

public class CartService : ICartService
{
    private readonly CartRepository<Cart> _cartRepository;
    private readonly IRepository<Pizza> _pizzaRepository;
    private readonly CartItemRepository<CartItem> _cartItemRepository;

    public CartService(CartRepository<Cart> cartRepository, IRepository<Pizza> pizzaRepository, CartItemRepository<CartItem> cartItemRepository)
    {
        _cartRepository = cartRepository;
        _pizzaRepository = pizzaRepository;
        _cartItemRepository = cartItemRepository;
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
        var CartItem = await _cartItemRepository.GetCartItemCartIdAndPizzaId(cart.Id, pizzaId, cancellationToken);
        if (CartItem != null)
        {
            await _cartItemRepository.UpdateEntityAsync(new CartItem
            {
                Cart = cart,
                Pizza = CartItem.Pizza,
                Quantity = CartItem.Quantity + 1
            }, cancellationToken);
            await _cartRepository.SaveAsync(cancellationToken);
        }
        else
        {
            var pizza = await _pizzaRepository.GetByIdAsync(pizzaId, cancellationToken);
            await _cartItemRepository.AddAsync(new CartItem
            {
                Cart = cart,
                Pizza = pizza,
                Quantity = 1
            }, cancellationToken);
            await _cartRepository.SaveAsync(cancellationToken);
        }
    }

    public async Task DeletePizzaFromCart(int userId, int pizzaId, CancellationToken cancellationToken)
    {
        var cart = await _cartRepository.GetCartByUserId(userId, cancellationToken);
        var cartItem = _cartItemRepository.GetCartItemCartIdAndPizzaId(cart.Id, pizzaId, cancellationToken);
        if (cartItem != null)
        {
            await _cartItemRepository.DeleteAsync(cartItem.Id, cancellationToken);
        }
        await _cartRepository.SaveAsync(cancellationToken);
    }

    public async Task ClearCart(int userId, CancellationToken cancellationToken)
    {
        var cart = await _cartRepository.GetCartByUserId(userId, cancellationToken);
        cart.CartItems.Clear();
        await _cartRepository.SaveAsync(cancellationToken);
    }

    public Task DeleteCart(int id, CancellationToken cancellationToken)
    {
        return this._cartRepository.DeleteAsync(id, cancellationToken);
    }
}
