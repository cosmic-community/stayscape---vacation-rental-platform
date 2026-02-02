import Link from 'next/link'
import { getHosts } from '@/lib/cosmic'

export const metadata = {
  title: 'Our Hosts | StayScape',
  description: 'Meet our trusted hosts who open their homes to travelers from around the world.'
}

export default async function HostsPage() {
  const hosts = await getHosts()
  
  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Meet Our Hosts
          </h1>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Our hosts are passionate about sharing their unique spaces and local knowledge with travelers from around the world.
          </p>
        </div>
        
        {hosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hosts.map((host) => (
              <Link
                key={host.id}
                href={`/hosts/${host.slug}`}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center group"
              >
                {host.metadata?.profile_photo ? (
                  <img
                    src={`${host.metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                    alt={host.metadata.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-secondary-200 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
                
                <h2 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-500 transition-colors mb-1">
                  {host.metadata?.name || host.title}
                </h2>
                
                {host.metadata?.superhost && (
                  <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    ⭐ Superhost
                  </span>
                )}
                
                {host.metadata?.bio && (
                  <p className="text-secondary-600 text-sm line-clamp-3">
                    {host.metadata.bio}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-secondary-100 rounded-xl">
            <svg className="w-16 h-16 text-secondary-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <h3 className="text-xl font-semibold text-secondary-900 mb-2">No Hosts Yet</h3>
            <p className="text-secondary-600">Check back soon to meet our hosts!</p>
          </div>
        )}
      </div>
    </div>
  )
}