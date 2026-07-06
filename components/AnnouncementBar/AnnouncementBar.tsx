export default function AnnouncementBar() {
  return (
    <div className="bg-blue-700 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">

        {/* Desktop */}
        <div className="hidden md:flex justify-between">
          <span>
            🌍 Purified Natural Mineral Water from the Highlands of Ethiopia
          </span>

          <span>
            Eco-Friendly Packaging • Certified Quality • Export Ready
          </span>
        </div>

        {/* Mobile */}
        <div className="md:hidden text-center text-xs font-medium">
          🌍 Certified Premium Drinking Water • Ethiopia
        </div>

      </div>
    </div>
  );
}