import { type NextRequest, NextResponse } from "next/server";
import { type Submission, submissions } from "~/lib/mockData";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const airportId = searchParams.get("airportId");

  if (!airportId) {
    return NextResponse.json(
      { error: "Airport ID is required" },
      { status: 400 },
    );
  }

  const filteredSubmissions = submissions.filter(
    (sub) => sub.airportId === airportId,
  );
  return NextResponse.json(filteredSubmissions);
}

interface SubmissionData {
  airportId: string;
  downloadSpeed: number;
  uploadSpeed: number;
  rating: number;
  comment?: string;
  imageUrl?: string;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as SubmissionData;

  const { airportId, downloadSpeed, uploadSpeed, rating, comment, imageUrl } =
    body;

  if (!airportId || !downloadSpeed || !uploadSpeed || !rating) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const newSubmission: Submission = {
    id: (submissions.length + 1).toString(),
    airportId,
    downloadSpeed,
    uploadSpeed,
    rating,
    comment,
    imageUrl,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    upvotes: 0,
    downvotes: 0,
  };

  submissions.push(newSubmission);

  return NextResponse.json(newSubmission);
}
