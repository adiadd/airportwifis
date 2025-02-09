import { ThumbsDown, ThumbsUp, Wifi } from "lucide-react";
import type { FC } from "react";
import { Badge } from "~/_components/ui/badge";
import { Button } from "~/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/_components/ui/card";

interface SubmissionCardProps {
  id: string;
  downloadSpeed: number;
  uploadSpeed: number;
  rating: number;
  comment?: string;
  imageUrl?: string;
  networkType: "free" | "paid" | "unknown";
  status: "pending" | "approved" | "rejected";
  upvotes: number;
  downvotes: number;
  createdAt: string;
  updatedAt: string;
}

const SubmissionCard: FC<SubmissionCardProps> = ({
  downloadSpeed,
  uploadSpeed,
  rating,
  comment,
  imageUrl,
  networkType,
  status,
  upvotes,
  downvotes,
  createdAt,
  updatedAt,
}) => {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
  };

  const networkTypeColors = {
    free: "bg-green-100 text-green-800",
    paid: "bg-blue-100 text-blue-800",
    unknown: "bg-gray-100 text-gray-800",
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Card className="border-2 border-teal-200 shadow-lg transition-shadow hover:shadow-xl">
      <CardHeader className="bg-gradient-to-r from-teal-100 to-indigo-100">
        <CardTitle className="flex items-center justify-between text-teal-700">
          <div className="flex items-center">
            <Wifi className="mr-2 h-5 w-5 text-indigo-500" />
            WiFi Submission
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className={networkTypeColors[networkType]}>
              {networkType.toUpperCase()}
            </Badge>
            <Badge variant="outline" className={statusColors[status]}>
              {status.toUpperCase()}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-2">
          <p className="text-lg">
            <span className="font-semibold text-teal-600">Download:</span>{" "}
            {downloadSpeed} Mbps
          </p>
          <p className="text-lg">
            <span className="font-semibold text-indigo-600">Upload:</span>{" "}
            {uploadSpeed} Mbps
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700">Rating:</span>{" "}
            {rating}/5
          </p>
          {comment && (
            <p className="italic text-gray-600">&ldquo;{comment}&rdquo;</p>
          )}
          {imageUrl && (
            // TODO: Replace with next/image in a future update
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl ?? "/placeholder.svg"}
              alt="Proof"
              className="mt-2 rounded-md"
            />
          )}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-green-600 hover:bg-green-50 hover:text-green-700"
                >
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  {upvotes}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:bg-red-50 hover:text-red-700"
                >
                  <ThumbsDown className="mr-2 h-4 w-4" />
                  {downvotes}
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-sm text-gray-500">
              <p>Created: {formatDate(createdAt)}</p>
              {createdAt !== updatedAt && (
                <p>Updated: {formatDate(updatedAt)}</p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubmissionCard;
