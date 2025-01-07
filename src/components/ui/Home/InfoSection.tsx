"use client";

import {
  LocalShipping,
  Security,
  SupportAgent,
  LocalOffer,
} from "@mui/icons-material"; // Import Material UI icons

const InfoSection = () => {
  const infoData = [
    {
      icon: <LocalShipping sx={{ height: 40, width: 40, color: "white" }} />,
      title: "Return & Refund",
      subheading: "Money back guarantee",
      bgColor: "bg-[#036280]",
    },
    {
      icon: <Security sx={{ height: 40, width: 40, color: "white" }} />,
      title: "Secure Payment",
      subheading: "30% off by subscribing",
      bgColor: "bg-[#036280]",
    },
    {
      icon: <SupportAgent sx={{ height: 40, width: 40, color: "white" }} />,
      title: "Quality Support",
      subheading: "Always online 24/7",
      bgColor: "bg-[#036280]",
    },
    {
      icon: <LocalOffer sx={{ height: 40, width: 40, color: "white" }} />,
      title: "Daily Offers",
      subheading: "20% off by subscribing",
      bgColor: "bg-[#036280]",
    },
  ];

  return (
    <div className="bg-[#D0E1E7] py-8 mx-[20px] lg:mx-[200px] rounded-lg my-10">
      <div className=" ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {infoData.map((item, index) => (
            <div
              key={index}
              className=" lg:flex justify-center content-center items-center lg:gap-3 text-center"
            >
              <div className={`${item.bgColor} p-5 inline-block rounded-md`}>
                {item.icon}
              </div>
              <div>
                <h3 className="mt-4 lg:mt-0  text-xl lg:text-2xl font-semibold text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.subheading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
