import { Link } from 'react-router-dom';
import CopyButton from '../utils/CopyButton';

const HomePage = () => {
  return (
    <main className="bg-bg-primary px-10">
      <header className="px-4 sm:px-6 md:px-8 mb-14 sm:mb-20 xl:mb-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mt-10 mb-8 sm:mt-14 sm:mb-10">Bring your code to life.</h1>
        <p className="tertiary max-w-screen-lg text-lg sm:text-2xl sm:leading-10 font-medium mb-10 sm:mb-11">Learn to build your favourite apps from scratch.</p>

        <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 text-center">
          <Link
            className="w-full sm:w-auto flex-none bg-gray-900 hover:bg-gray-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
            to="/">Get Started</Link>
          <CopyButton>youtube.com/adamjr</CopyButton>
        </div>
      </header>

      <section className="px-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8">Build Apps from Scratch</h2>
      </section>
    </main>
  );
}

export default HomePage;