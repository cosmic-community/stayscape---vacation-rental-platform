// app/hosts/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getHostBySlug, getPropertiesByHost } from '@/lib/cosmic'
import PropertyCard from '@/components/PropertyCard'

interface HostPageProps {
  params: Promise<{ slug: string }>
}

export default async function HostPage({ params }: HostPageProps) {
  const { slug } = await params
  const host = await getHostBySlug(slug)
  
  if (!host) {
    notFound()
  }
  
  const properties = await getPropertiesByHost(slug)
  const { metadata } = host
  
  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-secondary-500 hover:text-secondary-700">Home</Link></li>
            <li className="text-secondary-400">/</li>
            <li><Link href="/hosts" className="text-secondary-500 hover:text-secondary-700">Hosts</Link></li>
            <li className="text-secondary-400">/</li>
            <li className="text-secondary-900 font-medium">{metadata?.name || host.title}</li>
          </ol>
        </nav>
        
        {/* Host Profile */}
        <div className="bg-white rounded-xl shadow-card p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {metadata?.profile_photo ? (
              <img
                src={`${metadata.profile_photo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                alt={metadata.name || host.title}
                className="w-40 h-40 rounded-full object-cover"
              />
            ) : (
              <div className="w-40 h-40 rounded-full bg-secondary-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            )}
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <h1 className="text-3xl font-bold text-secondary-900">
                  {metadata?.name || host.title}
                </h1>
                {metadata?.superhost && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    ⭐ Superhost
                  </span>
                )}
              </div>
              
              <p className="text-secondary-500 mb-4">
                {properties.length} propert{properties.length !== 1 ? 'ies' : 'y'} listed
              </p>
              
              {metadata?.bio && (
                <p className="text-secondary-600 leading-relaxed max-w-2xl">
                  {metadata.bio}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Host Properties */}
        <div>
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Properties by {metadata?.name || host.title}
          </h2>
          
          {properties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-secondary-100 rounded-xl">
              <p className="text-secondary-600">This host doesn&apos;t have any properties listed yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}