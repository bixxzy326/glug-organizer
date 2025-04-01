
import { MapPin, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GlugCardProps {
  id: string;
  name: string;
  description: string;
  location: string;
  memberCount: number;
  tags: string[];
  isMember?: boolean;
}

const GlugCard = ({
  id,
  name,
  description,
  location,
  memberCount,
  tags,
  isMember = false,
}: GlugCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="p-4 bg-gradient-to-r from-green-50 to-blue-50 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <Badge variant="outline" className="bg-white">
            GLUG
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <MapPin size={16} className="mr-2 text-green-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users size={16} className="mr-2 text-green-600" />
            <span>{memberCount} members</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-gray-50 border-t flex justify-between">
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="mr-1">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary">+{tags.length - 3}</Badge>
          )}
        </div>
        <Button
          variant={isMember ? "outline" : "default"}
          className={isMember ? "border-green-600 text-green-600" : "bg-green-600 hover:bg-green-700"}
        >
          {isMember ? "Member" : "Join"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GlugCard;
