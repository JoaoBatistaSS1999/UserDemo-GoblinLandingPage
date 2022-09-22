import React from "react";

function Footer() {
  return (
    <div>
      <footer class="bg-gray-100 border-t-2 border-blue-400">
        <div class="relative px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:pt-24">
          <div class="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8">
            <a
              class="inline-block p-2 text-white bg-teal-600 rounded-full shadow transition sm:p-3 lg:p-4 hover:bg-teal-500"
              href="#home"
            >
              <span class="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div class="lg:flex lg:items-end lg:justify-between">
            <div>
              <div class="flex justify-center text-teal-600 lg:justify-start">
                <h2 className="text-3xl">Logo</h2>
              </div>

              <p class="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500 lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <nav class="mt-12 lg:mt-0" aria-labelledby="footer-navigation">
              <ul class="flex flex-wrap justify-center gap-6 lg:justify-end ">
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="#about"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="#stats"
                  >
                    Stats
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="#features"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="#story"
                  >
                    Story
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="https://www.youtube.com/watch?v=vDqULFUg6CY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mint
                  </a>
                </li>
                <li>
                  <a
                    class="text-gray-700 transition hover:text-gray-700/75"
                    href="https://www.youtube.com/watch?v=vDqULFUg6CY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stake
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <p class="mt-12 text-sm text-center text-gray-500 lg:text-right">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
