import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

const Home = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
  const { query } = await searchParams;
  const posts = [{
    _createdAt: "Yesterday",
    views: 55,
    author: { __id: 1 },
    description: "some desc",
    image: "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Robots",
    title: "We Robots",
    __id: 1,
  }]
  return (
    <><section className="pink_container">
      <div className="heading">Pitch your Startup, <br /> Connect With Entrepreneurs</div>
      ; <p className="sub-heading !max-w-3xl">Submit ideas vote on pitches and get noticed on virtual competitions</p>
      <SearchForm query={query} />
    </section>
      <section className="section_container">
        {query ? `Search results for ${query}` : "All Startups"}
        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? posts?.map((post) => <StartupCard key={item?.__id} post={post} />) : (<p className="no-results">No Startups found</p>)
          }
        </ul>
      </section >
    </>

  );
}
export default Home;