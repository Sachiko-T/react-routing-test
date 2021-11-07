import { Page2 } from "../Page2";
import { Page2Detail } from "../Page2Detail";

export const Page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <Page2Detail />
  }
];
