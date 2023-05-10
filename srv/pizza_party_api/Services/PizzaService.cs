using Microsoft.EntityFrameworkCore;
using pizza_party_api.Models;
using pizza_party_api.Repositories;

namespace pizza_party_api.Services;

public class PizzaService : IPizzaService
{
    private readonly IRepository<Pizza> _pizzaRepository;


    public PizzaService(IRepository<Pizza> pizzaRepository)
    {
        _pizzaRepository = pizzaRepository;
    }

    public Task<List<Pizza>> GetAllPizzas(CancellationToken cancellationToken)
    {
        return _pizzaRepository.GetAll().ToListAsync(cancellationToken);
    }

    public Task<Pizza> GetPizzaById(int id, CancellationToken cancellationToken)
    {
        return _pizzaRepository.GetByIdAsync(id, cancellationToken);
    }

}
