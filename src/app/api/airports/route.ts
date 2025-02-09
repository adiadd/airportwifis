import { NextResponse } from "next/server"
import { airports } from "~/lib/mockData"

export async function GET() {
  return NextResponse.json(airports)
}

