'use client';

import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Coming Soon</h1>
      <p className="text-gray-500 max-w-xl mb-8">
        This category is on its way. We are working hard to bring you the best selection. Please check back soon.
      </p>
      <Link href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6A9725] text-white font-semibold hover:bg-[#5a8020] transition-colors">
        Back to Home
      </Link>
    </div>
  );
}
