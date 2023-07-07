using SocialMedia.Api.Repository.GraphRepository.Enum;
using SocialMedia.Api.Repository.GraphRepository.Models;

namespace SocialMedia.Api.Repository.GraphRepository
{
    public static class Graphs
    {
        public static void CalculateDistanceFromUsers(VertexEducationLevel vertex)
        {
            int receivedVertexHeaviestEdge = GetVertexHeaviestEdge(vertex);

            foreach (var grpahVertex in vertices)
            {
                if (grpahVertex.id != vertex.id)
                {
                    int grpahVertexHeaviestEdge = GetVertexHeaviestEdge(grpahVertex);
                    int distanceFromReceivedVertex = receivedVertexHeaviestEdge - grpahVertexHeaviestEdge;

                    Console.WriteLine($"A Distância de {vertex.name} para {grpahVertex.name} é de {distanceFromReceivedVertex}");
                }
            }
        }

        public static int GetVertexHeaviestEdge(VertexEducationLevel vertex)
        {
            List<int> edges = GetVertexEdges(vertex.id);

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

        public static List<int> GetVertexEdges(int vertexId)
        {
            var vertex = graph.Find(grpahVertex => grpahVertex.vertex.id == vertexId);

            if (vertex == null)
            {
                throw new Exception("Vértice não encontrado");
            }

            return vertex.edges;
        }
    }
}
