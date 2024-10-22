import Image from 'next/image';
import Img1 from './public/img1.png';
import Img3 from './public/img3.png';
import Img4 from './public/img4.png';
import Img5 from './public/img5.png';
import Img6 from './public/img6.png';
import {Button} from "@/components/ui/button";
export default function Home() {
  return (
  
 <div className='my-3 bg-slate-50'>
      <div className='my-10  flex justify-between items-center w-full h-700  bg-[#AB274F]'>
         <div>
            <Image src={Img1} alt="Three hot creamy drinks in mugs: one coffee with whipped cream, one coffee with froth and drizzle, and one tea with a frothy top."
            height={1/2} width={1250} priority />
         </div>
          <div className=' w-1/2 h-500 text-center mx-44'>
            <h1 className=' p-3 text-3xl text-white font-extrabold text-center'> Find your fall</h1>
            <p className='text-2xl text-white font-serif'>
            Embrace fall in full flavor with a Pumpkin Spice Latte, Apple Crisp Oatmilk Macchiato or Chai Latte.
            </p>
           <Button  className='text-white font-thin border-2 border-white bg-transparent hover:bg-[rgba(151,66,66,0.52)] px-8 py-1 rounded-full'>Order now</Button>
          </div>
        </div>
      
       <div className='my-8 flex justify-between items-center w-full h-700 bg-[#00693E]'>
        <div className='text-white mx-32 text-center flex-1'>
           <h1 className='text-2xl font-extrabold'>Your treat awaits</h1>
           <h3 className='py-10 font-medium'>
              Fall in love with Starbucks® Rewards member perks, like a free drink with qualifying purchase during your first week. Valid for one-time use.*
            </h3>
           <Button className='text-white font-thin border-2 border-white bg-transparent hover:bg-transparent px-8 py-1 rounded-full'>
            Join now
           </Button>
        </div>
        <div className='flex-1 flex justify-center'>
        <Image
         src={Img4}
         alt="Pumpkin Spice Latte surrounded by leaves on a checkered background"
         height={1/2}
         width={2000}
         priority
         className='px-1'
       />
        </div>
      </div>
      <div className='my-10  flex justify-between items-center w-full h-700 bg-[#d2d655]'>
        <div className=' w-1/2 h-500 text-center mx-44'>
           <h1 className=' p-3 text-3xl text-green-950 font-extrabold text-center'>Apple of autumn’s eye</h1>
           <h3 className='py-10 text-2xl text-green-950 font-serif'>
           The only thing better than the return of the irresistible Baked Apple Croissant is that it’s here to stay.</h3>
          <Button className='text-green-950 font-thin border-2 border-green-950 bg-transparent hover:bg-transparent px-8 py-1 rounded-full'>Order now</Button>
        </div>
        <div>
          <Image src={Img3} alt="A round, flaky pastry with a wavy texture on top set against a geometric pattern."
            height={1/2} width={1150} priority />
        </div>
      </div> 
         
      <div className='my-10 md:flex justify-between items-center w-full h-700  bg-[#d9e89a]'>
         <div>
            <Image src={Img5} alt="Two bags of coffee with colorful illustrations: one reads Milano Sole and the other reads Milano Luna."
            height={1/2} width={1300} priority className='px-1'/>
         </div>
          <div className=' w-1/2 h-500 text-center mx-44'>
            <h1 className=' p-3 text-4xl text-green-950 font-extrabold text-center'>One coffee. Two distinct roasts.</h1>
            <p className='text-2xl text-green-950 font-serif'>
            Enjoy Starbucks® Milano Sole light roast with notes of vanilla custard and sweet pomegranate. Or Starbucks® Milano Luna dark roast with notes of dark chocolate truffle and black walnut.            </p>
           <Button className='text-green-950 font-thin border-2 border-green-950 bg-transparent hover:bg-transparent px-8 py-1 rounded-full'>Order now</Button>
          </div>
        </div>
        <div className='my-10 md:flex justify-between items-center w-full h-700  bg-[#edeeea]'>
        <div className='flex-1 flex justify-center'>
           <Image
             src={Img6}
             alt="Three different styles of reusable cup, featuring a Pumpkin Spice Latte, circled by a &quot;recycle&quot; arrow on a green background."             
             height={1/2}
             width={2000}
             priority
             
           />
         </div>
          <div className='text-green-950 mx-32 text-center flex-1'>
            <h1 className='text-2xl font-extrabold'>Fall favorites in your personal cup</h1>
              <h3 className='py-10 font-medium'>
              Wherever you order—café, drive-thru or app—bring in your own clean cup to help reduce waste and earn Rewards.**
              </h3>
           <Button className='text-white font-thin border-2 border-green-950 bg-[#013220] hover:bg-[#12382a] px-8 py-1 rounded-full'>
             Learn more
           </Button>
          </div>
         
        </div>
        <div className="px-64 font-light text-center w-700">
          <p className='mx-2'>
          *Valid only for new Starbucks Rewards members for 7 days from sign up. Offer good at participating stores for a handcrafted menu-sized beverage with eligible purchase ($8 max value). Taxes not included. Excludes alcohol, Starbucks Card and Starbucks Card reloads. Limit one per member. Cannot be combined with other offers or discounts. Product availability varies by store. Excludes delivery services. Sign up from 9/23/2024 - 11/6/2024 to be eligible.
          </p>
          <br />
          <br />
          <p className='p-2'>
          **Valid for Starbucks Rewards members at participating stores on handcrafted beverage purchases only (max 3x per day).
          </p>
        </div>
</div>
  );
}
