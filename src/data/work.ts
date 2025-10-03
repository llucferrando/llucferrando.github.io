import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Tennis Coach",
    company: "TopTen Tennis Academy",
    region: "Catalonia, Spain",
    description:
      "Coached players of all ages during summer, Easter, and Christmas programs as well as weekends. Developed training sessions focused on discipline, resilience, and problem-solving. Coordinated group activities and acted as mediator in team environments, strengthening communication and leadership skills.",
    technologies: [
      "Coaching",
      "Leadership",
      "Teamwork",
      "Problem-Solving",
      "Conflict Resolution",
    ],
  },
  {
    title: "Machining Assistant to Lathe Operator",
    company: "Mecanitzats Jordà",
    region: "Catalonia, Spain",
    description:
      "Assisted machining tasks by filing and finishing metal and plastic parts. Contributed to the production of plastic components for a boat project using a lathe. Learned to operate precision tools and ensured quality standards in manufacturing processes.",
    technologies: [
      "Machining",
      "Lathe Operation",
      "Manufacturing Processes",
      "Attention to Detail",
      "Team Collaboration",
    ],
  },
];

export type WorkItem = (typeof work)[number];
