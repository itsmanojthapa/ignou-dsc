import { cn } from "@/lib/utils";
import { SidebarLink } from "@/types";

import {
  Brain,
  MessageSquare,
  Search,
  Settings,
  Database,
  HelpCircle,
  Star,
  Archive,
  Plus,
} from "lucide-react";
import { text } from "stream/consumers";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    color: "white",
    route: "/",
    label: "Home",
  },
  {
    imgURL: Search,
    color: "text-purple-500",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: Star,
    color: "text-yellow-500",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    color: "text-yellow-500",
    route: "/collection",
    label: "Collection",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    color: "white",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    color: "white",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    color: "white",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};
