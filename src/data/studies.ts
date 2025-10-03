export const studies = [
  {
    title: "Bachelor’s Degree in Video Game Design and Development",
    institution: "University of Barcelona – ENTI",
    description:
      "Engineering-oriented program focused on the design, programming, and production of video games. Strong emphasis on graphics programming, game engines, applied games, and multidisciplinary teamwork.",
    tags: [
      "C++",
      "OpenGL",
      "Unity",
      "Unreal Engine",
      "Game Design",
      "Project Management",
    ],
  },
  {
    title: "Tech Baccalaureate",
    institution: "St. Elm St. Feliu de Guíxols High School",
    description:
      "Pre-university program with a strong technical focus, providing foundations in mathematics, physics, and computer science.",
    tags: [
      "Mathematics",
      "Physics",
      "Computer Science",
      "Problem-Solving",
    ],
  },
  {
    title: "B2 Certificate – English",
    institution: "Cambridge School, Girona",
    description:
      "English language proficiency certified at B2 level according to the Common European Framework of Reference (CEFR).",
    tags: [
      "English",
      "Communication",
      "Language Proficiency",
    ],
  },
];

export type StudyItem = (typeof studies)[number];
