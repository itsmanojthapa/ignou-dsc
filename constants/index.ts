import { cn } from "@/lib/utils";
import { SidebarLink } from "@/types";

import {
  Brain,
  MessageSquare,
  Search,
  Database,
  User,
  Star,
  Archive,
  FileQuestion,
  Tag,
  Home,
} from "lucide-react";
import { text } from "stream/consumers";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: Home,
    route: "/",
    label: "Home",
    color: "lime",
  },
  {
    imgURL: Search,
    route: "",
    label: "⌘K",
    color: "red",
  },
  {
    imgURL: Star,
    route: "/community",
    label: "Community",

    color: "purple",
  },
  {
    imgURL: Database,
    route: "/collection",
    label: "Collection",
    color: "brown",
  },
  {
    imgURL: Tag,
    route: "/tags",
    label: "Tags",
    color: "teal",
  },
  {
    imgURL: User,
    route: "/profile",
    label: "Profile",
    color: "orange",
  },
  {
    imgURL: FileQuestion,
    route: "/ask-question",
    label: "Ask a question",
    color: "turquoise",
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
