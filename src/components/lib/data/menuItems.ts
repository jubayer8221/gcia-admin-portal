// lib/data/menuItems.ts
export interface MenuItem {
  title: string;
  path: string;
  submenu?: Array<{
    title: string;
    path: string;
    description?: string;
  }>;
}

export const menuItems: MenuItem[] = [
  {
    title: "Home",
    path: "/",
    submenu: [
      { title: "About Us", path: "#about", description: "Learn about GCiA" },
      {
        title: "Advisory Committee",
        path: "#advisory",
        description: "Meet our advisors",
      },
      {
        title: "GCiA Activities",
        path: "#activities",
        description: "View our activities",
      },
    ],
  },
  {
    title: "International Students",
    path: "/international-students",
    submenu: [
      {
        title: "Programs",
        path: "/international-students#programs",
        description: "Academic programs",
      },
      {
        title: "How to Apply",
        path: "/international-students#how-to-apply",
        description: "Application process",
      },
      {
        title: "Fee Structure",
        path: "/international-students#fees",
        description: "Tuition fees",
      },
      {
        title: "Scholarships",
        path: "/international-students#scholarships",
        description: "Financial aid",
      },
      {
        title: "Accommodation",
        path: "/international-students#accommodation",
        description: "Housing options",
      },
      {
        title: "Campus Life",
        path: "/international-students#campus-life",
        description: "Student life",
      },
    ],
  },
  {
    title: "Student Exchange",
    path: "/student-exchange",
  },
  {
    title: "Faculty Exchange",
    path: "/faculty-exchange",
  },
  {
    title: "Partnerships",
    path: "/partnerships",
    submenu: [
      {
        title: "MoUs",
        path: "/partnerships#mous",
        description: "Memorandums of Understanding",
      },
      {
        title: "Networks",
        path: "/partnerships#networks",
        description: "Partner networks",
      },
      {
        title: "Major Projects",
        path: "/partnerships#projects",
        description: "Collaborative projects",
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];
