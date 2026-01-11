interface Property {
  title: string;
  description: string;
  price: number;
}

export default function PropertyDetail({ property }: { property: Property }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p>{property.description}</p>
      <p className="font-semibold">${property.price}</p>
    </div>
  );
}
