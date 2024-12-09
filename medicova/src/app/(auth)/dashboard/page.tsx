import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import { Button, IconButton } from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { Ellipse5, GridIcon } from "@/components/icons/icons";
import ShareIcon from "@mui/icons-material/Share";
import CreateIcon from "@mui/icons-material/Create";

const page = () => {
  return (
    <div className="flex gap-8 p-5">
      <div className="flex-1">
        {/* cards */}
        <div className="flex gap-4 px-10 py-5">
          <div className="border flex-1 justify-center gap-8 p-12  border-[#2EAE7D] rounded-2xl flex text-[#464255]">
            <BusinessCenterOutlinedIcon
              sx={{ width: "60px", height: "60px", color: "#2EAE7D" }}
            />
            <div>
              <h4 className="text-5xl font-black font-outline-2">5</h4>
              <p className="font-semibold font-outline-1">Active Jobs</p>
            </div>
          </div>
          <div className="border flex-1 justify-center gap-8 p-12  border-[#2EAE7D] rounded-2xl flex text-[#464255]">
            <GroupsIcon
              sx={{ width: "60px", height: "60px", color: "#2EAE7D" }}
            />
            <div>
              <h4 className="text-5xl text-[#464255] font-black font-outline-2">
                30
              </h4>

              <p className="font-semibold font-outline-1">New Applicants</p>
            </div>
          </div>
        </div>
        {/* search */}
        <div className="bg-white shadow-xl flex gap-2 p-2 justify-between">
          <IconButton size="small">
            <SearchIcon
              fontSize="large"
              sx={{ color: "#2EAE7D", ":hover": { color: "#134834" } }}
            />
          </IconButton>
          <input
            className="block appearance-none  border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-[#2EAE7D]"
            placeholder="search by title eg: doctor"
          />
          <IconButton size="small">
            <PlaceOutlinedIcon
              fontSize="large"
              sx={{ color: "#2EAE7D", ":hover": { color: "#134834" } }}
            />
          </IconButton>
          <select className="block appearance-none  border-b-2 border-gray-300 py-2 px-3 focus:outline-none focus:border-[#2EAE7D]">
            <option value="egypt">
              🇪🇬 Egypt
              <Image src="/images/" alt="egypt" width={24} height={24} />
            </option>
            <option value="uae">🇦🇪 UAE</option>
            <option value="saudi">🇸🇦 Saudi Arabia</option>
          </select>
          <Button variant="contained" sx={{ px: 5 }}>
            CV Search
          </Button>
        </div>
        {/* recent jobs */}
        <h2 className="mx-3 text-3xl font-semibold mt-5">
          Recent{" "}
          <span className="text-3xl font-semibold mt-5 text-[#2EAE7D]">
            Jobs
          </span>
        </h2>
        <div className="bg-[#F7F7FD] p-3 mt-5">
          <div className="flex p-4 justify-between flex-wrap bg-white mb-5">
            <div className="flex flex-col justify-center items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="border"
              />
              <p>since 9 days</p>
            </div>
            <div>
              <div className="flex items-center gap-8">
                <h4 className="text-3xl text-[#185D43]">
                  Safety Specialist, Health & Safety
                </h4>
                <button
                  type="button"
                  className=" border w-10 text-[#6A727A] h-10 border-[#D6DDEB] hover:text-[#185D43] hover:border-[#185D43]"
                >
                  <CreateIcon className=" m-2" />
                </button>
              </div>
              <div className="flex items-center gap-1 md:gap-4 lg:gap-8 my-4 text-black/50 flex-wrap">
                <div>
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
                  <p className="inline-block">Male and Female</p>
                </div>
                <div>
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
                  <p className="inline-block">Consultant</p>
                </div>
                <div>
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
                  <p className="inline-block">Cardiology</p>
                </div>
                <div>
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
                  <p className="inline-block">5 Vaccancies</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
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
            <div className="flex h-fit">
              <Button variant="text">
                <ShareIcon />
              </Button>
              <Button variant="contained" className="px-10">
                Easy Apply
              </Button>
            </div>
          </div>
          <div className="flex p-4 justify-between flex-wrap bg-white mb-5">
            <div className="flex flex-col justify-center items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="border"
              />
              <p>since 9 days</p>
            </div>
            <div>
              <div className="flex items-center gap-8">
                <h4 className="text-3xl text-[#185D43]">
                  Safety Specialist, Health & Safety
                </h4>
                <button
                  type="button"
                  className=" border w-10 text-[#6A727A] h-10 border-[#D6DDEB] hover:text-[#185D43] hover:border-[#185D43]"
                >
                  <CreateIcon className=" m-2" />
                </button>
              </div>
              <div className="flex items-center gap-1 md:gap-4 lg:gap-8 my-4 text-black/50 flex-wrap">
                <div>
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
                  <p className="inline-block">Male and Female</p>
                </div>
                <div>
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
                  <p className="inline-block">Consultant</p>
                </div>
                <div>
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
                  <p className="inline-block">Cardiology</p>
                </div>
                <div>
                  <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ring-1 ring-yellow-500  mr-3"></span>
                  <p className="inline-block">5 Vaccancies</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
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
            <div className="flex h-fit">
              <Button variant="text">
                <ShareIcon />
              </Button>
              <Button variant="contained" className="px-10">
                Easy Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[250px] h-20">
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
  );
};

export default page;
