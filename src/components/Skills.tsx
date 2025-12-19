import profileData from "@/src/data/profile.json";

export default function Skills() {
  const skillColors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-indigo-500 to-blue-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-violet-500 to-purple-500",
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">Skills & Technologies</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {profileData.skills.map((skill, index) => (
            <div
              key={skill}
              className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-slate-700 cursor-default overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skillColors[index % skillColors.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <p className="text-center text-gray-900 dark:text-white font-semibold text-sm sm:text-base relative z-10">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
