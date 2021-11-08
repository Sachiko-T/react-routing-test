import { Page3 } from "../Page3";
import { Page3Detail } from "../Page3Detail";

export const Page3Routes = [
  {
    path: "/",
    exact: true,
    children: <Page3 />
  },
  {
    path: "/detail",
    exact: false,
    children: <Page3Detail />
  }
];
