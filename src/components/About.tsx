import profileData from "@/src/data/profile.json";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="text-gradient">About Me</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Get to know more about my background and professional journey
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 dark:border-slate-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Bio
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {profileData.bio}
            </p>
          </div>

          {/* Company Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 dark:border-slate-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Company
              </h3>
            </div>
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                  Company Name
                </p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {profileData.company.name}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide mb-2">
                  Platform
                </p>
                <p className="text-lg font-medium text-gray-900 dark:text-white">
                  {profileData.company.platform}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-2">
                  Slogan
                </p>
                <p className="text-lg font-medium text-gray-900 dark:text-white italic">
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
