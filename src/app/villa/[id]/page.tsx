'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import villas from '@/data/villas.json';
import Image from 'next/image';
import Link from 'next/link';
import InquiryForm from '@/components/InquiryForm';

export default function VillaDetailPage() {
  const params = useParams();
  const id = params?.id?.toString() ?? '';

  const villa = villas.find((v) => v.id.toString() === id);

  if (!villa) return notFound();

  const [mainImage, setMainImage] = useState(villa.media[0]?.url || '/placeholder.jpg');

  return (
    <main className="bg-white text-gray-900">

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        <Image
          src={mainImage}
          alt={villa.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{villa.name}</h1>
          <p className="text-lg md:text-xl">{villa.area}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Gallery and Description */}
        <div className="lg:col-span-2">

          <div className="mb-6">
            <Image
              src={mainImage}
              alt={villa.name}
              width={800}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="flex gap-2 mb-6 overflow-x-auto">
            {villa.media.map((img, idx) => (
              <Image
                key={idx}
                src={img.url}
                alt={`${villa.name} image ${idx + 1}`}
                width={150}
                height={100}
                className="rounded-lg object-cover cursor-pointer"
                onClick={() => setMainImage(img.url)}
              />
            ))}
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {villa.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-6 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
            <div>👥 Max Guests: {villa.maxOccupancy}</div>
            <div>🛏 Bedrooms: {villa.numberOfBedrooms}</div>
            <div>🛁 Bathrooms: {villa.numberOfBathrooms}</div>
            <div>⏰ Check-in: {villa.checkInAfter || '15:00'}</div>
            <div>⏰ Check-out: {villa.checkoutBefore || '10:00'}</div>
          </div>

          <h2 className="font-semibold text-lg mb-2">Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-gray-700 mb-10">
            {villa.amenities.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <h2 className="font-semibold text-lg mb-2">Location</h2>
          <div className="rounded-lg overflow-hidden border border-gray-200 mb-10">
            <iframe
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps?q=${villa.geo.lat},${villa.geo.lng}&hl=es&z=14&output=embed`}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* Inquiry Form */}
        <div className="lg:col-span-1">
          <div className="border border-gray-200 rounded-lg p-6 mb-8 shadow-md">
            <h3 className="font-semibold text-lg mb-4">Inquiry Form</h3>
            <InquiryForm />
          </div>

          <p className="text-gray-600 text-sm mt-4">
            From <span className="font-semibold text-black">€{villa.startingPricePerNight}</span> per night
          </p>

          <div className="mt-6">
            <Link href="/" className="text-blue-600 hover:underline text-sm">
              ← Back to Villas
            </Link>
          </div>
        </div>

      </div>

    </main>
  );
}
