import Image from "next/image";
import TitleHeader from "@/components/TitleHeader";
import { Project } from "./data/types/home-types";

interface PortfolioSectionProps {
  title: string;
  description: string;
  categories: string[];
  projects: Project[];
}

function getProjectType(tags: string[]): string {
  if (tags.includes("PWA")) return "PWA und mobile App";
  if (tags.includes("Flutter") || tags.includes("Dart")) return "Mobile App";
  return "Web Application";
}

function getProjectStatus(title: string): { label: string; cyan: boolean } {
  if (title.includes("Tageszeitung")) return { label: "[ SCALE ]", cyan: true };
  if (title.includes("Pictolog")) return { label: "[ LIVE ]", cyan: true };
  return { label: "[ PROD ]", cyan: false };
}

export default function PortfolioSection({ title, projects }: PortfolioSectionProps) {
  return (
    <section id="projects" className="section-dark section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <TitleHeader title={title} tag="PROJEKTE" />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8">
          {projects.map((project, index) => {
            const status = getProjectStatus(project.title);
            const type = getProjectType(project.tags);
            return (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group"
              >
                <div className="project-img-wrapper">
                  <Image
                    src={project.image || "/images/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-80 contrast-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="project-img-overlay" />
                </div>

                <div className="project-content">
                  <div className="project-meta-row">
                    <span className="label-mono">{type}</span>
                    {/* <span
                    className={`label-mono ${status.cyan ? "text-(--accent-cyan)" : ""}`}
                    >
                      {status.label}
                    </span> */}
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-footer">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span key={tagIndex} className="tag-micro">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="project-subtitle">{project.description}</h4>

                  
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
