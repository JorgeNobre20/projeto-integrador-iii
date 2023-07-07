namespace SocialMedia.Api.Repository.GraphRepository.Models
{
    public class VertexUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<int> InterestAreaIds { get; set; }
    }
}
