using System;
using System.Collections.Generic;

namespace PokemonGo
{
    public class Pokemon
    {
        public int id { get; set; }

        public string name { get; set; }

        public string num { get; set; }

        public List<string> type { get; set; }

        public string height { get; set; }

        public string weight { get; set; }

        public List<string> weaknesses { get; set; }

        public List<NextEvolution> next_evolution { get; set; }

        public string next_evolution_val { get; set; }

        public string img { get; set; }
    }

    public class NextEvolution
    {
        public string name { get; set; }

        public string num { get; set; }
    }
}
