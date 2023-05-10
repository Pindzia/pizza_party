using pizza_party_api.Repositories;
using pizza_party_api.Models;

namespace pizza_party_api.Services;

public class OrderService : IOrderService
{
    private readonly OrderRepository<Order> _orderRepository;
    private readonly CartRepository<Cart> _cartRepository;
    private readonly AdressRepository<Adress> _adressRepository;
    private readonly IRepository<User> _userRepository;

    public OrderService(OrderRepository<Order> orderRepository, CartRepository<Cart> cartRepository, AdressRepository<Adress> adressRepository, IRepository<User> userRepository)
    {
        _orderRepository = orderRepository;
        _cartRepository = cartRepository;
        _adressRepository = adressRepository;
        _userRepository = userRepository;
    }

    public async Task CreateOrder(int userId, Adress adressObj, CancellationToken cancellationToken)
    {
        var cart = await _cartRepository.GetCartByUserId(userId, cancellationToken);
        var adress = await _adressRepository.AddAsync(adressObj, cancellationToken);
        var order = new Order
        {
            CartId = cart.Id,
            UserId = userId,
            AdressId = adress.Id,
            OrderDate = DateTime.Now,
            IsCompleted = false
        };
        await _orderRepository.AddAsync(order, cancellationToken);
    }

    public async Task CreateOrder(int userId, int adressId, CancellationToken cancellationToken)
    {
        var cart = await _cartRepository.GetCartByUserId(userId, cancellationToken);
        var adress = await _adressRepository.GetByIdAsync(adressId, cancellationToken);
        var user = await _userRepository.GetByIdAsync(userId, cancellationToken);
        var order = new Order
        {
            CartId = cart.Id,
            UserId = user.Id,
            AdressId = adress.Id,
            OrderDate = DateTime.Now,
            IsCompleted = false
        };
        await _orderRepository.AddAsync(order, cancellationToken);
    }

    public Task DeleteOrder(int id, CancellationToken cancellationToken)
    {
        return this._orderRepository.DeleteAsync(id, cancellationToken);
    }

    public Task<Order> GetOrderById(int id, CancellationToken cancellationToken)
    {
        return this._orderRepository.GetByIdAsync(id, cancellationToken);
    }

    public Task<IEnumerable<Order>> GetOrdersByUserId(int userId, CancellationToken cancellationToken)
    {
        return this._orderRepository.GetOrdersByUserId(userId, cancellationToken);
    }

    public async Task PayOrder(int id, CancellationToken cancellationToken)
    {
        var order = await _orderRepository.GetByIdAsync(id, cancellationToken);
        order.IsCompleted = true;
        await _orderRepository.UpdateAsync(order.Id, order, cancellationToken);
    }
}
