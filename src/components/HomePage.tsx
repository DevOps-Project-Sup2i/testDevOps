import { GraduationCap, BookOpen, Award } from 'lucide-react';

interface HomePageProps {
  onExplore: () => void;
}

function HomePage({ onExplore }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GraduationCap size={32} className="text-[#B346F6]" />
            <h1 className="text-2xl font-bold text-black">LearnHub</h1>
          </div>
        </div>
      </header>

      <div
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, rgba(136, 251, 249, 0.2) 0%, rgba(179, 70, 246, 0.2) 100%)',
          boxShadow: 'inset 0 4px 15px rgba(179, 70, 246, 0.15)'
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-4">
            Learn New Skills Today
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Discover world-class courses from top universities and institutions worldwide.
          </p>
          <button
            onClick={onExplore}
            className="px-8 py-3 text-lg font-bold text-white rounded-lg transition-all hover:scale-105"
            style={{
              backgroundColor: '#B346F6',
              boxShadow: '0 4px 12px rgba(179, 70, 246, 0.3)'
            }}
          >
            Explore Courses
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div
            className="bg-white rounded-lg p-6"
            style={{ boxShadow: '0 4px 12px rgba(179, 70, 246, 0.2)' }}
          >
            <BookOpen size={40} className="text-[#B346F6] mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Expert Courses</h3>
            <p className="text-gray-700">Access premium courses from industry leaders and top universities</p>
          </div>

          <div
            className="bg-white rounded-lg p-6"
            style={{ boxShadow: '0 4px 12px rgba(136, 251, 249, 0.2)' }}
          >
            <Award size={40} className="text-[#88FBF9] mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Certified Learning</h3>
            <p className="text-gray-700">Earn recognized certificates to boost your professional credentials</p>
          </div>

          <div
            className="bg-white rounded-lg p-6"
            style={{ boxShadow: '0 4px 12px rgba(179, 70, 246, 0.2)' }}
          >
            <GraduationCap size={40} className="text-[#B346F6] mb-4" />
            <h3 className="text-xl font-bold text-black mb-2">Flexible Learning</h3>
            <p className="text-gray-700">Learn at your own pace with lifetime access to course materials</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
