using SocialMedia.Api.Enums;
using SocialMedia.Api.Models;

namespace SocialMedia.Api.Repository.GraphRepository.Models
{
    public class VertexUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<InterestArea> InterestArea { get; set; }
    }
}
