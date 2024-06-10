import { revalidateTag } from 'next/cache'
 
export async function GET() {
    
    revalidateTag('collection');
 
    return new Response("Your fetch cache has been cleared");
}