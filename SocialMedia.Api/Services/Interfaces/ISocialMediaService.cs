using SocialMedia.Api.Models;

namespace SocialMedia.Api.Services.Interfaces
{
    public interface ISocialMediaService
    {
        bool CreateUser(User user);
        User GetUserById(int userId);
        bool CreateJobOffer(JobOffer jobOffer);
        List<JobOffer> GetJobs();
        JobOffer GetJobOfferById(int jobOfferId);
        bool SubmitApplication(Application application);

    }
}
