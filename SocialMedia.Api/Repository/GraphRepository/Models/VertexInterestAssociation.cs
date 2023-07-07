using SocialMedia.Api.Models;
using SocialMedia.Api.Repository.GraphRepository.Enum;

namespace SocialMedia.Api.Repository.GraphRepository.Models
{
    public class VertexInterestAssociation
    {
        public InterestArea InterestArea { get; set; }
        public List<VertexUser> Users { get; set; }
    }
}
