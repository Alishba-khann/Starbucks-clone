import { FaFacebook, FaPinterest } from "react-icons/fa";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { FaXTwitter, FaSpotify } from "react-icons/fa6";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div className="flex p-3 border-y-2 m-5 border-gray-300 justify-between items-start font-Arial Narrow space-x-4">
        {/* About Us Section */}
        <div className="flex-1 px-10 mb-2  min-h-[18rem]">
          <div className="flex m-2  text-2xl">About Us</div>
          <div className="text-gray-500 m-2 font-thin">Our Company</div>
          <div className="text-gray-500 m-2 font-thin">Our Coffee</div>
          <div className="text-gray-500 m-2 font-thin">Stories & News</div>
          <div className="text-gray-500 m-2 font-thin">Starbucks Archive</div>
          <div className="text-gray-500 m-2 font-thin">Investor Relations</div>
          <div className="text-gray-500 m-2 font-thin">Customer Service</div>
          <div className="text-gray-500 m-2 font-thin">Contact Us</div>
        </div>

        {/* Careers Section */}
        <div className="flex-1 px-10 m-2 min-h-[18rem]">
          <div className="flex m-2 text-2xl">Careers</div>
          <div className="text-gray-500 m-2 font-thin">Culture and Values</div>
          <div className="text-gray-500 m-2 font-thin">
            Inclusion, Diversity, and Equity
          </div>
          <div className="text-gray-500 m-2 font-thin">
            College Achievement Plan
          </div>
          <div className="text-gray-500 m-2 font-thin">Alumni Community</div>
          <div className="text-gray-500 m-2 font-thin">U.S. Careers</div>
          <div className="text-gray-500 m-2 font-thin">
            International Careers
          </div>
        </div>

        {/* Social Impact Section */}
        <div className="flex-1 px-10 m-2 min-h-[18rem]">
          <div className="flex m-2 text-2xl">Social Impact</div>
          <div className="text-gray-500 m-2 font-thin">People</div>
          <div className="text-gray-500 m-2 font-thin">Planet</div>
          <div className="text-gray-500 m-2 font-thin">
            Environmental and Social Impact Reporting
          </div>
        </div>

        {/* For Business Partners Section */}
        <div className="flex-1 px-10 m-2 min-h-[18rem]">
          <div className="flex m-2 text-2xl">For Business Partners</div>
          <div className="text-gray-500 m-2 font-thin">
            Landlord Support Center
          </div>
          <div className="text-gray-500 m-2 font-thin">Suppliers</div>
          <div className="text-gray-500 m-2 font-thin">
            Corporate Gift Card Sales
          </div>
          <div className="text-gray-500 m-2 font-thin">
            Office and Foodservice Coffee
          </div>
        </div>

        {/* Order and Pick Up Section */}
        <div className="flex-1 px-10 m-2 min-h-[18rem]">
          <div className="flex m-2 text-2xl">Order and Pick Up</div>
          <div className="text-gray-500 m-2 font-thin">Order on the App</div>
          <div className="text-gray-500 m-2 font-thin">Order on the Web</div>
          <div className="text-gray-500 m-2 font-thin">
            Order and Pick Up Options
          </div>
          <div className="text-gray-500 m-2 font-thin">
            Explore and Find Coffee for Home
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-start mx-8 gap-2">
          <a
            href="https://open.spotify.com/user/starbucks"
            className="text-black "
          >
            <FaSpotify size={30} />
          </a>
          <a href="https://facebook.com/starbucks" className="text-black ">
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.pinterest.com/starbucks/"
            className="text-black  "
          >
            <FaPinterest size={30} />
          </a>
          <a href="https://instagram.com/starbucks" className="text-black  ">
            <FaInstagramSquare size={30} />
          </a>
          <a href="https://www.youtube.com/starbucks" className="text-black ">
            <FaYoutubeSquare size={30} />
          </a>
          <a href="https://x.com/starbucks/" className="text-black ">
            <FaXTwitter size={30} />
          </a>
        </div>

        <div className="mx-8 my-2">
          <Link
            href="https://www.starbucks.com/terms/privacy-notice/"
            className="hover:underline"
          >
            Privacy Notice
          </Link>
        </div>
        <div className="mx-8 my-2">
          <Link
            href="https://www.starbucks.com/terms/privacy-notice/"
            className="hover:underline"
          >
            Consumer Health Privacy Notice
          </Link>
        </div>
        <div className="mx-8 my-2">
          <Link
            href="https://www.starbucks.com/terms/starbucks-terms-of-use/"
            className="hover:underline"
          >
            Terms of Use
          </Link>
        </div>
        <div className="mx-8 my-2">
          <Link
            href="https://www.starbucks.com/personal-information"
            className="hover:underline"
          >
            Do Not Share My Personal Information
          </Link>
        </div>
        <div className="mx-8 my-2">
          <Link
            href="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf"
            className="hover:underline"
          >
            CA Supply Chain Act
          </Link>
        </div>
        <div className="mx-8 my-2">
          <Link
            href="https://www.starbucks.com/about-us/accessibility/"
            className="hover:underline"
          >
            Accessibility
          </Link>
        </div>
        <div className="mx-8 my-2">
          <Link href="" className="hover:underline">
            Cookie Preferences
          </Link>
        </div>
        <div className="mx-8 my-2 text-center">
          <p className="text-gray-500 text-sm">
            © 2023 Starbucks. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
