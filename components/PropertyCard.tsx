import Link from 'next/link'
import { Property, Host } from '@/types'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { metadata } = property
  const firstImage = metadata.gallery?.[0]
  const host = typeof metadata.host === 'object' ? metadata.host as Host : null
  
  return (
    <Link href={`/properties/${property.slug}`} className="card group">
      <div className="relative aspect-[4/3] overflow-hidden">
        {firstImage ? (
          <img
            src={`${firstImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={metadata.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-secondary-200 flex items-center justify-center">
            <svg className="w-16 h-16 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        )}
        
        {host?.metadata?.superhost && (
          <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-semibold shadow-sm">
            ⭐ Superhost
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-secondary-900 line-clamp-1">
            {metadata.name}
          </h3>
        </div>
        
        <p className="text-secondary-500 text-sm mb-2">{metadata.location}</p>
        
        <div className="flex items-center gap-3 text-sm text-secondary-600 mb-3">
          {metadata.bedrooms && (
            <span>{metadata.bedrooms} bed{metadata.bedrooms !== 1 ? 's' : ''}</span>
          )}
          {metadata.bathrooms && (
            <span>· {metadata.bathrooms} bath{metadata.bathrooms !== 1 ? 's' : ''}</span>
          )}
        </div>
        
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-secondary-900">
            ${metadata.price_per_night}
          </span>
          <span className="text-secondary-500 text-sm">/ night</span>
        </div>
      </div>
    </Link>
  )
}