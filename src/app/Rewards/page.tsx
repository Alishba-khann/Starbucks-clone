import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Reward from "../public/reward.jpg";
import Reward1 from "../public/reward1.png";
export default async function Rewards() {
  await new Promise((resolve)=>{
    setTimeout(resolve,1000);
})
  return (
    <div className="max-h-full w-full">
      <div>
        <div className="flex justify-start bg-[#174437] text-white font-semibold text-2xl px-24 py-3 h-14 z-1">
          Starbucks® Rewards
        </div>
        <div className="flex justify-between bg-[#d9e9e7] gap-2 h-">
          <div className="h-300 w-700 h-24 my-36 mx-10">
            <h1 className="text-3xl font-extrabold">
              FREE COFFEE <br />
              IS A TAP AWAY
            </h1>
            <div>Join now to start earning Rewards.</div>
            <Button className="text-white bg-[#00563B] hover:bg-[#00563B] hover:text-white rounded-full py-2 px-6 my-3">
              Join now
            </Button>
            <div className="text-2xl">
              Or{" "}
              <Link href="https://www.starbucks.com/rewards/mobile-apps">
                join in the app
              </Link>{" "}
              for the best experience
            </div>
          </div>

          <div>
            <Image
              src={Reward}
              alt="Rewards"
              width={700}
              height={300}
              className=""
            />
          </div>
        </div>
        <div>
            <Image
              src={Reward1}
              alt="Rewards"
              width={1400}
              height={700}
              className=""
            />
          </div>
      </div>
    </div>
  );
}
