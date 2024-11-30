import { BADGE_CRITERIA } from "@/constants";
import { ReactComponentElement } from "react";

export interface SidebarLink {
  imgURL: string | ReactComponentElement;
  color: string;
  route: string;
  label: string;
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface ParamsProps {
  params: { id: string };
}

export interface BadgeCounts {
  GOLD: number;
  SILVER: number;
  BRONZE: number;
}

export type BadgeCriteriaType = keyof typeof BADGE_CRITERIA;
