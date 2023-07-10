using SocialMedia.Api.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace SocialMedia.Api.Models
{
    public class JobOffer
    {
        public int JobOfferId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public List<Application> Applications { get; set; }
        public List<InterestArea> InterestAreas { get; set; }
        public JobOffer()
        {
            Applications = new List<Application>();
        }
    }
}
