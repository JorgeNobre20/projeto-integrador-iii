using Microsoft.EntityFrameworkCore;
using SocialMedia.Api.Repository;
using SocialMedia.Api.Services;
using SocialMedia.Api.Services.Interfaces;
using SocialMedia.Api.Utils;

var builder = WebApplication.CreateBuilder(args);
System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };
var connectionstring = Configuration.GetConnectionString("ConnectionString");
// Add services to the container.
builder.Configuration.AddJsonFile("appsettings.json");
builder.Services.AddDbContext<SocialMediaRepository>(options =>
    options.UseSqlServer(connectionstring));
builder.Services.AddScoped<ISocialMediaService, SocialMediaService>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
