
import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  attendees: number;
  maxAttendees?: number;
  tags: string[];
  glugName: string;
  isRegistered?: boolean;
}

const EventCard = ({
  id,
  title,
  date,
  location,
  attendees,
  maxAttendees,
  tags,
  glugName,
  isRegistered = false,
}: EventCardProps) => {
  const isFull = maxAttendees !== undefined && attendees >= maxAttendees;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
            <p className="text-sm text-gray-500">By {glugName}</p>
          </div>
          {tags.length > 0 && (
            <Badge variant="outline" className="bg-white">
              {tags[0]}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center text-sm">
            <Calendar size={16} className="mr-2 text-blue-600" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin size={16} className="mr-2 text-blue-600" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users size={16} className="mr-2 text-blue-600" />
            <span>
              {attendees} {maxAttendees ? `/ ${maxAttendees}` : ""} attendees
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 bg-gray-50 border-t flex justify-between">
        <div className="flex gap-1">
          {tags.slice(1, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="mr-1">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary">+{tags.length - 3}</Badge>
          )}
        </div>
        <Button
          disabled={isFull && !isRegistered}
          variant={isRegistered ? "outline" : "default"}
          className={isRegistered ? "border-green-600 text-green-600" : ""}
        >
          {isRegistered 
            ? "Registered" 
            : isFull 
              ? "Full" 
              : "Register"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
