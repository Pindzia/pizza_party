using pizza_party_api.Models;

namespace pizza_party_api.Services;

public interface IOrderService
{
    Task CreateOrder(int userId, Adress adress, CancellationToken cancellationToken);
    Task CreateOrder(int userId, int adressId, CancellationToken cancellationToken);
    Task<Order> GetOrderById(int id, CancellationToken cancellationToken);
    Task<IEnumerable<Order>> GetOrdersByUserId(int userId, CancellationToken cancellationToken);
    Task DeleteOrder(int id, CancellationToken cancellationToken);
    Task PayOrder(int id, CancellationToken cancellationToken);

}
