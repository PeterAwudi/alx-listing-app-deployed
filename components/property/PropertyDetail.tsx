interface Property {
  id: string;
  title: string;
  description: string;
  // Add all other necessary fields
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail = ({ property }: PropertyDetailProps) => {
  return (
    <div>
      <h1 className="text-xl font-bold">{property.title}</h1>
      <p>{property.description}</p>
      {/* Render other property details here */}
    </div>
  );
};

export default PropertyDetail;

