using API.Interfaces;
using API.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class AuthController : BaseApiController
{
    private readonly IUserService _userService;

    public AuthController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> RegisterAsync([FromBody]RegisterViewModel model)
    {
        if(ModelState.IsValid)
        {
            var result = await _userService.RegisterUserAsync(model);
            if(result.IsSuccess)
            {
                return Ok(result);
            }
            return Ok(result);
        }

        return Ok("Some properties are not valid");
    }

    [HttpPost("login")]
    public async Task<IActionResult> LoginAsync([FromBody]LoginViewModel model)
    {
        if(ModelState.IsValid)
        {
            var result = await _userService.LoginUserAsync(model);
            if(result.IsSuccess)
            {
                return Ok(result);
            }
            return Ok(result);
        }

        return Ok("Some properties are not valid");
    }
}
