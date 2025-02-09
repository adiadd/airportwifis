export interface Airport {
  id: string;
  name: string;
  code: string;
  slug: string;
  averageRating: number;
  submissionCount: number;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  country?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Submission {
  id: string;
  airportId: string;
  userId?: string;
  downloadSpeed: number;
  uploadSpeed: number;
  rating: number;
  comment?: string;
  imageUrl?: string;
  ipAddress?: string;
  userAgent?: string;
  networkType: "free" | "paid" | "unknown";
  status: "pending" | "approved" | "rejected";
  upvotes: number;
  downvotes: number;
  createdAt: string;
  updatedAt: string;
}

export const airports: Airport[] = [
  {
    id: "1",
    name: "John F. Kennedy International Airport",
    code: "JFK",
    slug: "john-f-kennedy-international-airport",
    averageRating: 3.7,
    submissionCount: 42,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Los Angeles International Airport",
    code: "LAX",
    slug: "los-angeles-international-airport",
    averageRating: 4.1,
    submissionCount: 56,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "3",
    name: "O'Hare International Airport",
    code: "ORD",
    slug: "o-hare-international-airport",
    averageRating: 3.9,
    submissionCount: 38,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "4",
    name: "Heathrow Airport",
    code: "LHR",
    slug: "heathrow-airport",
    averageRating: 4.3,
    submissionCount: 61,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
  {
    id: "5",
    name: "Tokyo Haneda Airport",
    code: "HND",
    slug: "tokyo-haneda-airport",
    averageRating: 4.5,
    submissionCount: 49,
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-01T00:00:00Z",
  },
];

export const submissions: Submission[] = [
  {
    id: "1",
    airportId: "1",
    userId: "user1",
    downloadSpeed: 50.5,
    uploadSpeed: 20.2,
    rating: 4,
    comment: "Pretty good WiFi for an airport!",
    imageUrl: "/placeholder.svg",
    ipAddress: "192.168.1.1",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    networkType: "paid",
    status: "approved",
    upvotes: 10,
    downvotes: 2,
    createdAt: "2023-06-01T12:00:00Z",
    updatedAt: "2023-06-01T12:00:00Z",
  },
  {
    id: "2",
    airportId: "1",
    userId: "user2",
    downloadSpeed: 30.1,
    uploadSpeed: 15.5,
    rating: 3,
    comment: "Average speed, but stable connection",
    ipAddress: "192.168.1.2",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    networkType: "free",
    status: "pending",
    upvotes: 5,
    downvotes: 1,
    createdAt: "2023-06-02T14:30:00Z",
    updatedAt: "2023-06-02T14:30:00Z",
  },
  {
    id: "3",
    airportId: "2",
    userId: "user3",
    downloadSpeed: 75.0,
    uploadSpeed: 40.0,
    rating: 5,
    comment: "Excellent WiFi! Fast and reliable.",
    imageUrl: "/placeholder.svg",
    ipAddress: "192.168.1.3",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
    networkType: "paid",
    status: "approved",
    upvotes: 20,
    downvotes: 0,
    createdAt: "2023-06-03T09:15:00Z",
    updatedAt: "2023-06-03T09:15:00Z",
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
