import SearchForm from "../components/SearchForm";

const Home = (): React.JSX.Element => {
  return (
    <><section className="pink_container">
      <div className="heading">Pitch your Startup, <br /> Connect With Entrepreneurs</div>
      ; <p className="sub-heading !max-w-3xl">Submit ideas vote on pitches and get noticed on virtual competitions</p>
      <SearchForm />
    </section>

    </>

  );
}
export default Home;