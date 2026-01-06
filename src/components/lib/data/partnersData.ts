// lib/data/partnersData.ts
export interface PartnerUniversity {
  id: number;
  name: string;
  country: string;
  category: "MoU" | "Network" | "Project";
  logo?: string;
  documentUrl?: string;
  website?: string;
}

export const partnerUniversities: PartnerUniversity[] = [
  {
    id: 1,
    name: "University of Wollongong",
    country: "Australia",
    category: "MoU",
    logo: "/images/partners/wollongong.png",
    website: "https://www.uow.edu.au",
  },
  {
    id: 2,
    name: "Vellore Institute of Technology",
    country: "India",
    category: "MoU",
    logo: "/images/partners/vit.png",
    website: "https://vit.ac.in",
  },
  {
    id: 3,
    name: "National Taipei University",
    country: "Taiwan",
    category: "MoU",
    logo: "/images/partners/ntpu.png",
  },
  {
    id: 4,
    name: "Ming Chi University of Technology",
    country: "Taiwan",
    category: "MoU",
  },
  {
    id: 5,
    name: "Louisiana State University",
    country: "United States of America",
    category: "MoU",
  },
  {
    id: 6,
    name: "Assam Down Town University",
    country: "India",
    category: "MoU",
  },
  {
    id: 7,
    name: "ConnectAuz Pvt Limited",
    country: "Australia",
    category: "MoU",
  },
  {
    id: 8,
    name: "Beijing Language and Culture University",
    country: "China",
    category: "MoU",
  },
  {
    id: 9,
    name: "China Three Gorges University",
    country: "China",
    category: "MoU",
  },
  {
    id: 10,
    name: "Hubei University",
    country: "China",
    category: "MoU",
  },
  {
    id: 11,
    name: "Hubei University of Technology",
    country: "China",
    category: "MoU",
  },
  {
    id: 12,
    name: "Chengdu Textile College",
    country: "China",
    category: "MoU",
  },
  {
    id: 13,
    name: "Universiti Tun Abdul Razak (UNIRAZAK)",
    country: "Malaysia",
    category: "MoU",
  },
  {
    id: 14,
    name: "Binary University – Management & Entrepreneurship",
    country: "Malaysia",
    category: "MoU",
  },
  {
    id: 15,
    name: "University of Huddersfield",
    country: "United Kingdom",
    category: "MoU",
  },
  {
    id: 16,
    name: "University of Regina",
    country: "Canada",
    category: "MoU",
  },
  {
    id: 17,
    name: "Inti International University",
    country: "Malaysia",
    category: "MoU",
  },
  {
    id: 18,
    name: "Nigerian Students Association of Bangladesh",
    country: "Nigeria",
    category: "MoU",
  },
];
