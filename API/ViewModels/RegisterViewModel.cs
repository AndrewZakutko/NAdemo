using System.ComponentModel.DataAnnotations;

namespace API.ViewModels;

public class RegisterViewModel
{

    [Required]
    [MaxLength(50)]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [MinLength(5), MaxLength(50)]
    public string Password { get; set; }
    

    [Required]
    [MinLength(5), MaxLength(50)]
    public string ConfirmPassword { get; set; }
    
}
