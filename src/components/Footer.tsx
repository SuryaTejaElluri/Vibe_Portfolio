import profileData from "@/src/data/profile.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            © {currentYear} {profileData.name} | {profileData.company.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
