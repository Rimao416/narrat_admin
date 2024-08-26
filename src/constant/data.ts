import { SidebarItemProps } from "../components/Sidebar";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";
import { FaBook } from "react-icons/fa";
export const menuItems: SidebarItemProps[] = [
  {
    name: "Catégories",
    Icon: BiSolidCategoryAlt,
    link: "categories",
  },
  {
    name: "Auteurs",
    Icon: MdVerifiedUser,
    link: "authors",
  },
  {
    name: "Livres",
    Icon: FaBook,
    link: "books",
  },
];
