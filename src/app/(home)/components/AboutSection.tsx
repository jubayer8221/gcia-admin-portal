// app/(home)/components/AboutSection.tsx
import { Globe2, Target, Users, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Welcome to the Center for International Affairs
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg text-gray-600 max-w-none mb-12">
            <p>
              Green University of Bangladesh (GUB) is committed to fostering a
              dynamic and interconnected learning environment. As a cornerstone
              of the global academic landscape, GUB aims to expand its global
              reach by connecting with leading universities and research
              institutions worldwide.
            </p>
            <p>
              We offer students and faculty diverse opportunities for learning,
              growth, and collaboration in an increasingly globalized world,
              ensuring a world-class education through international best
              practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className=" from-primary-50 to-white p-8 rounded-2xl shadow-lg border border-primary-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-primary-800">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-600">
                Internationalization of the Green University of Bangladesh
                through broadening the global experiences of students, faculty
                members, and staff.
              </p>
            </div>

            <div className=" from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                Creating a functional global platform for sustained cooperation
                and collaboration with national and international universities
                in student and faculty exchange, joint research, and innovation.
              </p>
            </div>
          </div>

          {/* GCiA Activities */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  GCiA Activities Report
                </h3>
                <p className="text-gray-600">
                  Access our latest activities and achievements
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/1p5IrOXOUGLfGOj3VTSwn4YkYWUbwhsWZ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0 inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Report
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
