import { echo } from '@bug/utility';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  console.log(await echo(req.url));
  return res;
}
