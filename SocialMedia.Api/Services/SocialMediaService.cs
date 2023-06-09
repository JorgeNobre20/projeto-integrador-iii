﻿using Microsoft.EntityFrameworkCore;
using SocialMedia.Api.Repository;
using SocialMedia.Api.Models;
using SocialMedia.Api.Services.Interfaces;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.AspNetCore.Components.Web;

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
                throw new Exception("SQL Exception:" + ex.Message);
            }
        }
        public bool UpdateJobOffer(JobOffer jobOffer)
        {
            try
            {
                var updateJobOffer = _socialMediaRepository.JobOffers.Update(jobOffer);
                _socialMediaRepository.SaveChanges();

                if (updateJobOffer.Entity != null)
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

        public bool DeleteJobOffer(JobOffer jobOffer)
        {
            try
            {
                var deleteJobOffer = _socialMediaRepository.JobOffers.Remove(jobOffer);
                _socialMediaRepository.SaveChanges();

                if (deleteJobOffer.Entity != null)
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
        //public bool CreateLogin(string email, string password, string name)
        //{
        //    try
        //    {
        //        Login login = new Login
        //        {
        //            Email = email,
        //            Password = password
        //        };

        //        var newLogin = _socialMediaRepository.Logins.Add(login);

        //        User user = new User
        //        {
        //            Name = name,
        //            Login = newLogin.Entity
        //        };
        //        _socialMediaRepository.SaveChanges();

        //        if (CreateUser(user))
        //        {

        //            if (newLogin.Entity != null)
        //            {
        //                return true;
        //            }
        //        }

        //        return false;

        //    }catch (Exception ex)
        //    {
        //        // Handle the exception or log the error message
        //        throw new Exception("SQL Exception:" + ex.Message);
        //    }
        //}
        public Login GetLogin(string email, string password)
        {
            try
            {
                var login = _socialMediaRepository.Users.Select(x => x.Login).Where(x => x.Email.Equals(email) && x.Password.Equals(password)).FirstOrDefault();
            
                if(login != null)
                {
                    return login;
                }
                return null;

            }
            catch (Exception ex)
            {
                // Handle the exception or log the error message
                throw new Exception("SQL Exception:" + ex.Message);
            }
        }
        public List<InterestArea> GetAllInterestArea()
        {
            try
            {
                var interestAreas = _socialMediaRepository.InterestAreas.ToList();

                if (interestAreas != null)
                {
                    return interestAreas;
                }
                return null;

            }
            catch (Exception ex)
            {
                // Handle the exception or log the error message
                throw new Exception("SQL Exception:" + ex.Message);
            }
        }
        public bool AddInterestArea(InterestArea interestArea)
        {
            try
            {
                var AddinterestArea = _socialMediaRepository.InterestAreas.Add(interestArea);
                _socialMediaRepository.SaveChanges();

                if (AddinterestArea.Entity != null)
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
    }
}
