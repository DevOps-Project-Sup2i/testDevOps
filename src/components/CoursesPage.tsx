import { useState } from 'react';
import { Search, Star, Calendar, Building2, GraduationCap } from 'lucide-react';
import coursesData from '../data/courses.json';

interface Course {
  url?: string;
  title?: string;
  image?: string;
  description?: string | null;
  rating?: number;
  timestamp?: string;
  university?: string | null;
}

interface CoursesPageProps {
  onBack: () => void;
}

function CoursesPage({ onBack }: CoursesPageProps) {
  const [courses] = useState<Course[]>(coursesData as Course[]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course => {
    const title = course.title || '';
    const description = course.description || '';
    return title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      description.length > 80;
  });

  return (
    <div className="min-h-screen bg-[#F8F9FF]">
      <header className="bg-white/80 backdrop-blur-md border-b border-[#B346F6]/10 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={onBack}>
            <div className="bg-[#B346F6] p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-black flex items-center gap-1">
              Learn<span className="text-[#B346F6]">Hub</span>
            </h1>
          </div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-gray-700 hover:text-[#B346F6] hover:bg-[#B346F6]/5 transition-all duration-300 active:scale-95"
          >
            Back to Home
          </button>
        </div>
      </header>

      <div
        className="py-16 relative overflow-hidden animate-gradient-x"
        style={{
          background: 'linear-gradient(-45deg, #88FBF922, #B346F622, #88FBF922, #B346F622)',
        }}
      >
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-[#B346F6]/10 blur-[100px] rounded-full animate-float" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-80 h-80 bg-[#88FBF9]/10 blur-[80px] rounded-full animate-float" style={{ animationDelay: '-3s' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-5xl font-black text-black mb-4 tracking-tight leading-tight">
              Master New <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B346F6] to-[#6d28d9]">Boundaries</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-medium">Elevate your skills with courses handpicked from the world's most prestigious institutions.</p>

            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="text-[#B346F6] group-focus-within:scale-110 transition-transform" size={22} />
              </div>
              <input
                type="text"
                placeholder="Search your next breakthrough..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-8 py-4 px-6 text-lg rounded-2xl border-2 border-white bg-white/80 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] outline-none focus:border-[#B346F6]/30 focus:ring-4 focus:ring-[#B346F6]/5 transition-all duration-300 text-black font-medium"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <div className="px-6 py-2 rounded-full bg-white/50 backdrop-blur-md border border-[#B346F6]/10 shadow-sm">
                <span className="text-sm font-bold text-gray-800 tracking-wide uppercase">
                  ✨ Discovering <span className="text-[#B346F6] ml-1">{filteredCourses.length}</span> Masterpieces
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] p-6 w-[110%] hover:shadow-[0_30px_60px_-15px_rgba(179,70,246,0.25)] transition-all duration-500 border border-transparent hover:border-[#B346F6]/10 flex flex-col h-full transform hover:-translate-y-3"
            >
              {course.image && (
                <div className="mb-6 h-56 overflow-hidden rounded-2xl relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-black/5">
                    <Star size={16} className="fill-[#B346F6] text-[#B346F6]" />
                    <span className="font-bold text-gray-900 text-sm">{course.rating ?? '5.0'}</span>
                  </div>
                </div>
              )}

              <div className="flex-grow flex flex-col px-1">
                <h3 className="text-xl font-extrabold text-black mb-3 line-clamp-2 leading-tight group-hover:text-[#B346F6] transition-colors duration-300">
                  {course.title}
                </h3>

                <p className="text-gray-500 mb-6 line-clamp-3 text-[0.95rem] leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50">
                  {course.university && (
                    <div className="flex items-center gap-3 mb-5">
                      <div className="bg-[#88FBF9]/20 p-2 rounded-lg">
                        <Building2 size={18} className="text-[#15b0aa]" />
                      </div>
                      <span className="text-[0.9rem] font-bold text-gray-700">
                        {course.university}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-gray-400 font-medium text-sm">
                      <Calendar size={16} />
                      <span>
                        {typeof course.timestamp === 'string'
                          ? new Date(course.timestamp).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
                          : 'Recent'}
                      </span>
                    </div>
                  </div>

                  <a
                    href={course.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative overflow-hidden group/btn block w-full text-center py-4 rounded-2xl font-black text-white transition-all duration-300 active:scale-95 ${!course.url ? 'pointer-events-none opacity-50' : 'hover:shadow-[0_10px_25px_-5px_rgba(179,70,246,0.4)]'}`}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-[#B346F6] to-[#6d28d9] group-hover/btn:scale-105 transition-transform duration-500"
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide uppercase text-xs">
                      {course.url ? 'Engage Now' : 'Currently Unavailable'}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-24">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-50 inline-block max-w-lg">
              <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-gray-300" />
              </div>
              <p className="text-3xl font-black text-black mb-4">No results found</p>
              <p className="text-gray-500 font-medium">We couldn't find any courses matching your search. Try broadening your terms or clear the search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-8 text-[#B346F6] font-bold hover:underline"
              >
                Reset Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoursesPage;
