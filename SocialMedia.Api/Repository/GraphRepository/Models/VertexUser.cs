using SocialMedia.Api.Repository.GraphRepository.Enum;

namespace SocialMedia.Api.Repository.GraphRepository.Models
{
    public class VertexUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<InterestArea> InterestArea { get; set; }
    }
}
