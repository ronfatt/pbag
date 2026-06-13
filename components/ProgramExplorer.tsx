"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

type ProgramCategory = "All" | "Academic" | "Digital" | "Skills" | "Care";

const programDetails: Array<{
  category: Exclude<ProgramCategory, "All">;
  image: string;
  imageAlt: string;
  highlight: string;
}> = [
  {
    category: "Academic",
    image: "/images/classroom-learning.webp",
    imageAlt: "Students learning in a PBAG classroom",
    highlight: "Builds confidence for daily communication and national language learning."
  },
  {
    category: "Academic",
    image: "/images/classroom-learning.webp",
    imageAlt: "PBAG classroom learning session",
    highlight: "Gives students more ways to communicate, read, and imagine their future."
  },
  {
    category: "Academic",
    image: "/images/classroom-learning.webp",
    imageAlt: "Language learning at PBAG",
    highlight: "Reflects Tawau's multilingual community and expands cultural connection."
  },
  {
    category: "Academic",
    image: "/images/classroom-learning.webp",
    imageAlt: "Students practicing classroom subjects",
    highlight: "Turns numbers into practical problem-solving for everyday life."
  },
  {
    category: "Academic",
    image: "/images/classroom-learning.webp",
    imageAlt: "PBAG students in class",
    highlight: "Encourages curiosity, observation, and a habit of asking good questions."
  },
  {
    category: "Digital",
    image: "/images/computer-class.webp",
    imageAlt: "PBAG students attending computer lessons",
    highlight: "Introduces digital basics for communication, learning, and future work."
  },
  {
    category: "Skills",
    image: "/images/baking-volunteers.webp",
    imageAlt: "PBAG students and volunteers after a practical skills session",
    highlight: "Teaches responsibility, discipline, teamwork, and confidence."
  },
  {
    category: "Skills",
    image: "/images/volunteers.webp",
    imageAlt: "PBAG students participating together",
    highlight: "Shapes values and character so students grow with care for others."
  },
  {
    category: "Skills",
    image: "/images/volunteers.webp",
    imageAlt: "PBAG students in a group activity",
    highlight: "Creates space for expression, participation, and joy."
  },
  {
    category: "Skills",
    image: "/images/culinary-class.webp",
    imageAlt: "PBAG student learning culinary skills",
    highlight: "Hands-on baking and kitchen practice that turns learning into confidence."
  },
  {
    category: "Skills",
    image: "/images/culinary-class.webp",
    imageAlt: "PBAG practical skills learning",
    highlight: "Introduces technical thinking, tools, and practical repair confidence."
  },
  {
    category: "Skills",
    image: "/images/baking-volunteers.webp",
    imageAlt: "PBAG practical skills group",
    highlight: "Develops creativity, patience, and pride through handmade work."
  },
  {
    category: "Skills",
    image: "/images/volunteers.webp",
    imageAlt: "PBAG students in a skills program",
    highlight: "Useful craft practice that can become a lifelong practical skill."
  },
  {
    category: "Care",
    image: "/images/medical-camp-community.webp",
    imageAlt: "PBAG medical camp for the community",
    highlight: "Connects children and families with essential care and community support."
  },
  {
    category: "Care",
    image: "/images/measles-rubella-vaccination.webp",
    imageAlt: "PBAG measles-rubella vaccination program",
    highlight: "Protects children so health challenges do not keep them from learning."
  }
];

const categories: ProgramCategory[] = ["All", "Academic", "Digital", "Skills", "Care"];

export function ProgramExplorer() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProgramCategory>("All");
  const [selectedIndex, setSelectedIndex] = useState(9);
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const programs = t.programs.list;
  const categoryMeta = t.programs.categories;

  const filteredPrograms = useMemo(() => {
    const indexedPrograms = programs.map((program, index) => ({ ...program, index }));
    if (activeCategory === "All") {
      return indexedPrograms;
    }

    return indexedPrograms.filter((program) => programDetails[program.index]?.category === activeCategory);
  }, [activeCategory, programs]);

  const selectedProgram = programs[selectedIndex] ?? programs[9] ?? programs[0];
  const selectedDetails = programDetails[selectedIndex] ?? programDetails[9] ?? programDetails[0];
  const visiblePrograms = showAllPrograms ? filteredPrograms : filteredPrograms.slice(0, 8);
  const hiddenProgramCount = filteredPrograms.length - visiblePrograms.length;

  function chooseCategory(category: ProgramCategory) {
    setActiveCategory(category);
    setShowAllPrograms(false);
    if (category !== "All") {
      const firstInCategory = programDetails.findIndex((program) => program.category === category);
      if (firstInCategory >= 0) {
        setSelectedIndex(firstInCategory);
      }
    }
  }

  return (
    <>
      <div className="mt-9 flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => {
          const active = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => chooseCategory(category)}
              className={`focus-ring shrink-0 rounded-full border px-5 py-3 text-sm font-black transition ${
                active
                  ? "border-[#138a3d] bg-[#138a3d] text-white shadow-lg shadow-green-900/10"
                  : "border-[#e3d5b8] bg-white text-[#526156] hover:-translate-y-0.5 hover:border-[#f4bd45]"
              }`}
              aria-pressed={active}
            >
              {categoryMeta[category].label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="sticky top-24 overflow-hidden rounded-lg border border-[#e8ddc7] bg-white shadow-2xl">
            <div className="relative aspect-[4/3] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProgram.title}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                >
                  <Image
                    src={selectedDetails.image}
                    alt={selectedDetails.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
                <p className="inline-flex items-center gap-2 rounded-full bg-white/16 px-3 py-2 text-xs font-black backdrop-blur">
                  <Sparkles size={15} /> {selectedDetails.category}
                </p>
                <h3 className="mt-4 text-3xl font-black">{selectedProgram.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/82">{selectedProgram.description}</p>
              </div>
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="text-sm font-semibold leading-6 text-[#66746a]">{categoryMeta[activeCategory].description}</p>
              <a
                href="#sponsor"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#f4bd45] px-5 py-3 text-sm font-black text-[#263128] transition hover:-translate-y-0.5 hover:bg-[#ffd36b]"
              >
                {t.programs.supportLearning} <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            {visiblePrograms.map((program) => {
              const active = selectedIndex === program.index;
              return (
                <button
                  key={program.title}
                  type="button"
                  onClick={() => setSelectedIndex(program.index)}
                  className={`focus-ring group h-full w-full rounded-lg border p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                    active ? "border-[#138a3d] bg-[#eef8ef] shadow-lg" : "border-[#e8ddc7] bg-white hover:border-[#f4bd45]"
                  }`}
                  aria-pressed={active}
                >
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full transition ${
                      active ? "bg-[#138a3d] text-white" : "bg-[#fff4dc] text-[#138a3d] group-hover:bg-[#f4bd45]"
                    }`}
                  >
                    <program.icon size={21} />
                  </div>
                  <h3 className="font-black text-[#263128]">{program.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#66746a]">{program.description}</p>
                  <p className={`mt-4 text-xs font-black uppercase tracking-[0.14em] ${active ? "text-[#138a3d]" : "text-[#b49a6b]"}`}>
                    {active ? t.programs.currentlyFeatured : t.programs.tapToPreview}
                  </p>
                </button>
              );
            })}
          </div>

          {hiddenProgramCount > 0 ? (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllPrograms(true)}
                className="focus-ring rounded-full border border-[#138a3d]/20 bg-white px-6 py-3 text-sm font-black text-[#138a3d] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#eef8ef]"
              >
                {t.programs.viewAll} ({hiddenProgramCount} {t.programs.more})
              </button>
            </div>
          ) : filteredPrograms.length > 8 ? (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllPrograms(false)}
                className="focus-ring rounded-full border border-[#e3d5b8] bg-white px-6 py-3 text-sm font-black text-[#526156] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff4dc]"
              >
                {t.programs.showFewer}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
