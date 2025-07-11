'use client';

import { useState } from 'react';
import Image from 'next/image';
import villas from '@/data/villas.json';
import VillaCard from '@/components/VillaCard';
import { parseISO, isWithinInterval } from 'date-fns';

export default function HomePage() {
  const [area, setArea] = useState('');
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({
    from: undefined,
    to: undefined,
  });

  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArea(e.target.value);
  };

  const handleDateChange = (field: 'from' | 'to', value: string) => {
    setDateRange((prev) => ({
      ...prev,
      [field]: value ? new Date(value) : undefined,
    }));
  };

  const filteredVillas = villas.filter((villa) => {
    const matchesArea = area ? villa.area === area : true;

    const matchesDate = (() => {
      if (!dateRange.from || !dateRange.to) return true;

      const unavailableDates = villa.datesUnavailable.map((d: string) => parseISO(d));

      return !unavailableDates.some((unavailableDate) =>
        isWithinInterval(unavailableDate, {
          start: dateRange.from!,
          end: dateRange.to!,
        })
      );
    })();

    return matchesArea && matchesDate;
  });

  return (
    <main className="bg-white min-h-screen">

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="/banner1.png"
          alt="Luxury Villas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Villas</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Lorem ipsum dolor sit amet consectetur eu turpis.
          </p>
        </div>
      </div>

      {/* Search Filters */}
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow -mt-12 relative z-10 flex flex-col md:flex-row items-center gap-4">
        <input
          type="date"
          className="border border-gray-300 rounded-lg p-3 w-full md:w-auto bg-gray-100 text-gray-800 placeholder-gray-500"
          value={dateRange.from ? dateRange.from.toISOString().split('T')[0] : ''}
          onChange={(e) => handleDateChange('from', e.target.value)}
        />
        <input
          type="date"
          className="border border-gray-300 rounded-lg p-3 w-full md:w-auto bg-gray-100 text-gray-800 placeholder-gray-500"
          value={dateRange.to ? dateRange.to.toISOString().split('T')[0] : ''}
          onChange={(e) => handleDateChange('to', e.target.value)}
        />
        <select
          value={area}
          onChange={handleAreaChange}
          className="border border-gray-300 rounded-lg p-3 w-full md:w-auto bg-gray-100 text-gray-800"
        >
          <option value="">All Areas</option>
          <option value="Palermo">Palermo</option>
          <option value="Trapani">Trapani</option>
          <option value="Pantelleria">Pantelleria</option>
        </select>
        <button
          className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 w-full md:w-auto"
        >
          Check Availability
        </button>
      </div>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto text-center my-10 px-4 text-gray-600 leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur. Nulla fringilla ultricies morbi consectetur tempus.
          Convallis dolor dui euismod consequat et blandit sit. Commodo nunc at posuere scelerisque proin luctus.
        </p>
      </div>

      {/* Villa Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVillas.map((villa) => (
          <VillaCard key={villa.id} villa={villa} />
        ))}
      </div>

    </main>
  );
}
