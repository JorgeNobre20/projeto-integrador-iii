namespace SocialMedia.Api.Repository.GraphRepository.Models
{
    public class VertexEducationAssociation
    {
        public VertexEducationLevel Vertex { get; set; }
        public List<int> Edges { get; set; }
    }
}
