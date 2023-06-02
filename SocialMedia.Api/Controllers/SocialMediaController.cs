using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SocialMedia.Api.Repository;
using SocialMedia.Api.Models;
using SocialMedia.Api.Services;
using SocialMedia.Api.Services.Interfaces;

namespace SocialMedia.Api.Controllers
{
    public class SocialMediaController : Controller
    {
        
        private readonly ISocialMediaService _socialMediaService;

        public SocialMediaController(ISocialMediaService socialMediaService)
        {
            _socialMediaService = socialMediaService;
        }

        // Endpoint para criar um novo usuário
        [HttpPost("usuarios")]
        public IActionResult CriarUsuario([FromBody] User user)
        {
            if(_socialMediaService.CreateUser(user))
            {
                return Ok(user);
            }
            return BadRequest();
        }

        // Endpoint para obter informações de um usuário pelo ID
        [HttpGet("usuarios/{id}")]
        public IActionResult ObterUsuario(int id)
        {
            var user = _socialMediaService.GetUserById(id);
            
            if(user == null)
            {
                return Ok(user);
            }
            return BadRequest();
        }

        // Endpoint para criar uma nova vaga de emprego
        [HttpPost("vagas")]
        public IActionResult CriarVaga([FromBody] JobOffer jobOffer)
        {
            if (_socialMediaService.CreateJobOffer(jobOffer))
            {
                return Ok(jobOffer);
            }
            return BadRequest();
        }

        // Endpoint para obter todas as vagas de emprego
        [HttpGet("vagas")]
        public IActionResult ObterVagas()
        {
            var jobs = _socialMediaService.GetJobs();

            if(jobs != null)
            {
                return Ok(jobs);
            }
            return BadRequest();
        }

        // Endpoint para obter uma vaga de emprego pelo ID
        [HttpGet("vagas/{id}")]
        public IActionResult ObterVaga(int id)
        {
            var jobOffer = _socialMediaService.GetJobOfferById(id);
            
            if(jobOffer != null)
            {
                 return Ok(jobOffer);
            }
            return BadRequest();
        }

        // Endpoint para candidatar-se a uma vaga de emprego
        [HttpPost("vagas/{id}/candidatar")]
        public IActionResult CandidatarVaga([FromBody] Application application)
        {
            if(_socialMediaService.SubmitApplication(application))
            {
                return Ok(application);
            }
            return BadRequest();
        }
    }
}
