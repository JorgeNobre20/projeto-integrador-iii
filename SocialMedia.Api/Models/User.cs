using Microsoft.Identity.Client;
using SocialMedia.Api.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace SocialMedia.Api.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public DateTime? BirthDate { get; set; }
        public EducationLevel? Education { get; set; }
        public string? Role { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public Login Login { get; set; }
        public UserType? UserType { get; set; }
        public List<InterestArea> InterestAreas { get; set; }
    }
}
