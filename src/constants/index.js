import { HiHome, HiArchive, HiPlusCircle } from "react-icons/hi";

const menus = [
  {
    id: 1,
    name: { en: "Active Notes", id: "Catatan Aktif" },
    icon: HiHome,
    path: "/active-notes",
    active: true,
  },
  {
    id: 2,
    name: { en: "Archived Notes", id: "Catatan Arsip" },
    icon: HiArchive,
    path: "/archived-notes",
    active: false,
  },
  {
    id: 3,
    name: { en: "Add Notes", id: "Tambahkan Catatan" },
    icon: HiPlusCircle,
    path: "/add-notes",
    active: false,
  },
];

export {menus}