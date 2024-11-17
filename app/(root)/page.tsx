import SearchForm from "../../components/SearchForm";

const Home = async ({ searchParams }: { searchParams: Promise<{ query: string }> }) => {
  const { query } = await searchParams;
  return (
    <><section className="pink_container">
      <div className="heading">Pitch your Startup, <br /> Connect With Entrepreneurs</div>
      ; <p className="sub-heading !max-w-3xl">Submit ideas vote on pitches and get noticed on virtual competitions</p>
      <SearchForm query={query} />
    </section>

    </>

  );
}
export default Home;