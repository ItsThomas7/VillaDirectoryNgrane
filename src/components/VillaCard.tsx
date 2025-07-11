import Image from 'next/image';
import Link from 'next/link';
import { FaBed, FaBath, FaUsers } from 'react-icons/fa';

interface Villa {
  id: string | number;
  name: string;
  area: string;
  description: string;
  startingPricePerNight: number;
  media: { url: string; isMain: boolean }[];
}

interface VillaCardProps {
  villa: Villa;
}

export default function VillaCard({ villa }: VillaCardProps) {
  const mainImage = villa.media.find((img) => img.isMain)?.url || villa.media[0]?.url;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 overflow-hidden">
      <Link href={`/villa/${villa.id}`} className="block">
        <div className="relative w-full h-48">
          {mainImage && (
            <Image
              src={mainImage}
              alt={villa.name}
              fill
              className="object-cover"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{villa.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{villa.area}</p>

          <div className="flex items-center text-gray-600 text-xs space-x-4 mb-2">
            <span className="flex items-center gap-1"><FaUsers className="text-gray-400" />6</span>
            <span className="flex items-center gap-1"><FaBed className="text-gray-400" />3</span>
            <span className="flex items-center gap-1"><FaBath className="text-gray-400" />2</span>
          </div>

          <p className="text-xs text-gray-500">Starting at</p>
          <p className="text-lg font-semibold text-gray-900">€{villa.startingPricePerNight} <span className="text-sm font-normal text-gray-500">/ night</span></p>
        </div>
      </Link>
    </div>
  );
}
