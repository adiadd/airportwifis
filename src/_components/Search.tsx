"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { Input } from "~/_components/ui/input";

interface SearchProps {
  onSearch: (query: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="relative mx-auto w-full max-w-2xl">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 transform text-teal-500" />
      <Input
        type="text"
        placeholder="Search airports..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full border-2 border-teal-200 py-2 pl-10 pr-4 shadow-md focus:border-teal-400"
      />
    </form>
  );
}
