import { revalidateTag } from 'next/cache'

export async function POST(
  req,
 
) {
  // Check for secret to confirm this is a valid request
  const { searchParams } = new URL(req.url);
  const secret = searchParams.get('secret');
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new Response('Invalid token', { status: 401 });
    // return res.status(401).json({ message: 'Invalid token' })
  }
 
  try {
    console.log('Revalidating services')
    revalidateTag('services');  
    return new Response( 'revalidated: true ')
} catch (error) {
    return new Response(`Error revalidating${error.message}`, { status: 500 });

    // return res.status(500).send('Error revalidating')
  }
}