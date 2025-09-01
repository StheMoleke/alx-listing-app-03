// components/property/PropertyCard.tsx
interface PropertyCardProps {
    property: {
      id: number;
      title: string;
      price: number;
      location: string;
      image: string;
    };
  }
  
  export default function PropertyCard({ property }: PropertyCardProps) {
    return (
      <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{property.title}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-blue-600 font-bold">${property.price}/night</p>
        </div>
      </div>
    );
  }
  