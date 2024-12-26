"use client";
import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import { Ellipse5, GridIcon } from "@/components/icons/icons";
import EastIcon from "@mui/icons-material/East";
import JobCard from "@/components/UI/job-card";
import { Search } from "@mui/icons-material";
import { icons } from "@/constants/side-bar";

interface Card {
  title: string;
  content: string;
  icon: keyof typeof icons;
  url: string;
}

const cards: Card[] = [
  { title: "All Jobs", content: "120", icon: "workOT", url: "" },
  { title: "Active Jobs", content: "07", icon: "workOT", url: "" },
  { title: "New Applicants", content: "120", icon: "PeopleIcon", url: "" },
];

const page = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 p-2 md:p-5 lg:flex-row">
        <div className="flex-1">
          {/* cards */}
          <div className="grid w-full grid-cols-2 justify-between gap-2 sm:gap-5 md:grid-cols-3 md:gap-8 lg:gap-10">
            {cards.map((card, index) => (
              <StatusCard
                key={index}
                card={card}
                lastOne={index === cards.length - 1}
              />
            ))}
          </div>
          {/* search */}
          <div className="flex gap-2 pt-5 lg:hidden">
            <div className="flex w-full items-center gap-2">
              <Search color="primary" />
              <input
                className="block w-full min-w-40 appearance-none border-b-2 border-gray-300 px-3 py-2 focus:border-[#2EAE7D] focus:outline-none"
                placeholder="search by title eg: doctor"
              />
            </div>
            <Button variant="contained" className="text-nowrap px-5">
              CV Search
            </Button>
          </div>
          {/* recent jobs */}
          <h2 className="mx-3 mb-5 mt-10 text-3xl font-semibold">
            Recent{" "}
            <span className="mt-5 text-3xl font-semibold text-[#2EAE7D]">
              Jobs
            </span>
          </h2>

          <Grid container spacing={2}>
            {Array.from({ length: 4 }).map((_, index) => (
              <JobCard key={index} />
            ))}
            <Box className="flex w-full justify-center">
              <Button variant="text" className="my-2 mt-5 text-xl">
                All Jobs
                <EastIcon className="mx-2 inline-block" />
              </Button>
            </Box>
          </Grid>
        </div>
        <div className="lg:max-w-[250px]">
          <div className="flex w-full flex-col gap-2 bg-[#F7F7FD] p-4">
            <h3 className="text-center text-lg">ELsalam Hospital</h3>
            <Button variant="contained" sx={{ py: 2 }}>
              View profile page
            </Button>
            <Button variant="outlined" sx={{ py: 2 }}>
              Edit company page
            </Button>
          </div>
          <h3 className="my-3 mb-6 text-lg font-semibold">
            You are now a <span className="text-[#2EAE7D]">Silver Plan</span>{" "}
          </h3>
          <div className="relative rounded-3xl bg-[#2EAE7D] p-10">
            <Ellipse5 className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
            <GridIcon className="absolute right-4 top-4" />
            <h4 className="mb-2 text-lg font-bold text-white">
              Upgrade your Account to Get more applicants
            </h4>
            <button className="rounded-xl bg-white px-4 py-2 text-black shadow-xl transition-colors duration-300 hover:bg-black hover:text-white">
              Upgrade
            </button>
          </div>
          <div className="mt-5 hidden flex-col gap-2 p-2 lg:flex">
            {/* <TextField
              fullWidth
              variant="outlined"
              placeholder="Job Candidates CV's"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                },
                minWidth: 200,
              }}
            /> */}
            <div className="flex items-center gap-2">
              <Search color="primary" />
              <input
                className="block w-full min-w-52 appearance-none border-b-2 border-gray-300 px-3 py-2 focus:border-[#2EAE7D] focus:outline-none"
                placeholder="search by title eg: doctor"
              />
            </div>
            <Button variant="contained" className="text-xl">
              Search
            </Button>
          </div>
        </div>
      </div>
      {/* CV Search Folders */}
      <div className="p-2 md:p-5">
        <h2 className="mx-3 mb-5 mt-10 text-3xl font-semibold">
          CV Search{" "}
          <span className="mt-5 text-3xl font-semibold text-[#2EAE7D]">
            Folders
          </span>
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <CvCard />
          <CvCard />
          <CvCard />
          <CvCard />
          <CvCard />
          <CvCard />
        </div>
        <div className="flex w-full justify-center">
          <Button variant="text" className="my-2 mt-5 text-xl">
            All Folders
            <EastIcon className="mx-2 inline-block" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;

const StatusCard: React.FC<{ lastOne: boolean; card: Card }> = ({
  card,
  lastOne,
}) => {
  const Icon = icons[card.icon];
  return (
    <div
      className={`${lastOne ? "col-span-2 md:col-span-1" : ""} flex justify-center gap-2 text-nowrap rounded-lg border border-[#2EAE7D] bg-white p-4 pb-1 text-[#464255] shadow`}
    >
      <Icon
        sx={{
          width: "30px",
          height: "30px",
          color: "#2EAE7D",
        }}
      />
      <div>
        <p className="text-[16px] font-medium text-black/50 md:text-[22px]">
          {card.title}
        </p>
        <p className="inline text-[24px] font-bold text-black md:text-[40px]">
          {card.content}
        </p>
        <button className="ml-4 inline rounded-full bg-[#CBE7CE] px-3 py-[2px] text-xs text-[#2EAE7D] md:text-base">
          View
        </button>
      </div>
    </div>
  );
};

const CvCard: React.FC = () => {
  return (
    <Button
      variant="outlined"
      className="group flex-col p-5 text-center text-black"
    >
      <div className="flex items-center justify-center gap-5">
        <Image
          src="/images/folder.png"
          alt="folder"
          width={50}
          height={50}
          className="object-contain"
        />
        <p className="font-semibold text-[#185D43] group-hover:text-white">
          25/09/2024
        </p>
        <div className="flex flex-col rounded-xl border p-3 px-4">
          <span className="font-outline-1 text-3xl font-semibold">5</span>
          <span className="font-outline-1 font-semibold"> CVs</span>
        </div>
      </div>
      <p className="text-wrap text-xl font-semibold md:text-2xl lg:text-nowrap">
        Doctors December 2024
      </p>
    </Button>
  );
};
