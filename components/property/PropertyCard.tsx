interface Property {
  id: string;
  title: string;
  price: number;
  image: string;
  location: string;
}

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <div className="border rounded p-4">
      <img src={property.image} alt={property.title} className="mb-2" />
      <h3 className="font-semibold">{property.title}</h3>
      <p>{property.location}</p>
      <p className="font-bold">${property.price}</p>
    </div>
  );
}
