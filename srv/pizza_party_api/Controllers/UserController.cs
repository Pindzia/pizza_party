using Microsoft.AspNetCore.Mvc;
using pizza_party_api.Models;
using pizza_party_api.Services;

namespace pizza_party_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{

    /*    private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<User> GetUserById(CancellationToken cancellationToken)
        {
            return await _userService.GetByIdAsync(1, cancellationToken);
        }

        [HttpPost]
        public async Task<User> CreateUser(User user, CancellationToken cancellationToken)
        {
            return await _userService.CreateUser(user, cancellationToken);
        }

        [HttpPut("{id}")]
        public Task UpdateUser(int id, User user, CancellationToken cancellationToken)
        {
            return _userService.UpdateUser(id, user, cancellationToken);
        }

        [HttpDelete("{id}")]
        public Task DeleteUser(int id, CancellationToken cancellationToken)
        {
            return _userService.DeleteUser(id, cancellationToken);
        }
        */
}