using pizza_party_api.Models;
using pizza_party_api.Repositories;

namespace pizza_party_api.Services
{
    public class AdressService : IAdressService
    {
        private readonly AdressRepository<Adress> _adressRepository;
        public AdressService(AdressRepository<Adress> adressRepository)
        {
            _adressRepository = adressRepository;
        }

        public Task<Adress> CreateAdress(int userId, Adress adress, CancellationToken cancellationToken)
        {
            return _adressRepository.AddAsync(adress, cancellationToken);
        }

        public Task DeleteAdress(int id, CancellationToken cancellationToken)
        {
            return _adressRepository.DeleteAsync(id, cancellationToken);
        }

        public Task UpdateAdress(int id, Adress adress, CancellationToken cancellationToken)
        {
            return _adressRepository.UpdateAsync(id, adress, cancellationToken);
        }

        public Task<Adress> GetAdressById(int id, CancellationToken cancellationToken)
        {
            return _adressRepository.GetByIdAsync(id, cancellationToken);
        }

        public Task<IEnumerable<Adress>> GetAdressesByUserId(int userId, CancellationToken cancellationToken)
        {
            return _adressRepository.GetAdressesByUserId(userId, cancellationToken);
        }
    }
}