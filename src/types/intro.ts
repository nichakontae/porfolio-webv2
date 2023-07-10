import { IconType } from "react-icons";

export type Contact = {
  icon?: IconType;
  platform: string;
  url: string;
};

export type IntroEachPageType = {
  path: string;
  image: string;
  smallTopic?: string;
  topic: string;
  desc: string;
  contact?: Contact[];
};
