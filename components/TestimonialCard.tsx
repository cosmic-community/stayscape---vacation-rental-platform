import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { metadata } = testimonial
  const ratingValue = parseInt(metadata.rating?.key || '5', 10)
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-card">
      <div className="flex items-center gap-4 mb-4">
        {metadata.guest_photo ? (
          <img
            src={`${metadata.guest_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
            alt={metadata.guest_name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-secondary-200 flex items-center justify-center">
            <svg className="w-6 h-6 text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
        
        <div>
          <h4 className="font-semibold text-secondary-900">{metadata.guest_name}</h4>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < ratingValue ? 'text-yellow-400' : 'text-secondary-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-secondary-600 leading-relaxed">{metadata.review}</p>
    </div>
  )
}