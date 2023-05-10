using pizza_party_api.Models;

namespace pizza_party_api.Services
{
    public interface IAdressService
    {
        Task<Adress> CreateAdress(int userId, Adress adress, CancellationToken cancellationToken);
        Task<Adress> GetAdressById(int id, CancellationToken cancellationToken);
        Task UpdateAdress(int id, Adress adress, CancellationToken cancellationToken);
        Task<IEnumerable<Adress>> GetAdressesByUserId(int userId, CancellationToken cancellationToken);
        Task DeleteAdress(int id, CancellationToken cancellationToken);
    }
}