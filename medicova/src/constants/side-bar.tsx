import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import SearchIcon from "@mui/icons-material/Search";
import PaymentIcon from "@mui/icons-material/Payment";
import ReportIcon from "@mui/icons-material/Assessment";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import { LinkType } from "@/types/side-bar";

export const icons = {
  dashBoard: DashboardIcon,
  profile: BusinessIcon,
  job: WorkIcon,
  search: SearchIcon,
  wallet: PaymentIcon,
  report: ReportIcon,
  chat: ChatIcon,
  settings: SettingsIcon,
  help: HelpIcon,
};

export const sideBarLinks: LinkType[] = [
  {
    title: "Dashboard",
    icon: "dashBoard",
    kind: "collapse",
    links: [
      {
        title: "OverView",
        url: "/dashboard",
      },
      {
        title: "Analytics",
      },
      {
        title: "Report",
      },
    ],
  },
  {
    title: "Company Profile",
    url: "/profile",
    icon: "profile",
  },
  {
    title: "My Jobs",
    icon: "job",
    kind: "collapse",
    links: [
      {
        title: "Manage Jobs",
        url: "/job/manage-jobs",
      },
      {
        title: "Posted Jobs",
        url: "/job/posted",
      },
      {
        title: "Applications",
      },
      {
        title: "Job Analytics",
      },
    ],
  },
  {
    title: "CV Search",
    icon: "search",
    kind: "collapse",
    links: [
      {
        title: "Search Candidates",
      },
      {
        title: "Saved Searches",
      },
    ],
  },
  {
    title: "Billing & Subscription",
    icon: "wallet",
  },
  {
    title: "Report",
    icon: "report",
  },
  {
    title: "Chat",
    icon: "chat",
  },
  {
    kind: "divider",
  },
  {
    kind: "title",
    title: "Settings",
  },
  {
    title: "Settings",
    icon: "settings",
    url: "/setting",
  },
  {
    title: "Help Center",
    icon: "help",
  },
];
