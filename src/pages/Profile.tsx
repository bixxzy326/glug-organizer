
import Navbar from "@/components/Navbar";
import { currentUser } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Check, MapPin, UserCircle } from "lucide-react";
import EventCard from "@/components/EventCard";
import GlugCard from "@/components/GlugCard";
import { events, glugs } from "@/lib/mockData";

const Profile = () => {
  const registeredEvents = events.filter(event => 
    currentUser.registeredEvents.includes(event.id)
  );
  
  const memberGlugs = glugs.filter(glug => 
    currentUser.memberGlugs.includes(glug.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white text-purple-600 rounded-full p-2 mr-4">
                <UserCircle size={64} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{currentUser.name}</h1>
                <p className="text-purple-100">{currentUser.email}</p>
                <p className="text-sm text-purple-200">Member since {currentUser.joinDate}</p>
              </div>
            </div>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
      
      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Bio */}
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold">About</h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{currentUser.bio}</p>
              </CardContent>
            </Card>
            
            {/* Skills */}
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold">Skills</h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {currentUser.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Stats */}
            <Card>
              <CardHeader className="pb-2">
                <h2 className="text-xl font-semibold">Activity</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Events Attended</span>
                    <span className="font-medium">{currentUser.registeredEvents.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GLUGs Joined</span>
                    <span className="font-medium">{currentUser.memberGlugs.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Contributions</span>
                    <span className="font-medium">{currentUser.contributions.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="events">
              <TabsList className="mb-6">
                <TabsTrigger value="events">My Events</TabsTrigger>
                <TabsTrigger value="glugs">My GLUGs</TabsTrigger>
                <TabsTrigger value="contributions">Contributions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="events" className="space-y-6">
                <h2 className="text-xl font-semibold">Registered Events</h2>
                {registeredEvents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {registeredEvents.map((event) => (
                      <EventCard key={event.id} {...event} isRegistered={true} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-8 text-center">
                      <h3 className="text-lg font-medium mb-2">No registered events</h3>
                      <p className="text-gray-500 mb-4">You haven't registered for any events yet.</p>
                      <Button asChild>
                        <a href="/events">Browse Events</a>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="glugs">
                <h2 className="text-xl font-semibold mb-6">My GLUGs</h2>
                {memberGlugs.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {memberGlugs.map((glug) => (
                      <GlugCard key={glug.id} {...glug} isMember={true} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-8 text-center">
                      <h3 className="text-lg font-medium mb-2">Not a member of any GLUGs</h3>
                      <p className="text-gray-500 mb-4">Join a GNU/Linux User Group to connect with the community.</p>
                      <Button asChild>
                        <a href="/glugs">Browse GLUGs</a>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="contributions">
                <h2 className="text-xl font-semibold mb-6">My Contributions</h2>
                {currentUser.contributions.length > 0 ? (
                  <div className="space-y-4">
                    {currentUser.contributions.map((contribution, index) => (
                      <Card key={index}>
                        <CardContent className="py-4">
                          <div className="flex items-start">
                            <div className="mr-4 mt-1">
                              <Check className="text-green-500" size={20} />
                            </div>
                            <div>
                              <h3 className="text-lg font-medium">{contribution.project}</h3>
                              <p className="text-gray-600">{contribution.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="py-8 text-center">
                      <h3 className="text-lg font-medium mb-2">No contributions yet</h3>
                      <p className="text-gray-500 mb-4">Start contributing to open source projects!</p>
                      <Button>Get Started</Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
