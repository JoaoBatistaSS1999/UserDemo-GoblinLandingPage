import bannerImage from "./assets/heroBG.jpg";
export const Hero = () => {
  return (
    <div id="about" className="w-full flex justify-center">
      <div className="mt-10 relative flex flex-col-reverse py-16 max-w-screen-xl w-full lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={bannerImage}
            alt="goblin_background"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Scattered across the most foreboding mountains and deep in the
              darkest mines, exist some of the most malicious, dangerous, and
              evil little creatures known to mankind, just waiting for an
              opportunity to sneak on your magical weapons. The Goblin roams the
              Earth in a variety of different shapes and statures.
            </p>
            <div className="flex items-center">
              <a
                href="https://user-demo-goblin-mint-dapp-qmqb.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium bg-teal-600
               tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="https://goblinz-token.gitbook.io/goblinz/nft-multiplier"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium transition duration-200 rounded shadow-md text-black hover:bg-[#f3f3f3]"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
