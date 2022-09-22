import React from "react";

const Stats = () => {
  return (
    <div
      id="stats"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
        <div className="grid gap-8 lg:col-span-2">
          <div>
            <p className="mb-2 text-lg font-bold">Lorem 1</p>
            <p className="text-gray-700">
              An old man lived in the village. He was one of the most
              unfortunate people in the world. The whole village was tired of
              him, he was always gloomy, he constantly complained.
            </p>
          </div>
          <div>
            <p className="mb-2 text-lg font-bold">Lorem 2</p>
            <p className="text-gray-700">
              People have been coming to the wise man, complaining about the
              same problems every time. One day he told them a joke and everyone
              roared in laughter.
            </p>
          </div>
        </div>
        <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Max supply
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                $10 000 000
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Initial Mint
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                100 000
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Transaction Fee
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                2 %
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-10">
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Airdrop rewards
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                500 000
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Stake APR
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                Up to 300%
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800 sm:text-base">
                Tokens per Wallet
              </p>
              <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                100 tokenName
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
