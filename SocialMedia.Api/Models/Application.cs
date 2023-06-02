namespace SocialMedia.Api.Models
{
    public class Application
    {
        public int ApplicationId { get; set; }
        public User User { get; set; }
        public DateTime ApplicationDate { get; set; }
    }
}
