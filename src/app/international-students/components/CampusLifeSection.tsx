// app/international-students/components/CampusLifeSection.tsx
import {
  Users,
  Palette,
  Trophy,
  Music,
  BookOpen,
  Heart,
  Globe,
  Coffee,
  ArrowRight,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function CampusLifeSection() {
  const clubs = [
    {
      name: "International Student Association",
      description: "Connect with students from around the world",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Cultural Club",
      description: "Celebrate diversity through cultural events",
      icon: <Palette className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Sports Club",
      description: "Participate in various sports activities",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      name: "Music & Arts Club",
      description: "Explore your creative side",
      icon: <Music className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "Debate Club",
      description: "Sharpen your public speaking skills",
      icon: <Users className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "Community Service Club",
      description: "Make a difference in the community",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-400 to-red-600",
    },
  ];

  const facilities = [
    {
      name: "Modern Library",
      description: "Extensive collection of books and digital resources",
      icon: <BookOpen className="w-6 h-6" />,
      stats: "50,000+ Books",
    },
    {
      name: "Student Lounge",
      description: "Comfortable spaces for relaxation and socializing",
      icon: <Coffee className="w-6 h-6" />,
      stats: "Multiple Locations",
    },
    {
      name: "Sports Complex",
      description: "Gym, swimming pool, and sports facilities",
      icon: <Trophy className="w-6 h-6" />,
      stats: "10+ Sports",
    },
    {
      name: "Cafeteria",
      description: "Variety of local and international cuisine",
      icon: <Coffee className="w-6 h-6" />,
      stats: "Multiple Food Courts",
    },
  ];

  const events = [
    {
      title: "International Cultural Festival",
      date: "March 15-20, 2024",
      description:
        "Celebrate cultural diversity with food, music, and performances",
    },
    {
      title: "Sports Tournament",
      date: "April 5-10, 2024",
      description: "Annual inter-department sports competition",
    },
    {
      title: "Career Fair",
      date: "May 22-24, 2024",
      description: "Connect with top employers and industry leaders",
    },
    {
      title: "Orientation Week",
      date: "January 7-12, 2024",
      description: "Welcome program for new international students",
    },
  ];

  return (
    <section id="campus-life" className="py-12">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
          <Users className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary-800">Campus Life</h2>
          <p className="text-gray-600">
            Experience vibrant student life at Green University
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div className="prose prose-lg text-gray-600 mb-6">
          <p>
            GUB offers a unique learning experience that blends tradition and
            innovation. Our faculty, renowned for their expertise, creates a
            stimulating environment. State-of-the-art facilities and a focus on
            character development ensure our graduates are academically
            accomplished and well-rounded.
          </p>
        </div>
        <a
          href="https://www.green.edu.bd/campus-life-events"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
        >
          Explore Campus Life
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Campus Facilities */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Campus Facilities
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <div className="text-primary-600">{facility.icon}</div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                {facility.name}
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                {facility.description}
              </p>
              <div className="text-sm font-semibold text-primary-600">
                {facility.stats}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Student Clubs */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Student Clubs & Organizations
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300"
            >
              <div className={` ${club.color} p-6 text-white`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  {club.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{club.name}</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{club.description}</p>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Join Club
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Upcoming Events
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    {event.title}
                  </h4>
                  <div className="text-sm text-primary-600 font-medium">
                    {event.date}
                  </div>
                </div>
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary-600" />
                </div>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* International Student Support */}
      <div className="mb-8  from-blue-50 to-indigo-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          International Student Support
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Services Provided:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Airport pickup and welcome service
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Visa and immigration assistance
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Cultural orientation programs
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Academic advising and support
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Health & Wellness:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">On-campus health center</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Counseling and mental health services
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">Health insurance guidance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">24/7 emergency support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery Preview */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Campus Gallery
            </h3>
            <p className="text-gray-600">
              Take a virtual tour of our beautiful campus and facilities
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Gallery
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Virtual Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
