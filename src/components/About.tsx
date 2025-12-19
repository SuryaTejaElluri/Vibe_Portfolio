import profileData from "@/src/data/profile.json";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio Card */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Bio
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {profileData.bio}
            </p>
          </div>

          {/* Company Card */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Company Name
                </p>
                <p className="text-lg text-gray-900 dark:text-white mt-1">
                  {profileData.company.name}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Platform
                </p>
                <p className="text-lg text-gray-900 dark:text-white mt-1">
                  {profileData.company.platform}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Slogan
                </p>
                <p className="text-lg text-gray-900 dark:text-white mt-1 italic">
                  {profileData.company.slogan}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
