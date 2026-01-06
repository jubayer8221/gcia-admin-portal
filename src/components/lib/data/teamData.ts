// lib/data/teamData.ts
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  department?: string;
  phone: string;
  email: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Ahmed Al Mansur, SMIEEE",
    position: "Director (Acting)",
    department:
      "Professor and Associate Chairperson, Department of Electrical & Electronic Engineering",
    phone: "+8801715020314",
    email: "mansur@eee.green.edu.bd",
  },
  {
    id: 2,
    name: "Rumana Ferdouse",
    position: "Assistant Director",
    department: "Assistant Professor, Green Business School",
    phone: "01718266266",
    email: "rumana@bus.green.edu.bd",
  },
  {
    id: 3,
    name: "Esmot Ara Choity",
    position: "Junior Officer",
    phone: "01581602326",
    email: "choity.geia@green.edu.bd",
  },
];
