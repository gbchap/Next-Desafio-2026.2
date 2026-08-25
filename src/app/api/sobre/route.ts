import { NextResponse } from 'next/server';
import { getSobreNos } from '@/lib/sobre';

export async function GET() {
  return NextResponse.json(getSobreNos());
}