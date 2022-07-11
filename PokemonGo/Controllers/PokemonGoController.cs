using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace PokemonGo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PokemonGoController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Ravi", "Shakya", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<PokemonGoController> _logger;

        public PokemonGoController(ILogger<PokemonGoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Pokemon> Get()
        {
            List<Pokemon> data = new List<Pokemon>();

            using (StreamReader r = new StreamReader("data.json"))
            {
                string json = r.ReadToEnd();
                data = JsonSerializer.Deserialize<List<Pokemon>>(json);
            }

            data.ForEach(item => {
                if (item.next_evolution != null && item.next_evolution.Any())
                {
                    item.next_evolution.ForEach(lis =>
                    {
                        item.next_evolution_val += "Name: " + lis.name + ", Number: " + lis.num + " ";
                    });
                }
            });
            return data.OrderBy(con=> con.name);
        }
    }
}
