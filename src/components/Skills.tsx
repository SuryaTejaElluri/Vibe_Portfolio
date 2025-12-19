import profileData from "@/src/data/profile.json";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
          {profileData.skills.map((skill) => (
            <div
              key={skill}
              className="bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 cursor-default"
            >
              <p className="text-center text-gray-900 dark:text-white font-medium text-sm sm:text-base">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
