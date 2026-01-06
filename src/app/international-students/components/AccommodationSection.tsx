// app/international-students/components/AccommodationSection.tsx
"use client";

import {
  Home,
  Wifi,
  Utensils,
  Bus,
  Shield,
  Users,
  MapPin,
  Star,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

export default function AccommodationSection() {
  const [activeTab, setActiveTab] = useState("on-campus");

  const accommodationOptions = {
    "on-campus": [
      {
        name: "International Student Hostel",
        location: "Purbachal American City, Near Main Campus",
        amenities: ["WiFi", "Meals", "Laundry", "24/7 Security", "Study Rooms"],
        roomTypes: ["Single", "Double", "Shared (4 person)"],
        priceRange: "৳8,000 - ৳15,000/month",
        distance: "5 minutes walk",
        rating: 4.5,
        images: ["/images/hostel/hostel1.jpg", "/images/hostel/hostel2.jpg"],
      },
      {
        name: "Green University Residence Hall",
        location: "Campus Premises",
        amenities: ["WiFi", "AC", "Attached Bath", "Common Kitchen", "Gym"],
        roomTypes: ["Single AC", "Double AC"],
        priceRange: "৳12,000 - ৳20,000/month",
        distance: "On Campus",
        rating: 4.8,
        images: ["/images/hostel/residence1.jpg"],
      },
    ],
    "off-campus": [
      {
        name: "Green Valley Apartments",
        location: "Purbachal, 10 minutes from campus",
        amenities: [
          "Furnished",
          "WiFi",
          "Parking",
          "Security",
          "Market Access",
        ],
        roomTypes: ["Studio", "1 Bedroom", "2 Bedroom"],
        priceRange: "৳15,000 - ৳30,000/month",
        distance: "10 minutes by bus",
        rating: 4.3,
        images: ["/images/apartments/green-valley.jpg"],
      },
      {
        name: "Student Housing Complex",
        location: "Near Purbachal Bus Stand",
        amenities: [
          "WiFi",
          "Meals available",
          "Laundry",
          "Common Areas",
          "24/7 Support",
        ],
        roomTypes: ["Shared Room", "Private Room"],
        priceRange: "৳6,000 - ৳12,000/month",
        distance: "15 minutes walk",
        rating: 4.2,
        images: ["/images/apartments/student-housing.jpg"],
      },
    ],
  };

  const amenitiesList = [
    {
      icon: <Wifi className="w-6 h-6" />,
      name: "High-speed WiFi",
      description: "Unlimited internet access",
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      name: "Dining Facilities",
      description: "Meal plans available",
    },
    {
      icon: <Bus className="w-6 h-6" />,
      name: "Transportation",
      description: "Free campus shuttle",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      name: "24/7 Security",
      description: "CCTV and security staff",
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: "Community Spaces",
      description: "Common rooms and lounges",
    },
    {
      icon: <Home className="w-6 h-6" />,
      name: "Furnished Rooms",
      description: "Bed, desk, wardrobe included",
    },
  ];

  const transportationOptions = [
    {
      type: "University Shuttle",
      description: "Free shuttle service for students",
      frequency: "Every 15-20 minutes",
      coverage: "Campus to major residential areas",
      icon: <Bus className="w-6 h-6" />,
    },
    {
      type: "Public Bus",
      description: "70+ buses on university route",
      frequency: "Every 10-15 minutes",
      coverage: "All major areas of Dhaka",
      icon: <Bus className="w-6 h-6" />,
    },
    {
      type: "Ride-sharing",
      description: "Uber/Pathao available",
      frequency: "On-demand",
      coverage: "City-wide",
      icon: <MapPin className="w-6 h-6" />,
    },
  ];

  return (
    <section id="accommodation" className="py-12">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
          <Home className="w-6 h-6 text-orange-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary-800">Accommodation</h2>
          <p className="text-gray-600">
            Comfortable living options for international students
          </p>
        </div>
      </div>

      <div className="mb-8">
        <div className="prose prose-lg text-gray-600 mb-6">
          <p>
            Green University Bangladesh recognizes the unique needs of its
            international student population. To foster a comfortable and secure
            living environment conducive to academic success, GUB offers
            dedicated on-campus hostels near the permanent campus at Purbachal
            American City.
          </p>
          <p>
            The university also has a well-connected bus route with 70 buses
            that all students can use free of cost to live in their preferred
            area. Foreign students can find their accommodation at Green
            University hostels with very minimal expenditure along with food,
            internet, and transport facilities.
          </p>
        </div>
      </div>

      {/* Accommodation Tabs */}
      <div className="mb-8">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("on-campus")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "on-campus"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            On-Campus Housing
          </button>
          <button
            onClick={() => setActiveTab("off-campus")}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === "off-campus"
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Off-Campus Housing
          </button>
        </div>

        {/* Accommodation Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {accommodationOptions[
            activeTab as keyof typeof accommodationOptions
          ].map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              {/* Image Slider */}
              <div className="h-48  from-primary-400 to-primary-600 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Home className="w-16 h-16" />
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {option.rating}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {option.name}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {option.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-600">
                      {option.priceRange}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>

                {/* Room Types */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Room Types Available:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {option.roomTypes.map((type, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Amenities:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {option.amenities.map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Distance */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Distance from campus:</span>{" "}
                    {option.distance}
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Facilities & Amenities
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenitiesList.map((amenity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                <div className="text-primary-600">{amenity.icon}</div>
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                {amenity.name}
              </h4>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transportation */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Transportation Services
        </h3>
        <div className=" from-blue-50 to-indigo-50 rounded-2xl p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {transportationOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-blue-600">{option.icon}</div>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {option.type}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {option.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-between">
                    <span>Frequency:</span>
                    <span className="font-medium">{option.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Coverage:</span>
                    <span className="font-medium">{option.coverage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-6">
            <h4 className="font-bold text-gray-800 mb-3">
              Transportation Benefits:
            </h4>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-600">
                  Free shuttle service for all students
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  70+ buses on dedicated routes
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Safe and reliable transportation
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 " />
                <span className="text-gray-600">
                  Convenient access to all campus facilities
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <div className=" from-primary-50 to-blue-50 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Apply for Accommodation
            </h3>
            <p className="text-gray-600">
              Secure your accommodation early to ensure availability. Our
              housing office will assist you with the application process.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply for Housing
            </a>
            <a
              href="mailto:housing@green.edu.bd"
              className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Housing Office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
