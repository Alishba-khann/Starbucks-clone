import Image from "next/image";
import notFound from "./public/not-found.png";
import Link from "next/link";
export default function NotFoundPage(){
    return(
        <div className="text-center justify-items-center m-20">
            <h1 className="text-3xl font-bold ">We can't find the page you're looking for.</h1>
            <p className="text-lg font-bold">
            Don't worry, it's just a little spilled Flat White. Let us help you clean that up and<br />
             find your way! Mop up the spill to reveal something underneath..</p>
         <div className="flex justify-center gap-2">
          <div>
          <Image src={notFound} 
           alt="fall glass" 
           height={500}
           width={600}/>
          </div>
          <div className="my-20 text-sm w-50">
            <div className="text-2xl">
            Would you like to:
            <div>
                <Link href="./menu" className="text-green-700">Place an order</Link>
            </div>
            <div>
                <Link href="./gift-cards" className="text-green-700">Check a gift card</Link>
            </div>
            <div>
                <Link href="./" className="text-green-700"> Return to home page</Link>
            </div>

        </div>
           </div>
           </div>
        </div>
    )
}