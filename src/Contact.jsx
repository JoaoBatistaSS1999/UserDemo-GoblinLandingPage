import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      class="flex flex-col items-center p-8 text-center border border-gray-200 rounded-lg"
    >
      <h2 class="text-2xl font-medium">Join Us</h2>

      <p class="mt-4 text-sm max-w-[400px] text-gray-500">
        Get the latest news from our projects by being part of our growing
        community, have a chat with hundreds of investors like you!
      </p>

      <a
        href=""
        class="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
      >
        <button className="flex items-center">
          Telegram
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="flex-shrink-0 w-4 h-4 ml-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}
