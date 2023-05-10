using Microsoft.AspNetCore.Mvc;
using pizza_party_api.Models;
using pizza_party_api.Services;

namespace pizza_party_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PizzaController : ControllerBase
    {
        private readonly IPizzaService _pizzaService;

        public PizzaController(IPizzaService pizzaService)
        {
            _pizzaService = pizzaService;
        }

        [HttpGet]
        public async Task<List<Pizza>> GetAllPizzas(CancellationToken cancellationToken)
        {
            return await _pizzaService.GetAllPizzas(cancellationToken);
        }

        [HttpGet("{id}")]
        public async Task<Pizza> GetPizzaById(int id, CancellationToken cancellationToken)
        {
            return await _pizzaService.GetPizzaById(id, cancellationToken);
        }
    }
}