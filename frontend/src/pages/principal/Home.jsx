/**
 * #6e0d25
 * #0f0f0f
 * #dcab6b
 * #774e24
 */
import Technology from "../../components/Technology";
import Navbar from "../../components/Navbar";
import Biography from "../../components/Biography";
import Experiences from "../../components/Experiences";

const Home = () => {
  return (
    <div className='w-full h-screen font-[Solid-Mono]'>
      <Navbar />
      <Biography />
      <Technology />
      <Experiences />
    </div>
  );
};

export default Home;
