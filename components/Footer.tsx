import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary-100 border-t border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-xl font-bold text-primary-500">StayScape</span>
            </Link>
            <p className="text-secondary-600 text-sm">
              Find unique places to stay with local hosts around the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Help Center</Link></li>
              <li><Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Safety Information</Link></li>
              <li><Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Cancellation Options</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary-900 mb-4">Hosting</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">List Your Property</Link></li>
              <li><Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Host Resources</Link></li>
              <li><Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Community Forum</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-secondary-900 mb-4">StayScape</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">About Us</Link></li>
              <li><Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Careers</Link></li>
              <li><Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Press</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-secondary-600 text-sm">
            © {new Date().getFullYear()} StayScape. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Privacy</Link>
            <Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Terms</Link>
            <Link href="#" className="text-secondary-600 hover:text-secondary-900 text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}