# StayScape - Vacation Rental Platform

![StayScape](https://imgix.cosmicjs.com/676f8050-006a-11f1-a746-2b7bd6c613da-photo-1499793983690-e29da59ef1c2-1770059242634.jpg?w=1200&h=400&fit=crop&auto=format,compress)

A stunning Airbnb-style vacation rental platform built with Next.js 16 and Cosmic. Browse beautiful properties, meet trusted hosts, and read authentic guest reviews.

## Features

- 🏠 **Property Listings** - Browse vacation rentals with detailed amenities, pricing, and photo galleries
- 👤 **Host Profiles** - Dedicated host pages with Superhost badges and property portfolios
- ⭐ **Guest Testimonials** - Authentic reviews with star ratings linked to properties
- 🖼️ **Image Galleries** - Interactive property photo galleries with modal viewing
- 🔍 **Location Search** - Find properties by destination
- 📱 **Fully Responsive** - Beautiful on all devices
- ⚡ **Server-Side Rendering** - Fast, SEO-optimized pages

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=6980f58c5b3edb4a7d046f34&clone_repository=6980f8165b3edb4a7d046f4e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete content model for: An airbnb clone with properties, hosts, and testimonials
>
> Use the install_content_model action to create ALL object types AND demo content in one step. Include:
> 1. All necessary object types with appropriate metafields
> 2. 2-3 demo objects for each type with realistic content
> 3. Unsplash image URLs for thumbnails and file metafields (use real URLs like https://images.unsplash.com/photo-...)
>
> Remember to create types that are referenced by others FIRST (e.g., categories and authors before blog posts)."

### Code Generation Prompt

> "An airbnb clone with properties, hosts, and testimonials"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Cosmic](https://www.cosmicjs.com/) - Headless CMS for content management
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React](https://react.dev/) - UI component library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with the vacation rental content model

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stayscape
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

5. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Cosmic SDK Examples

### Fetching Properties with Host Data

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: properties } = await cosmic.objects
  .find({ type: 'properties' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include connected host data
```

### Fetching a Single Property

```typescript
const { object: property } = await cosmic.objects
  .findOne({
    type: 'properties',
    slug: 'oceanfront-villa-malibu'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials for a Property

```typescript
const { objects: testimonials } = await cosmic.objects
  .find({
    type: 'testimonials',
    'metadata.property': propertyId
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This project uses three content types:

### Properties
- Name, description, location
- Price per night, bedrooms, bathrooms
- Amenities (checkbox selection)
- Photo gallery
- Connected host

### Hosts
- Name and bio
- Profile photo
- Superhost status
- Contact email

### Testimonials
- Guest name and photo
- Star rating (1-5)
- Review text
- Connected property

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables
4. Deploy!

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push your code to GitHub
2. Connect repository in Netlify
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy!

## License

MIT License - feel free to use this project for your own vacation rental platform!

<!-- README_END -->