import Feed from '@components/Feed';
import '@styles/global.css';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="head_text text-center flex  flex-col gap-10 ">
        <h1 className="head_text text-center text-3xl lg:text-6xl ">Discover & Share</h1>
        <h2 className="orange_gradient text-2xl lg:text-5xl">Midjourney powered Prompts</h2>
      </div>
      <p className="text-center mt-10  md:text-base md:flex hidden">
        Prompt Journey aims to create and share the best ideas and techniques for prompts to enhance
        your midjourney experience and achieve outstanding results.Our platform is designed to
        provide you with a curated collection of prompts that are both effective and impactful. Join
        our community of like-minded individuals, and together, let's unlock the potential of
        midjourney by sharing and implementing the most powerful prompts.
      </p>
      <p className="text-center mt-10 text-sm md:hidden flex">
        Prompt Journey: Share impactful prompts, unlock midjourney potential. Curated collection for
        outstanding results. Join our community now!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
