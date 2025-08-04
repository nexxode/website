export default function Home() {
  const projects = [
    {
      name: 'ProjectName',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ipsam veritatis maxime iure quidem minima necessitatibus tempore earum, perspiciatis maiores delectus itaque. Animi non assumenda atque. Exercitationem eaque culpa sapiente?',
    },
    {
      name: 'ProjectName',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ipsam veritatis maxime iure quidem minima necessitatibus tempore earum, perspiciatis maiores delectus itaque. Animi non assumenda atque. Exercitationem eaque culpa sapiente?',
    },
    {
      name: 'ProjectName',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ipsam veritatis maxime iure quidem minima necessitatibus tempore earum, perspiciatis maiores delectus itaque. Animi non assumenda atque. Exercitationem eaque culpa sapiente?',
    },
  ];

  return (
    <div className="container">
      <section className="py-20">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem] font-extrabold tracking-tighter text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tighter xl:leading-tighter mb-3 lg:mb-6">
          Building things,{' '}
          <span className="bg-gradient-to-r from-teal-500 to-lime-500 bg-clip-text text-transparent">
            solving problems.
          </span>
        </h1>
      </section>

      {/* <section className="" id="projects">
        <h2 className="mb-3 relative border-t-2 border-gray-300/30 text-center">
          <span className="inline-block uppercase tracking-widest text-xl font-semibold -translate-y-1/2 bg-brand-dark px-6">
            Featured Projects
          </span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-brand-surface rounded-xl p-5 shadow-soft"
            >
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
