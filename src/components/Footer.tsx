import profileData from "@/src/data/profile.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/50 dark:border-slate-700/50 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            © {currentYear} <span className="font-semibold text-gray-900 dark:text-white">{profileData.name}</span> | {profileData.company.name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
