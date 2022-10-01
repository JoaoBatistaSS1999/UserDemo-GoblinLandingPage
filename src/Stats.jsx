import React from "react";

const Stats = () => {
  return (
    <div className="w-full flex justify-center bg-[#1b1f29]">
      <div
        id="stats"
        className="text-white px-4 py-16 max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
          <div className="grid gap-8 lg:col-span-2">
            <div>
              <p className="mb-2 text-lg font-bold">Magical Coins</p>
              <p className="">
                Stake you Goblin coins to be eligible for Airdrops! You can also
                use Mystical NFTs to boost stake rewards. The the earlier you
                start the faster your army of Goblinz can grow!
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">Limited Time</p>
              <p className="">
                The gates to the Darkwood Castel can't last forever, once the
                GoblinZ horde gets in the limited 10 000 000 stored in the stash
                wont be shared equaly, make sure to get there early to claim you
                money!
              </p>
            </div>
          </div>
          <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-lg font-semibold sm:text-base">Max supply</p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  $10 000 000
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold sm:text-base">
                  Initial Mint
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  100 000
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold sm:text-base">
                  Transaction Fee
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  2 %
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-lg font-semibold sm:text-base">
                  Airdrop rewards
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  500 000
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold sm:text-base">Stake APR</p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  Up to 300%
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold sm:text-base">
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
    </div>
  );
};

export default Stats;
