import BackButton from "../BackButton";
import PokemonList from "./PokemonList";

export default function PokemonSearch() {
  async function search(search: string) {
    "use server";

    console.log("searching for", search);

    const pokemonRes = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    );
    const pokemonData = await pokemonRes.json();
    return pokemonData.results
      .filter((p: { name: string }) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((p: { name: string }) => p.name)
      .slice(0, 150);
  }

  return (
    <main className="p-5">
      <BackButton />
      <PokemonList search={search} />
    </main>
  );
}