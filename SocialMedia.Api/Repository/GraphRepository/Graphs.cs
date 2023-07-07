using SocialMedia.Api.Models;
using SocialMedia.Api.Repository.GraphRepository.Enum;
using SocialMedia.Api.Repository.GraphRepository.Models;
using System.Net;
using System.Security.Cryptography.Xml;

namespace SocialMedia.Api.Repository.GraphRepository
{
    public class Graphs
    {
        public List<VertexEducationAssociation> GraphEducation { get; set; }
        public List<VertexInterestAssociation> GraphInterest { get; set; }

        public Graphs() 
        {
            GraphEducation = new List<VertexEducationAssociation>();
            GraphInterest = new List<VertexInterestAssociation>();
        }
        public void CalculateDistanceFromUsers(VertexEducationLevel vertex, List<VertexEducationLevel> vertexList)
        {
            int receivedVertexHeaviestEdge = GetVertexHeaviestEdge(vertex);

            foreach (var grpahVertex in vertexList)
            {
                if (grpahVertex.Id != vertex.Id)
                {
                    int grpahVertexHeaviestEdge = GetVertexHeaviestEdge(grpahVertex);
                    int distanceFromReceivedVertex = receivedVertexHeaviestEdge - grpahVertexHeaviestEdge;

                    Console.WriteLine($"A Distância de {vertex.Name} para {grpahVertex.Name} é de {distanceFromReceivedVertex}");
                }
            }
        }

        public int GetVertexHeaviestEdge(VertexEducationLevel vertex)
        {
            List<int> edges = GetVertexEdges(vertex.Id);

            int heaviestEdge = 0;

            for (int index = 0; index < edges.Count; index++)
            {
                if (edges[index] == 0)
                {
                    break;
                }

                heaviestEdge = edges[index];
            }

            return heaviestEdge;
        }

        public List<int> GetVertexEdges(int vertexId)
        {
            var vertex = GraphEducation.Find(grpahVertex => grpahVertex.Vertex.Id == vertexId);

            if (vertex == null)
            {
                throw new Exception("Vértice não encontrado");
            }

            return vertex.Edges;
        }
        public List<VertexUser> GetUsersWithSimilarInterests(VertexUser user)
        {
            List<VertexUser> usersWithSimilarInterests = new List<VertexUser>();

            foreach (var vertexAssociation in GraphInterest)
            {
                InterestArea vertexAssociationInterestingArea = vertexAssociation.InterestArea;

                if (user.InterestArea.Contains(vertexAssociationInterestingArea))
                {
                    usersWithSimilarInterests.AddRange(vertexAssociation.Users);
                }
            }

            usersWithSimilarInterests = usersWithSimilarInterests.Where(u => u.Id != user.Id).ToList();

            return usersWithSimilarInterests;
        }
        public void ShowUsersWithSameInterestingArea(VertexUser user)
        {
            var usersWithSimilarInterests = GetUsersWithSimilarInterests(user);

            Console.WriteLine("Usuários que possuem áreas similares às de " + user.Name);
            foreach (var userWithSimilarInterest in usersWithSimilarInterests)
            {
                Console.WriteLine(userWithSimilarInterest);
            }
        }

    }
}
