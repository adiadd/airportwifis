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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); // Trigger search on every change
  };

  return (
    <form onSubmit={handleSearch} className="relative mx-auto w-full max-w-2xl">
      <Input
        type="text"
        placeholder="Search airports..."
        value={query}
        onChange={handleChange}
        className="w-full rounded-full border-2 border-teal-200 py-2 pl-10 pr-12 shadow-md focus:border-teal-400"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 transform rounded-full p-1 text-teal-500 hover:bg-teal-50"
      >
        <SearchIcon className="h-5 w-5" />
      </button>
      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform text-teal-500">
        <SearchIcon className="h-5 w-5" />
      </div>
    </form>
  );
}
