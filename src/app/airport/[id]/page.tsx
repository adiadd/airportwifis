"use client";

import { ArrowLeft, Wifi } from "lucide-react";
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
        <div className="flex flex-col gap-6 border-b border-teal-100/50 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="self-start text-teal-700 hover:bg-teal-50/50 sm:self-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="flex flex-col items-center text-center">
            <h1 className="text-xl font-bold text-teal-800 sm:text-2xl">
              {airport.name}{" "}
              <span className="text-indigo-700">({airport.code})</span>
            </h1>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Average Rating:{" "}
              <span className="font-medium text-teal-700">
                {airport.averageRating.toFixed(1)}
              </span>
              <span className="mx-2 text-teal-200">•</span>
              <span className="font-medium text-indigo-700">
                {airport.submissionCount}
              </span>{" "}
              submissions
            </p>
          </div>

          {!showForm && (
            <Button
              onClick={() => setShowForm(true)}
              className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-700 hover:to-indigo-700 sm:w-auto"
            >
              <Wifi className="mr-2 h-4 w-4" /> Submit New WiFi Speed
            </Button>
          )}
        </div>

        {showForm && (
          <div className="rounded-lg border border-teal-100/30 bg-gradient-to-b from-white/5 to-white/10 p-6 shadow-lg backdrop-blur-sm">
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
