import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import PropertyDetail from "@/components/property/PropertyDetail";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
}

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await api.get<Property>(`/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found</p>;

  return <PropertyDetail property={property} />;
}
