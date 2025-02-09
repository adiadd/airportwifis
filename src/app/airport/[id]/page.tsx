"use client";

import { Wifi } from "lucide-react";
import { notFound } from "next/navigation";
import { type FC, use, useState } from "react";
import Layout from "~/_components/Layout";
import SubmissionCard from "~/_components/SubmissionCard";
import SubmissionForm from "~/_components/SubmissionForm";
import { Button } from "~/_components/ui/button";
import { airports, submissions } from "~/lib/mockData";

interface AirportPageProps {
  params: Promise<{ id: string }>;
}

const AirportPage: FC<AirportPageProps> = ({ params }) => {
  const { id } = use(params);
  const [showForm, setShowForm] = useState(false);

  const airport = airports.find((a) => a.id === id);
  const airportSubmissions = submissions.filter((s) => s.airportId === id);

  if (!airport) {
    notFound();
  }

  const handleSubmit = async (data: {
    downloadSpeed: number;
    uploadSpeed: number;
    rating: number;
    comment?: string;
    airportId: string;
  }) => {
    // In a real app, this would call the API to create a new submission
    console.log("New submission:", data);
    setShowForm(false);
  };

  return (
    <Layout>
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-teal-700">
            {airport.name}{" "}
            <span className="text-indigo-600">({airport.code})</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Average Rating:{" "}
            <span className="font-medium text-teal-600">
              {airport.averageRating.toFixed(1)}
            </span>
            <span className="mx-2">•</span>
            <span className="font-medium text-indigo-600">
              {airport.submissionCount}
            </span>{" "}
            submissions
          </p>
        </div>

        {!showForm && (
          <Button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600"
          >
            <Wifi className="mr-2 h-4 w-4" /> Submit New WiFi Speed
          </Button>
        )}

        {showForm && (
          <div className="rounded-lg border-2 border-teal-200 bg-white/50 p-6 shadow-lg backdrop-blur-sm">
            <h3 className="mb-4 text-2xl font-semibold text-teal-700">
              Submit New WiFi Speed
            </h3>
            <SubmissionForm airportId={airport.id} onSubmit={handleSubmit} />
          </div>
        )}

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-teal-700">
            Recent WiFi Submissions
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {airportSubmissions.map((submission) => (
              <SubmissionCard key={submission.id} {...submission} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AirportPage;
