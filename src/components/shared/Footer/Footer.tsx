import Image from "next/image";
import image2 from "../../../assets/images/footer/Rect Light.svg";
// import logo from "../../../assets/images/footer/logo-(1).png";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Footer = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <div className="absolute inset-0 -z-10">
            <Image src={image2} alt="Background" fill className="" priority />
          </div>

          <div className="bg-black bg-opacity-10 py-8 lg:py-16">
            <div className="py-5 lg:py-12  text-gray-400">
              <div className="lg:max-w-7xl mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-4 ">
                <div className="text-center lg:text-start">
                  {/* <Image src={logo} alt="Background"  className="w-[180px] h-[80px]"  /> */}
                  <h1 className=" text-white mb-4">আলোর পথ পাঠাগার</h1>
                  <p className="mb-4">পড়ি, আলোকিত সমাজ গড়ি</p>
                  <div className="flex space-x-4 justify-center lg:justify-start">
                    <Link
                      href="https://www.facebook.com/alorpothpathagar/"
                      className="p-1 rounded-full border border-gray-500"
                      target="_blank"
                    >
                      <FacebookIcon
                        sx={{
                          color: "white",
                          "&:hover": { color: "#1877F2" },
                        }}
                      />
                    </Link>

                    <Link
                      href="#"
                      className="p-1 rounded-full border border-gray-500"
                    >
                      <XIcon
                        sx={{
                          color: "white",
                          "&:hover": { color: "gray" },
                        }}
                      />
                    </Link>

                    <Link
                      href="#"
                      className="p-1 rounded-full border border-gray-500"
                    >
                      <InstagramIcon
                        sx={{
                          color: "white",
                          "&:hover": { color: "#E1306C" },
                        }}
                      />
                    </Link>

                    <Link
                      href="#"
                      className="p-1 rounded-full border border-gray-500"
                    >
                      <YouTubeIcon
                        sx={{ color: "white", "&:hover": { color: "red" } }}
                      />
                    </Link>
                  </div>
                </div>

                <div className="text-center lg:text-start space-y-3">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Visit Us
                  </h4>
                  <div className="lg:flex md:gap-2 justify-start lg:items-center">
                    <FmdGoodOutlinedIcon />
                    <p>উনকোট বাজার, উনকোট, চৌদ্দগ্রাম, কুমিল্লা। </p>
                  </div>
                  <div className="flex gap-2 justify-center lg:justify-start  lg:items-center">
                    <AccessTimeIcon />
                    <p>সকাল ৮.০০ টা - রাত ০৮:০০ টা</p>
                  </div>

                  <h4 className="text-xl font-semibold text-white mt-4">
                    Contact Us
                  </h4>
                  <div className="flex gap-2 justify-center lg:justify-start  lg:items-center">
                    <LocalPhoneIcon />
                    <p>+880 1862-439094</p>
                  </div>
                  <div className="flex gap-2 justify-center lg:justify-start lg:items-center">
                    <MailOutlineIcon />
                    <p>pathagar.alorpoth@gmail.com</p>
                  </div>
                </div>


                {/* <div className="flex gap-20"> */}
                  <div className="text-center lg:text-start">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Explore
                    </h4>
                    <ul className="flex flex-col space-y-2 ">
                      <li>
                        <Link
                          href="/"
                          className="text-gray-400 hover:text-white"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about"
                          className=" text-gray-400 hover:text-white"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services"
                          className="text-gray-400 hover:text-white"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/projects"
                          className="text-gray-400 hover:text-white"
                        >
                          Projects
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center lg:text-start">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Support
                    </h4>
                    <ul className="flex flex-col space-y-2">
                      <li>
                        <Link
                          href="/help-center"
                          className="text-gray-400 hover:text-white"
                        >
                          Help Center
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/career"
                          className="text-gray-400 hover:text-white"
                        >
                          Career
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy-policy"
                          className="text-gray-400 hover:text-white"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="text-gray-400 hover:text-white"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                {/* </div> */}
              </div>

              <div className="mt-4">
                <div className="lg:flex justify-between mx-auto max-w-7xl border-t border-gray-700">
                  <p className="pt-2 text-sm lg:text-base text-center lg:text-start">
                    Copyright © 2024 {" "}
                    <span className="text-blue-400">আলোর পথ পাঠাগার</span>. All Rights
                    Reserved
                  </p>
                  <div className="flex items-center pt-2 text-sm lg:text-base justify-center gap-4">
                    <Link
                      href="/privacy-policy"
                      className="text-gray-400 hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    |
                    <Link
                      href="/terms"
                      className="text-gray-400 hover:text-white "
                    >
                      Terms & Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
