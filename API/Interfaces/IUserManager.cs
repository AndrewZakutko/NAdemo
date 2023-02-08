using API.ViewModels;

namespace API.Interfaces;

public interface IUserService
{
    Task<UserManagerResponse> RegisterUserAsync(RegisterViewModel model);
    Task<UserManagerResponse> LoginUserAsync(LoginViewModel model);
}
