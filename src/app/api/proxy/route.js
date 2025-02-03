
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale');
    
    if (!locale) {
      return new Response('Locale is required', { status: 400 });
    }
  
    const externalApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/services-${locale}`;
  
    try {
      const response = 

        await fetch(externalApiUrl,{ next: { tags: ['services'], revalidate:7600 } })
     
  
      if (!response.ok) {
        return new Response('Failed to fetch data from the external API', { status: 500 });
      }
  
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch  {
      return new Response('Internal Server Error', { status: 500 });
    }
  }
  