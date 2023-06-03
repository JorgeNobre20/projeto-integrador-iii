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
            try
            {
                var addJobOffer = _socialMediaRepository.JobOffers.Add(jobOffer);
                _socialMediaRepository.SaveChanges();

                if (addJobOffer.Entity != null)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                // Handle the exception or log the error message
                throw new Exception("SQL Exception:" + ex.Message);
            }
        }

        public bool CreateUser(User user)
        {
            try
            {
                var addUser = _socialMediaRepository.Users.Add(user);
                _socialMediaRepository.SaveChanges();

                if (addUser.Entity != null)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                // Handle the exception or log the error message
                throw new Exception("SQL Exception:" + ex.Message);
            }
        }

        public JobOffer GetJobOfferById(int jobOfferId)
        {
            try
            {
                JobOffer? jobOffer = _socialMediaRepository.JobOffers.Where(x => x.JobOfferId == jobOfferId).FirstOrDefault();

                if (jobOffer != null)
                {
                    return jobOffer;
                }
                return null;
            }
            catch (Exception ex)
            {
                // Handle the exception or log the error message
                throw new Exception("SQL Exception:" + ex.Message);
            }
        }

        public List<JobOffer> GetJobs()
        {
            try
            {
                List<JobOffer>? jobOffers = _socialMediaRepository.JobOffers.ToList();

                if (jobOffers != null)
                {
                    return jobOffers;
                }
                return null;
            }
            catch (Exception ex)
            {
                // Handle the exception or log the error message
                throw new Exception("SQL Exception:" + ex.Message);
            }
        }

        public User GetUserById(int userId)
        {
            try
            {
                User? user = _socialMediaRepository.Users.Where(x => x.UserId == userId).FirstOrDefault();

                if (user != null)
                {
                    return user;
                }
                return null;
            }
            catch (Exception ex)
            {
                // Handle the exception or log the error message
                throw new Exception("SQL Exception:" + ex.Message);
            }
        }

        public bool SubmitApplication(Application application)
        {
            try
            {
                var addApplication = _socialMediaRepository.Applications.Add(application);

                if (addApplication.Entity != null)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                // Handle the exception or log the error message
                throw new Exception("SQL Exception:"+ ex.Message);
            }
        }

    }
}
