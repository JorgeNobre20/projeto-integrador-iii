using Microsoft.EntityFrameworkCore;
using SocialMedia.Api.Repository;
using SocialMedia.Api.Models;
using SocialMedia.Api.Services.Interfaces;

namespace SocialMedia.Api.Services
{
    public class SocialMediaService :  ISocialMediaService                   
    {
        private readonly SocialMediaRepository _socialMediaRepository;
        public SocialMediaService(SocialMediaRepository socialMediaRepository) 
        { 
            _socialMediaRepository = socialMediaRepository;
        }
        public bool CreateJobOffer(JobOffer jobOffer)
        {
           var addJobOffer = _socialMediaRepository.JobOffers.Add(jobOffer);
            _socialMediaRepository.SaveChanges();

            if(addJobOffer.Entity != null)
            {
                return true;
            }
            return false;
        }

        public bool CreateUser(User user)
        {
            var addUser =  _socialMediaRepository.Users.Add(user);
             _socialMediaRepository.SaveChanges();

            if(addUser.Entity != null)
            {
                return true;
            }
            return false;
        }

        public JobOffer GetJobOfferById(int jobOfferId)
        {
            var jobOffer = new JobOffer();
            jobOffer = _socialMediaRepository.JobOffers.Where(x => x.JobOfferId == jobOfferId).FirstOrDefault();
            
            if(jobOffer != null)
            {
                return jobOffer;
            }
            return jobOffer;
        }

        public List<JobOffer> GetJobs()
        {
            var jobOffers = new List<JobOffer>();
            jobOffers = _socialMediaRepository.JobOffers.ToList();
            if(jobOffers != null)
            {
                return jobOffers;
            }
            return jobOffers;
        }

        public User GetUserById(int userId)
        {
            var user = new User();
            user = _socialMediaRepository.Users.Where(x => x.UserId == userId).FirstOrDefault();
            
            if(user != null)
            {
                return user;
            }
            return user;
        }

        public bool SubmitApplication(Application application)
        {
            var addApplication = _socialMediaRepository.Applications.Add(application);

            if(addApplication.Entity != null)
            {
                return true;
            }
            return false;
        }
    }
}
