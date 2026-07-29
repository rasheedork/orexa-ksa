import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Corporate Headquarters",
    category: "Office Fit-Out",
    image: "/images/projects/projects-01.jpg",
  },
  {
    title: "Executive Office",
    category: "Interior Design",
    image: "/images/projects/projects-02.jpg",
  },
  {
    title: "Modern Workspace",
    category: "Office Renovation",
    image: "/images/projects/projects-03.jpg",
  },
  {
    title: "Open Workspace",
    category: "Commercial Interior",
    image: "/images/projects/projects-04.jpg",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center font-semibold uppercase tracking-widest text-blue-400">
          OUR PROJECTS
        </p>

        <h2 className="mt-4 text-center text-5xl font-bold">
          Featured Projects
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-300">
          Discover some of our completed office fit-out and workplace
          transformation projects across Saudi Arabia.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="group overflow-hidden rounded-3xl"
            >
              <div className="relative h-[420px]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">

                  <span className="rounded-full bg-blue-600 px-4 py-2 text-sm">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-3xl font-bold">
                    {project.title}
                  </h3>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}