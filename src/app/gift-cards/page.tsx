import Image from 'next/image';
import Gift from '../public/gift.png';
export default async function(){
    await new Promise((resolve)=>{
        setTimeout(resolve,1000);
    })
    return(
        <div>
           <Image src={Gift}
           alt='gift'
           width={1400}
           height={700}
           />
        </div>
    );
}