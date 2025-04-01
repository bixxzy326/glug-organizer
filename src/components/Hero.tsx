
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            <span className="block text-blue-600">Connect. Collaborate.</span>
            <span className="block text-green-600">Contribute.</span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500 sm:max-w-3xl">
            Join a thriving community of open source enthusiasts. Attend local meetups,
            connect with fellow developers, and contribute to exciting projects.
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:space-x-4">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-medium"
              >
                <Link to="/events">
                  Find Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white text-blue-600 border-blue-600 px-8 py-3 rounded-md text-base font-medium"
              >
                <Link to="/glugs">
                  Join a GLUG <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
