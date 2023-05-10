using Microsoft.AspNetCore.Mvc;
using pizza_party_api.Models;
using pizza_party_api.Services;

namespace pizza_party_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrderController : ControllerBase
{

    private readonly IOrderService _orderService;
    public OrderController(IOrderService service)
    {
        _orderService = service;
    }

    [HttpPost("{adressId}")]
    public async Task CreateOrder(int adressId, CancellationToken cancellationToken)
    {
        await _orderService.CreateOrder(1, adressId, cancellationToken);
    }

    [HttpPost]
    public async Task CreateOrder([FromBody] Adress adress, CancellationToken cancellationToken)
    {
        await _orderService.CreateOrder(1, adress, cancellationToken);
    }

    [HttpGet]
    public async Task<IEnumerable<Order>> GetOrdersByUserId(CancellationToken cancellationToken)
    {
        return await _orderService.GetOrdersByUserId(1, cancellationToken);
    }

    [HttpGet("{id}")]
    public async Task<Order> GetOrderById(int id, CancellationToken cancellationToken)
    {
        return await _orderService.GetOrderById(id, cancellationToken);
    }

    [HttpDelete("{id}")]
    public async Task DeleteOrder(int id, CancellationToken cancellationToken)
    {
        await _orderService.DeleteOrder(id, cancellationToken);
    }

    [HttpPost("{id}/pay")]
    public async Task PayOrder(int id, CancellationToken cancellationToken)
    {
        await _orderService.PayOrder(id, cancellationToken);
    }
}
