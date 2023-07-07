using SocialMedia.Api.Models;

namespace SocialMedia.Api.Repository.GraphRepository.Models
{
    public class VertexInterestAssociation
    {
        public InterestArea InterestArea { get; set; }
        public List<VertexUser> Users { get; set; }
    }
}
