import { Plane } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/_components/ui/card";

interface AirportCardProps {
  id: string;
  name: string;
  code: string;
  averageRating: number;
  submissionCount: number;
}

const AirportCard: FC<AirportCardProps> = ({
  id,
  name,
  code,
  averageRating,
  submissionCount,
}) => {
  return (
    <Link href={`/airport/${id}`}>
      <Card className="h-full border-2 border-teal-200 shadow-lg transition-colors hover:bg-teal-50 hover:shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-r from-teal-100 to-indigo-100 pb-2">
          <CardTitle className="text-lg font-bold text-teal-700">
            {code}
          </CardTitle>
          <Plane className="h-6 w-6 text-indigo-500" />
        </CardHeader>
        <CardContent className="pt-4">
          <div className="mb-2 text-xl font-semibold text-gray-800">{name}</div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Average Rating:{" "}
              <span className="font-medium text-teal-600">
                {averageRating.toFixed(1)}
              </span>
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-indigo-600">
                {submissionCount}
              </span>{" "}
              submissions
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AirportCard;
