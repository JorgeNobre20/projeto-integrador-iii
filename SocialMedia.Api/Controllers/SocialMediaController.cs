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

        // Endpoint para criar um novo Login
        //[HttpPost("login")]
        //public IActionResult CadastroLogin(string email, string password, string name)
        //{
        //    try
        //    {
        //        if (_socialMediaService.CreateLogin(email, password, name))
        //        {
        //            return Ok();
        //        }
        //        return BadRequest();
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"An error occurred while creating the user: {ex.Message}");
        //    }
        //}
        [HttpGet("login")]
        public IActionResult Login(string email, string password)
        {
            try
            {
                var login = _socialMediaService.GetLogin(email, password);
                if (login != null)
                {
                    return Ok(login);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while retrieving the user: {ex.Message}");
            }
        }

        // Endpoint para criar um novo usuário
        [HttpPost("usuarios")]
        public IActionResult CriarUsuario([FromBody] User user)
        {
            try
            {
                if (_socialMediaService.CreateUser(user))
                {
                    return Ok(user);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while creating the user: {ex.Message}");
            }
        }

        // Endpoint para obter informações de um usuário pelo ID
        [HttpGet("usuarios/{id}")]
        public IActionResult ObterUsuario(int id)
        {
            try
            {
                var user = _socialMediaService.GetUserById(id);

                if (user != null)
                {
                    return Ok(user);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while retrieving the user: {ex.Message}");
            }
        }

        // Endpoint para criar uma nova vaga de emprego
        [HttpPost("vagas")]
        public IActionResult CriarVaga([FromBody] JobOffer jobOffer)
        {
            try
            {
                if (_socialMediaService.CreateJobOffer(jobOffer))
                {
                    return Ok(jobOffer);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while creating the job offer: {ex.Message}");
            }
        }

        // Endpoint para obter todas as vagas de emprego
        [HttpGet("vagas")]
        public IActionResult ObterVagas()
        {
            try
            {
                var jobs = _socialMediaService.GetJobs();

                if (jobs != null)
                {
                    return Ok(jobs);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while retrieving the job offers: {ex.Message}");
            }
        }

        // Endpoint para obter uma vaga de emprego pelo ID
        [HttpGet("vagas/{id}")]
        public IActionResult ObterVaga(int id)
        {
            try
            {
                var jobOffer = _socialMediaService.GetJobOfferById(id);

                if (jobOffer != null)
                {
                    return Ok(jobOffer);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while retrieving the job offer: {ex.Message}");
            }
        }

        // Endpoint para candidatar-se a uma vaga de emprego
        [HttpPost("vagas/{id}/candidatar")]
        public IActionResult CandidatarVaga([FromBody] Application application)
        {
            try
            {
                if (_socialMediaService.SubmitApplication(application))
                {
                    return Ok(application);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while submitting the application: {ex.Message}");
            }
        }

        [HttpPost("vaga/atualizar")]
        public IActionResult AtualizarVaga ([FromBody]JobOffer jobOffer)
        {
            try
            {
                if (_socialMediaService.UpdateJobOffer(jobOffer))
                {
                    return Ok(jobOffer);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while update the job offer: {ex.Message}");
            }
        }

        [HttpPost("vaga/deletar")]
        public IActionResult DeletarVaga([FromBody] JobOffer jobOffer)
        {
            try
            {
                if (_socialMediaService.DeleteJobOffer(jobOffer))
                {
                    return Ok(jobOffer);
                }
                return BadRequest();
            }
            catch(Exception ex)
            {
                return StatusCode(500, $"An error occurred while delete the job offer: {ex.Message}");
            }
        }
        [HttpGet("areainteresse")]
        public IActionResult GetAllInterestArea()
        {
            try
            {
                var interestAreas = _socialMediaService.GetAllInterestArea();

                if (interestAreas != null)
                {
                    return Ok(interestAreas);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while retrieving all interest areas: {ex.Message}");
            }
        }
        [HttpPost("areainteresse/adicionar")]
        public IActionResult AddInterestArea([FromBody] InterestArea interestArea)
        {
            try
            {
                if (_socialMediaService.AddInterestArea(interestArea))
                {
                    return Ok(interestArea);
                }
                return BadRequest();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred while delete the job offer: {ex.Message}");
            }
        }
    }
}
