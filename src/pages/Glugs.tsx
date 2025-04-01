
import { useState } from "react";
import Navbar from "@/components/Navbar";
import GlugCard from "@/components/GlugCard";
import { glugs } from "@/lib/mockData";
import { Users, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Glugs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredGlugs = glugs.filter((glug) => {
    const matchesSearch = glug.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          glug.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === "all") return matchesSearch;
    if (filter === "member") return matchesSearch && glug.isMember;
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-2">
            <Users size={28} className="mr-2" />
            <h1 className="text-3xl font-bold">GNU/Linux User Groups</h1>
          </div>
          <p className="text-center text-green-100 max-w-2xl mx-auto">
            Find and join local FOSS communities in your area. Connect with like-minded enthusiasts and grow together!
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
              placeholder="Search for GLUGs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter GLUGs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All GLUGs</SelectItem>
                <SelectItem value="member">My GLUGs</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Filter size={18} className="mr-2" />
            Apply
          </Button>
        </div>
      </div>
      
      {/* GLUGs List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredGlugs.length} {filteredGlugs.length === 1 ? "GLUG" : "GLUGs"} Found
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGlugs.map((glug) => (
            <GlugCard key={glug.id} {...glug} />
          ))}
        </div>
        
        {filteredGlugs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No GLUGs found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Create GLUG CTA */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Don't see a GLUG in your area?</h3>
          <p className="text-gray-600 mb-6">
            Start your own GNU/Linux User Group and help grow the FOSS community in your location!
          </p>
          <Button className="bg-green-600 hover:bg-green-700">
            Create a New GLUG
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Glugs;
