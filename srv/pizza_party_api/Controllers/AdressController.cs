using Microsoft.AspNetCore.Mvc;
using pizza_party_api.Models;
using pizza_party_api.Repositories;
using pizza_party_api.Services;

namespace pizza_party_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AdressController : ControllerBase
{
    private readonly IAdressService _adressService;
    public AdressController(IAdressService adressService)
    {
        _adressService = adressService;
    }

    [HttpGet]
    public async Task<IEnumerable<Adress>> GetAdressesByUserId(CancellationToken cancellationToken)
    {
        return await _adressService.GetAdressesByUserId(1, cancellationToken);
    }

    [HttpPost]
    public async Task<Adress> CreateAdress(Adress adress, CancellationToken cancellationToken)
    {
        return await _adressService.CreateAdress(1, adress, cancellationToken);
    }

    [HttpPut("{id}")]
    public Task UpdateAdress(int id, Adress adress, CancellationToken cancellationToken)
    {
        return _adressService.UpdateAdress(id, adress, cancellationToken);
    }

}
