using Microsoft.EntityFrameworkCore;
using SocialMedia.Api.Models;
using System.Configuration;
using SocialMedia.Api.Utils;
using Configuration = SocialMedia.Api.Utils.Configuration;

namespace SocialMedia.Api.Repository
{
    public class SocialMediaRepository : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<JobOffer> JobOffers { get; set; }
        public DbSet<Application> Applications { get; set; }
        public DbSet<Login> Logins { get; set; }
        public DbSet<InterestArea> InterestAreas { get; set; }

        public SocialMediaRepository(DbContextOptions<SocialMediaRepository> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
