import { ThumbsDown, ThumbsUp, Wifi } from "lucide-react";
import type { FC } from "react";
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
  upvotes: number;
  downvotes: number;
}

const SubmissionCard: FC<SubmissionCardProps> = ({
  downloadSpeed,
  uploadSpeed,
  rating,
  comment,
  imageUrl,
  upvotes,
  downvotes,
}) => {
  return (
    <Card className="border-2 border-teal-200 shadow-lg transition-shadow hover:shadow-xl">
      <CardHeader className="bg-gradient-to-r from-teal-100 to-indigo-100">
        <CardTitle className="flex items-center text-teal-700">
          <Wifi className="mr-2 h-5 w-5 text-indigo-500" />
          WiFi Submission
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
          <div className="mt-4 flex space-x-2">
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
      </CardContent>
    </Card>
  );
};

export default SubmissionCard;
