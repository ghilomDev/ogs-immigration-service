// OG Image Component for dynamic social sharing images
// This will be used to generate the OpenGraph preview images

import { ImageResponse } from 'next/og'
import { siteInfo } from '@/lib/seo'
 
export const runtime = 'edge'
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Dynamic parameters from the URL
    const title = searchParams.get('title') || siteInfo.title
    const description = searchParams.get('description') || siteInfo.description
    const type = searchParams.get('type') || 'website'
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundImage: 'linear-gradient(to bottom right, #5046E5, #8449D8)',
            padding: '60px',
          }}
        >
          <div
            style={{
              display: 'flex',
              color: 'white',
              fontSize: 48,
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            {siteInfo.name}
          </div>
          <div
            style={{
              color: 'white',
              fontSize: 38,
              fontWeight: 'bold',
              marginBottom: 30,
              maxWidth: '80%',
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: 'white',
              fontSize: 24,
              opacity: 0.8,
              maxWidth: '80%',
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              left: 60,
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {siteInfo.address.city}, {siteInfo.address.state} | {siteInfo.address.phone}
          </div>
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              right: 60,
              display: 'flex',
              fontSize: 24,
              border: '2px solid white',
              borderRadius: '10px',
              padding: '8px 20px',
              color: 'white',
            }}
          >
            {type === 'service' ? 'Services' : type === 'contact' ? 'Contact Us' : 'Immigration Experts'}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.log(`${e}`)
    return new Response('Failed to generate the image', { status: 500 })
  }
}
