
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import GlugCard from "@/components/GlugCard";
import { events, glugs } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Get the 3 most recent events
  const featuredEvents = events.slice(0, 3);
  // Get the 3 largest GLUGs by member count
  const featuredGlugs = [...glugs]
    .sort((a, b) => b.memberCount - a.memberCount)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />

      {/* Featured Events Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          <Button asChild variant="ghost" className="text-blue-600 flex items-center">
            <Link to="/events">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>

      {/* Featured GLUGs Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular GLUGs</h2>
          <Button asChild variant="ghost" className="text-green-600 flex items-center">
            <Link to="/glugs">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGlugs.map((glug) => (
            <GlugCard key={glug.id} {...glug} />
          ))}
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Growing Community</h2>
            <p className="mt-4 text-blue-100">Join thousands of open source enthusiasts around the world</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-blue-100">Members</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-blue-100">Active GLUGs</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">120+</p>
              <p className="text-blue-100">Events This Year</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">2,000+</p>
              <p className="text-blue-100">Contributions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to join our community?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with like-minded developers, contribute to open source projects,
          and be part of the growing FOSS movement.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
          Sign Up Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FOSS Community</h3>
              <p className="text-gray-400">
                Building a stronger open source community through connection, collaboration, and contribution.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/events" className="text-gray-400 hover:text-white">Events</Link></li>
                <li><Link to="/glugs" className="text-gray-400 hover:text-white">GLUGs</Link></li>
                <li><Link to="/profile" className="text-gray-400 hover:text-white">My Profile</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our newsletter and social media.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Discord</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FOSS Community. Open Source, forever.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
