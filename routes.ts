import { createHashRouter } from "react-router";
import { Root } from "./components/Root";
import { About } from "./components/pages/About";
import { Resume } from "./components/pages/Resume";
import { Portfolio } from "./components/pages/Portfolio";
import { Blog } from "./components/pages/Blog";
import { Contact } from "./components/pages/Contact";
import { Admin } from "./components/pages/Admin";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: About },
      { path: "resume", Component: Resume },
      { path: "portfolio", Component: Portfolio },
      { path: "blog", Component: Blog },
      { path: "admin", Component: Admin },
      { path: "contact", Component: Contact },
    ],
  },
]);
