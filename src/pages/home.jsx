import Bio from "../components/bio";
import MainPage from "../components/mainPage";

function Home() {
  return (
    <div className="flex flex-row gap-5 justify-center flex-wrap md:flex-row items-start mt-3 mb-3">
      <Bio></Bio>
      <MainPage></MainPage>
    </div>
  );
}

export default Home;
