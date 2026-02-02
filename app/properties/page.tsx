import { getProperties } from '@/lib/cosmic'
import PropertyCard from '@/components/PropertyCard'

export const metadata = {
  title: 'Properties | StayScape',
  description: 'Browse our collection of unique vacation rentals from trusted hosts around the world.'
}

export default async function PropertiesPage() {
  const properties = await getProperties()
  
  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-2">
            All Properties
          </h1>
          <p className="text-secondary-600">
            {properties.length} vacation rental{properties.length !== 1 ? 's' : ''} available
          </p>
        </div>
        
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-secondary-100 rounded-xl">
            <svg className="w-16 h-16 text-secondary-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">No Properties Yet</h3>
            <p className="text-secondary-600">Check back soon for new listings!</p>
          </div>
        )}
      </div>
    </div>
  )
}