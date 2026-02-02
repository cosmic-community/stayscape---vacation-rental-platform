// app/properties/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getPropertyBySlug, getTestimonialsByProperty } from '@/lib/cosmic'
import { Host } from '@/types'
import TestimonialCard from '@/components/TestimonialCard'

interface PropertyPageProps {
  params: Promise<{ slug: string }>
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params
  const property = await getPropertyBySlug(slug)
  
  if (!property) {
    notFound()
  }
  
  const testimonials = await getTestimonialsByProperty(slug)
  const { metadata } = property
  const host = typeof metadata.host === 'object' ? metadata.host as Host : null
  const gallery = metadata.gallery || []
  
  return (
    <div className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-secondary-500 hover:text-secondary-700">Home</Link></li>
            <li className="text-secondary-400">/</li>
            <li><Link href="/properties" className="text-secondary-500 hover:text-secondary-700">Properties</Link></li>
            <li className="text-secondary-400">/</li>
            <li className="text-secondary-900 font-medium">{metadata.name}</li>
          </ol>
        </nav>
        
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-2">
            {metadata.name}
          </h1>
          <div className="flex items-center gap-4 text-secondary-600">
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {metadata.location}
            </span>
            {host?.metadata?.superhost && (
              <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-sm font-medium">
                ⭐ Superhost
              </span>
            )}
          </div>
        </div>
        
        {/* Gallery */}
        {gallery.length > 0 && (
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src={`${gallery[0].imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                  alt={metadata.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {gallery.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                  {gallery.slice(1, 5).map((image, index) => (
                    <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden">
                      <img
                        src={`${image.imgix_url}?w=600&h=450&fit=crop&auto=format,compress`}
                        alt={`${metadata.name} - Image ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Info */}
            <div className="flex items-center gap-6 py-6 border-b border-secondary-200">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-secondary-900">{metadata.bedrooms || 1} bedroom{(metadata.bedrooms || 1) !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                <span className="text-secondary-900">{metadata.bathrooms || 1} bathroom{(metadata.bathrooms || 1) !== 1 ? 's' : ''}</span>
              </div>
            </div>
            
            {/* Host */}
            {host && (
              <div className="py-6 border-b border-secondary-200">
                <Link href={`/hosts/${host.slug}`} className="flex items-center gap-4 group">
                  {host.metadata?.profile_photo ? (
                    <img
                      src={`${host.metadata.profile_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                      alt={host.metadata.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-secondary-200 flex items-center justify-center">
                      <svg className="w-8 h-8 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-secondary-900 group-hover:text-primary-500 transition-colors">
                        Hosted by {host.metadata?.name || host.title}
                      </span>
                      {host.metadata?.superhost && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">
                          Superhost
                        </span>
                      )}
                    </div>
                    <span className="text-secondary-500 text-sm">View profile →</span>
                  </div>
                </Link>
              </div>
            )}
            
            {/* Description */}
            {metadata.description && (
              <div className="py-6 border-b border-secondary-200">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">About this place</h2>
                <div className="prose prose-secondary max-w-none">
                  <ReactMarkdown>{metadata.description}</ReactMarkdown>
                </div>
              </div>
            )}
            
            {/* Amenities */}
            {metadata.amenities && metadata.amenities.length > 0 && (
              <div className="py-6 border-b border-secondary-200">
                <h2 className="text-xl font-semibold text-secondary-900 mb-4">What this place offers</h2>
                <div className="grid grid-cols-2 gap-4">
                  {metadata.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-secondary-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Reviews */}
            {testimonials.length > 0 && (
              <div className="py-6">
                <h2 className="text-xl font-semibold text-secondary-900 mb-6">
                  Guest Reviews ({testimonials.length})
                </h2>
                <div className="space-y-4">
                  {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-xl shadow-card p-6 border border-secondary-200">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-secondary-900">
                  ${metadata.price_per_night}
                </span>
                <span className="text-secondary-500">/ night</span>
              </div>
              
              <div className="border border-secondary-300 rounded-lg mb-4">
                <div className="grid grid-cols-2">
                  <div className="p-3 border-r border-b border-secondary-300">
                    <label className="block text-xs font-semibold text-secondary-700 uppercase">Check-in</label>
                    <input type="date" className="w-full text-secondary-900 text-sm mt-1 outline-none" />
                  </div>
                  <div className="p-3 border-b border-secondary-300">
                    <label className="block text-xs font-semibold text-secondary-700 uppercase">Check-out</label>
                    <input type="date" className="w-full text-secondary-900 text-sm mt-1 outline-none" />
                  </div>
                </div>
                <div className="p-3">
                  <label className="block text-xs font-semibold text-secondary-700 uppercase">Guests</label>
                  <select className="w-full text-secondary-900 text-sm mt-1 outline-none bg-transparent">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4+ guests</option>
                  </select>
                </div>
              </div>
              
              <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors mb-4">
                Reserve
              </button>
              
              <p className="text-center text-secondary-500 text-sm">
                You won&apos;t be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}