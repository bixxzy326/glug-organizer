
import { useState } from "react";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/mockData";
import { Calendar, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.glugName.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    if (filter === "registered") return matchesSearch && event.isRegistered;
    if (filter === "upcoming") return matchesSearch;
    if (filter === "full") return matchesSearch && event.maxAttendees && event.attendees >= event.maxAttendees;
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-2">
            <Calendar size={28} className="mr-2" />
            <h1 className="text-3xl font-bold">Events & Meetups</h1>
          </div>
          <p className="text-center text-blue-100 max-w-2xl mx-auto">
            Discover upcoming FOSS community events, workshops, and conferences. Register to secure your spot!
          </p>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-lg shadow p-4 mb-8 flex flex-col md:flex-row items-stretch md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              className="pl-10"
              placeholder="Search for events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter events" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="registered">Registered</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="full">Full</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Filter size={18} className="mr-2" />
            Apply
          </Button>
        </div>
      </div>
      
      {/* Events List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"} Found
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No events found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
