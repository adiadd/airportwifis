export interface Airport {
  id: string;
  name: string;
  code: string;
  averageRating: number;
  submissionCount: number;
}

export interface Submission {
  id: string;
  airportId: string;
  downloadSpeed: number;
  uploadSpeed: number;
  rating: number;
  comment?: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
  upvotes: number;
  downvotes: number;
}

export const airports: Airport[] = [
  {
    id: "1",
    name: "John F. Kennedy International Airport",
    code: "JFK",
    averageRating: 3.7,
    submissionCount: 42,
  },
  {
    id: "2",
    name: "Los Angeles International Airport",
    code: "LAX",
    averageRating: 4.1,
    submissionCount: 56,
  },
  {
    id: "3",
    name: "O'Hare International Airport",
    code: "ORD",
    averageRating: 3.9,
    submissionCount: 38,
  },
  {
    id: "4",
    name: "Heathrow Airport",
    code: "LHR",
    averageRating: 4.3,
    submissionCount: 61,
  },
  {
    id: "5",
    name: "Tokyo Haneda Airport",
    code: "HND",
    averageRating: 4.5,
    submissionCount: 49,
  },
];

export const submissions: Submission[] = [
  {
    id: "1",
    airportId: "1",
    downloadSpeed: 50.5,
    uploadSpeed: 20.2,
    rating: 4,
    comment: "Pretty good WiFi for an airport!",
    createdAt: "2023-06-01T12:00:00Z",
    updatedAt: "2023-06-01T12:00:00Z",
    upvotes: 10,
    downvotes: 2,
  },
  {
    id: "2",
    airportId: "1",
    downloadSpeed: 30.1,
    uploadSpeed: 15.5,
    rating: 3,
    comment: "Average speed, but stable connection",
    createdAt: "2023-06-02T14:30:00Z",
    updatedAt: "2023-06-02T14:30:00Z",
    upvotes: 5,
    downvotes: 1,
  },
  {
    id: "3",
    airportId: "2",
    downloadSpeed: 75.0,
    uploadSpeed: 40.0,
    rating: 5,
    comment: "Excellent WiFi! Fast and reliable.",
    imageUrl: "/placeholder.svg",
    createdAt: "2023-06-03T09:15:00Z",
    updatedAt: "2023-06-03T09:15:00Z",
    upvotes: 20,
    downvotes: 0,
  },
  // Add more mock submissions here...
];

// Helper function to filter airports based on search query
export function searchAirports(query: string): Airport[] {
  if (!query.trim()) {
    return airports;
  }

  const lowercaseQuery = query.toLowerCase().trim();
  const queryWords = lowercaseQuery.split(/\s+/);

  return airports.filter((airport) => {
    const airportName = airport.name.toLowerCase();
    const airportCode = airport.code.toLowerCase();

    // Check if all query words are found in either the name or code
    return queryWords.every(
      (word) =>
        airportName.includes(word) ||
        airportCode.includes(word) ||
        // Add fuzzy matching for airport codes (e.g., "jf" matches "JFK")
        (word.length >= 2 && airport.code.toLowerCase().includes(word)),
    );
  });
}
