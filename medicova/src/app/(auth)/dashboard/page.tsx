"use client";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import { Button, IconButton } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { Ellipse5, GridIcon } from "@/components/icons/icons";
import CreateIcon from "@mui/icons-material/Create";
import PaidIcon from "@mui/icons-material/Paid";
import EastIcon from "@mui/icons-material/East";
import Controls from "@/components/UI/Controls";
const page = () => {
  return (
    <div>
      <div className="flex gap-8 p-2 md:p-5">
        <div className="flex-1">
          {/* cards */}
          <div className="flex gap-4 p-1 sm:p-5">
            <div className="border flex-1 justify-center gap-2 sm:gap-8 aspect-[2.3] items-center  border-[#2EAE7D] rounded-2xl flex text-[#464255]">
              <BusinessCenterOutlinedIcon
                sx={{
                  width: { xs: "30px", sm: "60px" },
                  height: { xs: "30px", sm: "60px" },
                  color: "#2EAE7D",
                }}
              />
              <div>
                <h4 className="text-2xl sm:text-5xl font-black font-outline-1 sm:font-outline-2">
                  5
                </h4>
                <p className="text-xs sm:text-base font-semibold font-outline-1">
                  Active Jobs
                </p>
              </div>
            </div>
            <div className="border flex-1 justify-center gap-2 sm:gap-8 items-center border-[#2EAE7D] rounded-2xl flex text-[#464255]">
              <GroupsIcon
                sx={{
                  width: { xs: "30px", sm: "60px" },
                  height: { xs: "30px", sm: "60px" },
                  color: "#2EAE7D",
                }}
              />
              <div>
                <h4 className="text-2xl sm:text-5xl font-black font-outline-1 sm:font-outline-2">
                  30
                </h4>
                <p className="text-xs sm:text-base font-semibold font-outline-1">
                  New Applicants
                </p>
              </div>
            </div>
          </div>
          {/* search */}
          <div className="bg-white shadow-xl flex flex-col sm:flex-row gap-2 md:gap-8 p-2 justify-between">
            <div className="flex gap-2">
              <SearchIcon fontSize="large" sx={{ color: "#2EAE7D" }} />
              <input
                className="block appearance-none w-full min-w-52 border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-[#2EAE7D]"
                placeholder="search by title eg: doctor"
              />
            </div>
            <div className="flex gap-2">
              <PlaceOutlinedIcon fontSize="large" sx={{ color: "#2EAE7D" }} />
              <select className="block w-full  bg-transparent  border-b-2 border-gray-300 py-2 min-w-32 px-3 focus:outline-none focus:border-[#2EAE7D]">
                <option value="egypt">🇪🇬 Egypt</option>
                <option value="uae">🇦🇪 UAE</option>
                <option value="saudi">🇸🇦 Saudi Arabia</option>
              </select>
            </div>
            <Button variant="contained" className="px-5">
              CV Search
            </Button>
          </div>
          {/* recent jobs */}
          <h2 className="mx-3 text-3xl font-semibold mt-10">
            Recent{" "}
            <span className="text-3xl font-semibold mt-5 text-[#2EAE7D]">
              Jobs
            </span>
          </h2>

          <div className="bg-[#F7F7FD] p-3 mt-5 ">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <div className="flex w-full justify-center">
              <Button variant="text" className=" mt-5 my-2 text-xl">
                All Jobs
                <EastIcon className="inline-block mx-2" />
              </Button>
            </div>
          </div>
        </div>
        <div className="max-w-[250px] hidden lg:block ">
          <div className="w-full p-4 flex flex-col gap-2 bg-[#F7F7FD]">
            <h3 className="text-lg text-center">ELsalam Hospital</h3>
            <Button variant="contained" sx={{ py: 2 }}>
              View profile page
            </Button>
            <Button variant="outlined" sx={{ py: 2 }}>
              Edit company page
            </Button>
          </div>
          <h3 className="font-semibold text-lg my-3 mb-6">
            You are now a <span className="text-[#2EAE7D]">Silver Plan</span>{" "}
          </h3>
          <div className="bg-[#2EAE7D] relative p-10 rounded-3xl">
            <Ellipse5 className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
            <GridIcon className="absolute top-4 right-4 " />
            <h4 className="text-white text-lg font-bold mb-2">
              Upgrade your Account to Get more applicants
            </h4>
            <button className="bg-white rounded-xl px-4 py-2 text-black shadow-xl">
              Upgrade
            </button>
          </div>
        </div>
      </div>
      {/* CV Search Folders */}
      <div className="p-2 md:p-5">
        <h2 className="mx-3 text-3xl font-semibold mt-10 mb-5">
          CV Search{" "}
          <span className="text-3xl font-semibold mt-5 text-[#2EAE7D]">
            Folders
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <CvCard />
          <CvCard />
          <CvCard />
          <CvCard />
          <CvCard />
          <CvCard />
        </div>
        <div className="flex w-full justify-center">
          <Button variant="text" className=" mt-5 my-2 text-xl">
            All Folders
            <EastIcon className="inline-block mx-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;

const JobCard: React.FC = () => {
  return (
    <div className="flex p-4 py-6 gap-3   flex-wrap md:flex-nowrap justify-center md:justify-start  bg-white mb-5">
      <div className=" gap-3 text-center h-fit min-w-[100px]">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="border"
        />
        <p className="text-black/50 text-sm my-2">since 9 days</p>
      </div>
      <div>
        <div className="flex items-center justify-center md:justify-start gap-4">
          <h4 className="text-2xl font-bold">Consultant Cardiology</h4>
          <IconButton className=" w-10 text-[#6A727A] h-10  hover:text-[#185D43] ">
            <CreateIcon className=" m-2" />
          </IconButton>
        </div>
        <div className="flex items-center justify-center md:justify-start  my-2 text-black/50 flex-wrap">
          <div className="mr-3">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
            <p className="inline-block">Full Time</p>
          </div>
          <div className="mr-3">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
            <p className="inline-block">Onsite</p>
          </div>
          <div className="mr-3">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
            <p className="inline-block">Master’s Degree</p>
          </div>
          <div className="mr-3">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
            <p className="inline-block">Cardio-vascular</p>
          </div>
          <div className="mr-3">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
            <p className="inline-block">Male and Female</p>
          </div>
          <div className="mr-3">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
            <p className="inline-block">Consultant</p>
          </div>
          <div className="mr-3">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
            <p className="inline-block">EX (3-5) Years</p>
          </div>
          <div className="mr-3">
            <PaidIcon className="text-yellow-500 w-4 h-4" />

            <p className="inline-block">12000 SAR</p>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4 mb-2 flex-wrap">
          <button className=" border-2 border-[#185D43] text-[#185D43] font-semibold py-2 px-4">
            Healthcare
          </button>
          <button className="bg-[#9BDB9C33] border border-[#185D43] text-black font-semibold py-2 px-4 shadow-lg">
            Doctors
          </button>
          <button className=" border-2 border-[#185D43] text-[#185D43] font-semibold py-2 px-4 text-nowrap">
            <span>Egypt</span>
            <Image
              src="/images/flag-egypt.jpg"
              alt="egypt flag"
              width={50}
              height={20}
              className="w-auto h-6 inline object-contain "
            />
          </button>
        </div>
      </div>
      <Controls />
    </div>
  );
};

const CvCard: React.FC = () => {
  return (
    <Button
      variant="outlined"
      className="flex-col text-black p-5 text-center group"
    >
      <div className="flex justify-center items-center gap-5">
        <Image
          src="/images/folder.png"
          alt="folder"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="font-semibold group-hover:text-white text-[#185D43]">
          25/09/2024
        </p>
        <div className="border rounded-xl p-3 px-4 flex flex-col">
          <span className="text-3xl font-semibold font-outline-1">5</span>
          <span className=" font-semibold font-outline-1"> CVs</span>
        </div>
      </div>
      <p className="text-xl md:text-2xl font-semibold text-wrap lg:text-nowrap">
        Doctors December 2024
      </p>
    </Button>
  );
};
