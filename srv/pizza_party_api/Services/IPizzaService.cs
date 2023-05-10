using pizza_party_api.Models;

namespace pizza_party_api.Services;

public interface IPizzaService
{
    Task<List<Pizza>> GetAllPizzas(CancellationToken cancellationToken);
    Task<Pizza> GetPizzaById(int id, CancellationToken cancellationToken);
}
