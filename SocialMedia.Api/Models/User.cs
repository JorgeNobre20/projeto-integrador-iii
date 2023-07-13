using Microsoft.Identity.Client;
using SocialMedia.Api.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace SocialMedia.Api.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public EducationLevel? Education { get; set; }
        public Login Login { get; set; }
        public UserType? UserType { get; set; }
        public List<InterestArea> InterestAreas { get; set; }
    }
}
