"use client";

import { type FC, useState } from "react";
import AirportCard from "~/_components/AirportCard";
import Layout from "~/_components/Layout";
import { Search } from "~/_components/Search";
import { airports, searchAirports } from "~/lib/mockData";

const HomePage: FC = () => {
  const [filteredAirports, setFilteredAirports] = useState(airports);

  const handleSearch = (query: string) => {
    setFilteredAirports(searchAirports(query));
  };

  return (
    <Layout>
      <div className="space-y-10">
        <div className="space-y-2 text-center">
          <h1 className="bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-4xl font-bold text-transparent">
            AirportWiFis
          </h1>
          <p className="text-xl text-muted-foreground">
            Find and rate airport WiFi around the world
          </p>
        </div>
        <Search onSearch={handleSearch} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAirports.map((airport) => (
            <AirportCard key={airport.id} {...airport} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
