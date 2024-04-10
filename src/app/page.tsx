import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-3 bg-black">
      <header>
        <SearchBar/>
      </header>
      <div className=" bg-white flex" >
        <Cards/>
        <aside className=" shadow-lg m-3">
          <h2 >Subreddit</h2>
          <ul>
            <li>Wall Stret Bets</li>
          </ul>
        </aside>        
      </div>
    </main>
  );
}
