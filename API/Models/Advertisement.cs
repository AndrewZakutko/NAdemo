using System.ComponentModel.DataAnnotations;

namespace API.Models;

public class Advertisement
{
    [Key]
    public int Id { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public string AuthorName { get; set; }

    public string AuthorSurname { get; set; }

    public string PhoneNumber { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;    
}
