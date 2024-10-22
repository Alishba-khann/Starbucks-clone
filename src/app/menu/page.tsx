import Link from 'next/link';
import Image from 'next/image';
import Menu1 from '../public/menu1.png';
import Menu2 from '../public/menu2.png';
import Menu3 from '../public/menu3.png';
import Menu4 from '../public/menu4.png';
import Menu5 from '../public/menu5.png';
import Menu6 from '../public/menu6.png';
import Menu7 from '../public/menu7.png';
import Menu8 from '../public/menu8.png';
import Menu9 from '../public/menu9.png';
import Menu10 from '../public/menu10.png';
import Menu11 from '../public/menu11.png';
import Menu12 from '../public/menu12.png';
import Menu13 from '../public/menu13.png';
import Menu14 from '../public/menu14.png';
import Menu15 from '../public/menu15.png';
import Menu16 from '../public/menu16.png';
import Menu17 from '../public/menu17.png';
import Menu18 from '../public/menu18.png';
import Menu19 from '../public/menu19.png';
import Menu20 from '../public/menu20.png';
export default async function Menu(){
      await new Promise((resolve)=>{
            setTimeout(resolve,1000);
        })
    return(
<div>
    <div className="flex bg-slate-100 gap-3 px-72 py-2 ">
        <Link href="https://www.starbucks.com/menu" className='gap-2 hover:underline'>Menu</Link>
        <Link href="https://www.starbucks.com/menu/featured" className='gap-2 hover:underline'>Featured</Link>
        <Link href="https://www.starbucks.com/menu/previous" className='gap-2 hover:underline'>Pevious</Link>
        <Link href="https://www.starbucks.com/menu/favorites" className='gap-2 hover:underline'>Favorites</Link>             
    </div>
    <div className='flex mx-10'>
        <div className='w-1/4 p-5  ' > 
            <div className="flex m-2  text-2xl">
              Drinks
            </div>
            <div className="text-gray-500 m-2 font-thin">
                 <Link href="https://www.starbucks.com/menu/drinks/hot-coffees">Hot Coffees</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/drinks/cold-coffees">Cold Coffees</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/drinks/starbucks-refreshers-beverages">Starbucks Refreshers® Beverages</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/drinks/frappuccino-blended-beverages">Frappuccino® Blended Beverages</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/drinks/iced-tea-lemonade">Iced Tea & Lemonade</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/drinks/hot-teas">Hot Teas</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/drinks/iced-energy">Iced Energy</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/drinks/milk-juice-more">Milk, Juice & More</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/drinks/bottled-beverages">Bottled Beverages</Link></div>
            
            <div className="flex m-2  text-2xl">
                  Food
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/food/hot-breakfast">Hot Breakfast</Link></div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/food/oatmeal-yogurt">Oatmeal & Yogurt</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/food/bakery">Bakery</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/food/lunch">Lunch</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/food/snacks-sweets">Snacks & Sweets </Link>
            </div>
        
            <div className="flex m-2  text-2xl">
                   At Home Coffee
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/at-home-coffee/whole-bean">Whole Bean</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/at-home-coffee/via-instant">VIA® Instant</Link>
            </div>

            <div className="flex m-2  text-2xl">
                 Merchandise
            </div>
            <div className="text-gray-500 m-2 font-thin">
                     <Link href="https://www.starbucks.com/menu/merchandise/cold-cups">Cold Cups</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/merchandise/tumblers"> Tumblers</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/merchandise/mugs">Mugs</Link>
            </div>
            <div className="text-gray-500 m-2 font-thin">
                  <Link href="https://www.starbucks.com/menu/merchandise/other">Other</Link>
            </div>
          </div>


          <div className='w-3/4 p-5 px-2'>
                   <h1 className='text-3xl py-4'> Menu</h1>
                   <h2  className='text-3xl py-2'>Drinks</h2>
                   <hr />
                   <div className='flex justify-start gap-48'> 
    
                      <div className='flex flex-row items-center'> 
                         <Image 
                           src={Menu1} 
                           alt='menu1' 
                           width={100} 
                           height={100} 
                           className='rounded-full my-4' 
                           />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Hot Coffee</div>
                      </div>

    
                      <div className='flex flex-row items-center'> 
                         <Image 
                          src={Menu2} 
                          alt='menu2' 
                          width={100} 
                          height={100}  
                          className='rounded-full my-4' 
                          />
                           <div className='text-gray-700 mx-5 text-2xl'>Cold Coffee</div> 
                      </div>
                      </div>

                      <div className='flex justify-start'> 
    
                      <div className='flex flex-row items-center'> 
                         <Image 
                           src={Menu3} 
                           alt='menu3' 
                           width={100} 
                           height={100} 
                           className='rounded-full my-4' 
                           />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Starbucks Refreshers®<br /> Beverages</div>
                      </div>

    
                      <div className='flex flex-row items-center mx-16'> 
                         <Image 
                          src={Menu4} 
                          alt='menu4' 
                          width={100} 
                          height={100}  
                          className='rounded-full my-4' 
                          />
                           <div className='text-gray-700 mx-5 text-2xl'>Frappuccino® Blended <br />Beverages</div> 
                      </div>
                      </div>
                      <div className='flex justify-start gap-20'> 
    
                      <div className='flex flex-row items-center'> 
                         <Image 
                           src={Menu5} 
                           alt='menu5' 
                           width={100} 
                           height={100} 
                           className='rounded-full my-4' 
                           />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Iced Tea & Lemonade</div>
                      </div>

    
                      <div className='flex flex-row items-center'> 
                         <Image 
                          src={Menu6} 
                          alt='menu6' 
                          width={100} 
                          height={100}  
                          className='rounded-full my-4' 
                          />
                           <div className='text-gray-700 mx-5 text-2xl'>Hot Teas</div> 
                      </div>
                      </div>
                      <div className='flex justify-start gap-44'> 
    
                      <div className='flex flex-row items-center'> 
                         <Image 
                           src={Menu7} 
                           alt='menu7' 
                           width={100} 
                           height={100} 
                           className='rounded-full my-4' 
                           />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Iced Energy</div>
                      </div>

    
                      <div className='flex flex-row items-center '> 
                         <Image 
                          src={Menu8} 
                          alt='menu8' 
                          width={100} 
                          height={100}  
                          className='rounded-full my-4' 
                          />
                           <div className='text-gray-700 mx-5 text-2xl'>Milk, Juice & More</div> 
                      </div>
                      </div>
                      <div className='flex justify-start'> 
    
                      <div className='flex flex-row items-center'> 
                         <Image 
                           src={Menu9} 
                           alt='menu9' 
                           width={100} 
                           height={100} 
                           className='rounded-full my-4' 
                           />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Bottled Beverages</div>
                      </div>
                      </div>
                      <h2  className='text-3xl py-2 my-11'>Food</h2>
                      <hr />
                      <div className='flex justify-start gap-48'> 
                        <div className='flex flex-row items-center'> 
                           <Image 
                           src={Menu10} 
                           alt='menu10' 
                           width={100} 
                           height={100} 
                           className='rounded-full my-4' 
                             />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Hot Breakfast</div>
                      </div>


                       <div className='flex flex-row items-center -mx-5'> 
                           <Image 
                            src={Menu11} 
                            alt='menu11' 
                            width={100} 
                            height={100}  
                            className='rounded-full my-4' 
                             />
                           <div className='text-gray-700 mx-5 text-2xl'>Oatmeal & Yogurt</div> 
                      </div>
                  </div>

                   <div className='flex justify-start'> 

                      <div className='flex flex-row items-center'> 
                          <Image 
                          src={Menu12} 
                          alt='menu12' 
                          width={100} 
                          height={100} 
                          className='rounded-full my-4' 
                         />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Bakery</div>
                       </div>


                       <div className='flex flex-row items-center mx-72'> 
                          <Image 
                          src={Menu13} 
                          alt='menu13' 
                          width={100} 
                          height={100}  
                          className='rounded-full my-4' 
                           />
                         <div className='text-gray-700 mx-5 text-2xl'>Lunch</div> 
                       </div>
                    </div>
                    <div className='flex justify-start gap-20'> 

                      <div className='flex flex-row items-center'> 
                         <Image 
                          src={Menu14} 
                          alt='menu14' 
                          width={100} 
                          height={100} 
                          className='rounded-full my-4' 
                           />
                           <div className='text-gray-700 gap-3 mx-5 text-2xl'>Snacks & Sweets</div>
                     </div>
                  </div>  
                 
                  <h2  className='text-3xl py-2'>At Home Coffee</h2>
                   <hr />
                   <div className='flex justify-start gap-48'> 
    
                      <div className='flex flex-row items-center'> 
                         <Image 
                           src={Menu15} 
                           alt='menu15' 
                           width={100} 
                           height={100} 
                           className='rounded-full my-4' 
                           />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Whole Bean</div>
                      </div>

    
                      <div className='flex flex-row items-center'> 
                         <Image 
                          src={Menu16} 
                          alt='menu16' 
                          width={100} 
                          height={100}  
                          className='rounded-full my-4' 
                          />
                           <div className='text-gray-700 mx-5 text-2xl'>VIA® Instant</div> 
                      </div>
                      </div>  <h2  className='text-3xl py-2'>Merchandise</h2>
                   <hr />
                   <div className='flex justify-start gap-48'> 
    
                      <div className='flex flex-row items-center'> 
                         <Image 
                           src={Menu17} 
                           alt='menu17' 
                           width={100} 
                           height={100} 
                           className='rounded-full my-4' 
                           />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Cold Cups</div>
                      </div>

    
                      <div className='flex flex-row items-center mx-10'> 
                         <Image 
                          src={Menu18} 
                          alt='menu18' 
                          width={100} 
                          height={100}  
                          className='rounded-full my-4' 
                          />
                           <div className='text-gray-700 mx-5 text-2xl'>Tumblers</div> 
                      </div>
                      </div> 
                      <div className='flex justify-start gap-48'> 
    
                      <div className='flex flex-row items-center'> 
                         <Image 
                           src={Menu19} 
                           alt='menu19' 
                           width={100} 
                           height={100} 
                           className='rounded-full my-4' 
                           />
                          <div className='text-gray-700 gap-3 mx-5 text-2xl'>Mugs</div>
                      </div>

    
                      <div className='flex flex-row items-center mx-20'> 
                         <Image 
                          src={Menu20} 
                          alt='menu20' 
                          width={100} 
                          height={100}  
                          className='rounded-full my-4' 
                          />
                           <div className='text-gray-700 mx-5 text-2xl'>Other</div> 
                      </div>
                      </div> 
             </div>
        </div>
</div>
        
    );
}