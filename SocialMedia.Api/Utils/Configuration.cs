namespace SocialMedia.Api.Utils
{
    public class Configuration
    {
        public static string GetConnectionString(string name)
        {
            var configuration = new ConfigurationBuilder()
            .SetBasePath(AppContext.BaseDirectory)
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .Build();

            return configuration.GetValue<string>(name);
        }
    }
}
