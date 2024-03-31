import BackButton from "../BackButton";
import UsersList from "./UsersList";

export default function PokemonSearch() {
  async function search(search: string) {
    "use server";

    console.log("searching for", search);

    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const userData = await userRes.json();
    return userData
      .filter((p: { name: string }) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((p: { name: string }) => p.name)
      .slice(0, 150);
  }

  return (
    <main className="p-5">
      <BackButton />
      <UsersList search={search} />
    </main>
  );
}
