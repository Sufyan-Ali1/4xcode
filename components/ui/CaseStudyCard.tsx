"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { CaseStudy } from "../../types/index";

interface CaseStudyCardProps {
  project: CaseStudy;
  index: number;
  reduced: boolean | null;
}

export function CaseStudyCard({ project, index, reduced }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: 0.08 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="h-full"
    >
      <Link
        href={`/work/${project.id}`}
        className="group flex h-full cursor-pointer flex-col gap-4 rounded-[22px] border border-white/5 bg-white/2 p-6 transition-all duration-300 hover:border-[rgba(249,10,31,0.35)] hover:bg-white/4 will-change-transform"
      >
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-[14px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <div className="flex flex-1 flex-col gap-1.5 pt-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#f90a1f]">
              {project.tag}
            </p>
            <NorthEastIcon
              className="text-neutral-500 transition-transform duration-300 group-hover:text-white"
              style={{ fontSize: 14 }}
            />
          </div>

          <h3 className="text-[20px] font-bold leading-tight tracking-[-0.5px] text-white">
            {project.title}
          </h3>

          <p className="text-[14px] leading-relaxed text-[#a7a3a4]">
            {project.description}
          </p>

          {(project.metric || (project.tags && project.tags.length > 0)) && (
            <div className="mt-auto flex flex-col gap-4 pt-4">
              {project.metric && (
                <p className="text-[14px] leading-relaxed text-neutral-200">
                  {project.metric}
                </p>
              )}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-[12px] text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200 group-hover:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
