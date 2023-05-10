using Microsoft.AspNetCore.Mvc;
using pizza_party_api.Models;
using pizza_party_api.Services;

namespace pizza_party_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CartController : ControllerBase
{
    private readonly ICartService _cartService;

    public CartController(ICartService cartService)
    {
        _cartService = cartService;
    }

    [HttpGet]
    public async Task<Cart> GetCartByUserId(CancellationToken cancellationToken)
    {
        return await _cartService.GetCartByUserId(1, cancellationToken);
    }

    [HttpPost]
    public async Task<Cart> CreateCart(CancellationToken cancellationToken)
    {
        return await _cartService.CreateCart(1, cancellationToken);
    }

    [HttpPut("{cartID}/add/{pizzaId}")]
    public Task AddPizzaToCart(int cartID, int pizzaId, CancellationToken cancellationToken)
    {
        return _cartService.AddPizzaToCart(cartID, pizzaId, cancellationToken);
    }

    [HttpPut("{cartID}/delete/{pizzaId}")]
    public Task DeletePizzaFromCart(int cartID, int pizzaId, CancellationToken cancellationToken)
    {
        return _cartService.DeletePizzaFromCart(cartID, pizzaId, cancellationToken);
    }

    [HttpDelete("{id}/clear")]
    public async Task ClearCart(int id, CancellationToken cancellationToken)
    {
        await _cartService.ClearCart(id, cancellationToken);
    }

}
