import { NextRequest, NextResponse } from 'next/server';
import { cookies } from "next/headers";

export async function middleware(request) {
  const response1 = fetch('https://stg-qp.cogecomedia.com/static/style/cogeco-stage.domain-custom.style.json', { next: { tags: ['collection'], cache: "force-cache" }});
  const response2 = fetch('https://stg-qp.cogecomedia.com/static/style/cogeco-stage.domain-base.style.json', { next: { tags: ['collection'], cache: "force-cache"} });
  const response3 = fetch('https://stg-qp.cogecomedia.com/static/config/cogeco-stage.host.json', { next: { tags: ['collection'], cache: "force-cache" } });
  const response4 = fetch('https://stg-qp.cogecomedia.com/static/config/cogeco-stage.config.json', { next: { tags: ['collection'], cache: "force-cache" } });
  
  const [result1, result2, result3, result4]  = await Promise.all([response1, response2, response3, response4]);
       
  const [r1, r2, r3, r4] = await Promise.all([
      result1.json(), 
      result2.json(),
      result3.json(), 
      result4.json(), 
    ]);

    console.log(r1,r2,r3,r4);

  return NextResponse.next();
}

export const config = {
  matcher: [   /*
  * Match all request paths except for the ones starting with:
  * - api (API routes)
  * - _next/static (static files)
  * - _next/image (image optimization files)
  * - favicon.ico (favicon file)
  */
 '/((?!api|_next/static|_next/image|favicon.ico).*)',],
};