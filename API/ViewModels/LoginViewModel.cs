using System.ComponentModel.DataAnnotations;

namespace API.ViewModels;

public class LoginViewModel
{
    [Required]
    [EmailAddress]
    [StringLength(50)]
    public string Email { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 5)]
    public string Password { get; set; }
}
