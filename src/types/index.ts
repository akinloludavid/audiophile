import React from "react";

export interface IAppRoute {
  path: string;
  element: React.ReactNode;
}

export interface IChildren {
  children: React.ReactNode;
}
export interface ITrendingCard {
  bgImage?: any;
  title: string;
  year: number | string;
  category: string;
  rating: string;
  isBookMarked: boolean;
}

export interface ICategoryCard {
  image: any;
  title: string;
  route: string;
}
export interface IState {
  allEarphones: any[];
  allSpeakers: any[];
  allHeadphones: any[];
  cart: any[];
  count: number;
  setCount: (e: number) => any;
  product: any;
  setProductId: (e: any) => any;
}

export interface IReducerArgs {
  type: string;
  payload: any;
}

export interface IMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
