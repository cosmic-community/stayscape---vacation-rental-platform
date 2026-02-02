import Link from 'next/link'
import { getProperties, getTestimonials } from '@/lib/cosmic'
import PropertyCard from '@/components/PropertyCard'
import TestimonialCard from '@/components/TestimonialCard'

export default async function HomePage() {
  const [properties, testimonials] = await Promise.all([
    getProperties(),
    getTestimonials()
  ])
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary-900 text-white py-20 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('https://imgix.cosmicjs.com/676f8050-006a-11f1-a746-2b7bd6c613da-photo-1499793983690-e29da59ef1c2-1770059242634.jpg?w=1920&h=800&fit=crop&auto=format,compress')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect
            <br />
            <span className="text-primary-400">Vacation Rental</span>
          </h1>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Discover unique places to stay with local hosts in destinations around the world.
          </p>
          
          <div className="bg-white rounded-full p-2 max-w-2xl mx-auto flex items-center gap-2 shadow-lg">
            <div className="flex-1 flex items-center gap-3 px-4">
              <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Where are you going?"
                className="flex-1 text-secondary-900 placeholder-secondary-400 outline-none bg-transparent"
              />
            </div>
            <button className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">
                Featured Properties
              </h2>
              <p className="text-secondary-600">
                Discover our handpicked selection of unique stays
              </p>
            </div>
            <Link 
              href="/properties"
              className="hidden sm:flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
            >
              View all
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-secondary-100 rounded-xl">
              <p className="text-secondary-600">No properties available yet.</p>
            </div>
          )}
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/properties" className="btn-primary inline-flex items-center gap-2">
              View all properties
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 text-center mb-12">
            Why Choose StayScape?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Trusted Hosts</h3>
              <p className="text-secondary-600">
                All our hosts are verified and many have earned Superhost status for exceptional hospitality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Unique Stays</h3>
              <p className="text-secondary-600">
                From beachfront villas to city lofts, find unique properties that hotels can&apos;t offer.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Real Reviews</h3>
              <p className="text-secondary-600">
                Read authentic reviews from verified guests who have stayed at each property.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-secondary-900 text-center mb-4">
              What Our Guests Say
            </h2>
            <p className="text-secondary-600 text-center mb-12 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what travelers have to say about their experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Next Adventure?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have found their perfect stay with StayScape.
          </p>
          <Link 
            href="/properties"
            className="inline-flex items-center gap-2 bg-white text-primary-500 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Browse Properties
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}