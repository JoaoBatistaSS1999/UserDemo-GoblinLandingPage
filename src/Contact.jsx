import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex bg-[#113c47] flex-col items-center p-8 text-center  border-"
    >
      <h2 class="text-2xl font-medium text-white">Join Us</h2>

      <p class="mt-4 text-sm max-w-[400px] text-white">
        Get the latest news from our project by being part of our growing
        community, have a chat with hundreds of investors like you!
      </p>

      <a
        href=""
        class="inline-flex items-center px-5 py-3 mt-8 font-medium text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition duration-200"
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
