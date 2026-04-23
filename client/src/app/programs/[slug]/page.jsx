import Link from "next/link";
import { programs } from "@/data/programs";

export default function ProgramsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore Our Academic Programs
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-blue-100">
          Choose from undergraduate, postgraduate, and research programs
          designed to shape future leaders.
        </p>
      </section>

      {/* Programs Listing */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {program.category}
                </span>

                <h2 className="text-xl font-bold text-gray-900 mt-4">
                  {program.title}
                </h2>

                <p className="text-gray-600 mt-3 text-sm">
                  {program.description}
                </p>

                {/* Program Details */}
                <div className="mt-5 space-y-2 text-sm text-gray-500">
                  <p>
                    <strong>Duration:</strong> {program.duration}
                  </p>
                  <p>
                    <strong>Eligibility:</strong> {program.eligibility}
                  </p>
                  <p>
                    <strong>Fees:</strong> {program.fees}
                  </p>
                  <p>
                    <strong>Seats:</strong> {program.seats}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 flex gap-3">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    View Details
                  </Link>

                  <Link
                    href="/apply"
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}