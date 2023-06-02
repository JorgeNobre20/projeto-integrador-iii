using Microsoft.Identity.Client;

namespace SocialMedia.Api.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string Education { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public Login Login { get; set; }
    }
}
