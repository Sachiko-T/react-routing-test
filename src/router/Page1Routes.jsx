import { Page1 } from "../Page1";
import { Page1About } from "../Page1About";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/about",
    exact: false,
    children: <Page1About />
  }
];
