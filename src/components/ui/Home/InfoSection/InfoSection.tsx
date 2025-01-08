"use client";

import {
  MenuBook,
  Book,
  PeopleAlt,
  PlayLesson,
  Newspaper,
} from "@mui/icons-material"; // Import Material UI icons


const InfoSection = () => {
  const infoData = [
    {
      icon: <PeopleAlt sx={{ height: 40, width: 40, color: "white" }} />,
      title: "Total Member",
      subheading: "200+",
      bgColor: "bg-[#036280]",
    },
    {
      icon: <MenuBook sx={{ height: 40, width: 40, color: "white" }} />,
      title: "Total Book",
      subheading: "500+",
      bgColor: "bg-[#036280]",
    },
    {
      icon: <Book sx={{ height: 40, width: 40, color: "white" }} />,
      title: "Total Magazine",
      subheading: "100+",
      bgColor: "bg-[#036280]",
    },
    {
      icon: <PlayLesson sx={{ height: 40, width: 40, color: "white" }} />,
      title: "eBooks",
      subheading: "500+",
      bgColor: "bg-[#036280]",
    },
    {
      icon: <Newspaper sx={{ height: 40, width: 40, color: "white" }} />,
      title: "News Paper",
      subheading: "5+",
      bgColor: "bg-[#036280]",
    },
  ];

  return (
    <div className="bg-[#D0E1E7] py-8 mx-[20px] lg:mx-[200px] rounded-lg my-10">
      <div className=" ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {infoData.map((item, index) => (
            <div
              key={index}
              className=" lg:flex justify-center content-center items-center gap-3 text-center space-y-2 lg:space-y-0"
            >
              <div className={`${item.bgColor} p-2 md:p-5 inline-block rounded-md`}>
                {item.icon}
              </div>
              <div>
                <p className="">
                  {item.title}
                </p>
                <h1 className="text-gray-600">{item.subheading}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
