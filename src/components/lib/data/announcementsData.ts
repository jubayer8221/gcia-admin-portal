// lib/data/announcementsData.ts
export interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: "event" | "update" | "partnership" | "workshop" | "scholarship";
  link?: string;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Heritage Network General Assembly 2024",
    description: "Participating in the annual heritage network meeting",
    date: "2024",
    type: "event",
  },
  {
    id: 2,
    title: "ERASMUS+ Membership",
    description: "Upcoming membership in ERASMUS+ program",
    date: "Upcoming",
    type: "update",
  },
  {
    id: 3,
    title: "New MoU Signings",
    description:
      "Recent partnership agreements with international universities",
    date: "Recent",
    type: "partnership",
  },
  {
    id: 4,
    title: "International Workshop Series",
    description: "Monthly workshops on international collaboration",
    date: "Monthly",
    type: "workshop",
  },
];
