import React from "react";
import mint from "./assets/icons/Mint.png";
import stake from "./assets/icons/Stake.png";
import multiply from "./assets/icons/Multiply.png";

const Tecnologies = () => {
  return (
    <section id="features" class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={mint}
              />
              <p class="leading-relaxed">
                Mint GoblinNFTs at fixed price with low fees and fast
                transaction on Polygon. You can chose between a specific NFT or
                test your luck on the Deeplake Dungeon and see if you can get a
                Magician to boost you battles.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-teal-600 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Mint
              </h2>
              <p class="text-gray-500">Different Rarity levels</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={stake}
              />
              <p class="leading-relaxed">
                Stake tokens to earn daily rewards and be eligible for airdrops.
                You can harvest or even compound your tokens to keep earning
                without leaving the Magical Valley. Early Goblin hunters can get
                higher profits, since they will get scarcer over time.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-teal-600 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Stake Tokens
              </h2>
              <p class="text-gray-500">Earn rewards daily</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src={multiply}
              />
              <p class="leading-relaxed">
                You can also use Mystical NFTs combined with normal warriors to
                multiply your staking rewards and increase your chance to get an
                airdrop. Mystical NFTs can be found at the Deeplake Dungeon and
                help massively your army on raids.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-teal-600 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Super Stake
              </h2>
              <p class="text-gray-500">Multiply Profits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologies;
