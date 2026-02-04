import React, { useState } from 'react';
import Layout from './components/Layout';
import Timeline from './components/Timeline';
import DetailModal from './components/DetailModal';
import CharacterMap from './components/CharacterMap';
import { TimelineNode, ViewState } from './types';
import { PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('timeline');
  const [selectedNode, setSelectedNode] = useState<TimelineNode | null>(null);

  return (
    <Layout currentView={currentView} onChangeView={setCurrentView}>
      
      {currentView === 'timeline' && (
        <>
          {/* Hero Section */}
          <section className="relative py-20 text-center px-4 overflow-hidden">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="relative z-10 max-w-4xl mx-auto"
             >
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-4">
                  INTERACTIVE TIMELINE
                </div>
                <h1 className="text-5xl md:text-7xl font-display text-[#1b140d] mb-6 drop-shadow-sm">
                  命运的织线
                </h1>
                <p className="text-lg md:text-xl text-gray-600 font-serif max-w-2xl mx-auto leading-relaxed">
                  以温暖羊毛为笔，深蓝丝线为墨，重温大长今波澜壮阔的一生。
                </p>
             </motion.div>
             
             {/* Decorative Background Elements */}
             <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/5 rounded-full blur-3xl"></div>
             <div className="absolute top-1/3 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
          </section>

          <Timeline onNodeSelect={setSelectedNode} />

          {/* Floating Action Button */}
          <div className="fixed bottom-8 right-8 z-30">
            <button className="flex items-center gap-3 bg-primary text-white pl-4 pr-6 py-3 rounded-2xl shadow-felt-floating hover:bg-red-700 transition-transform hover:scale-105 active:scale-95">
               <PlayCircle size={24} />
               <span className="font-bold">开启旅程</span>
            </button>
          </div>
        </>
      )}

      {currentView === 'characters' && (
        <CharacterMap />
      )}

      {currentView === 'about' && (
        <div className="min-h-[50vh] flex items-center justify-center text-center p-8">
           <div>
             <h2 className="text-2xl font-bold mb-4">关于本项目</h2>
             <p className="text-gray-600 max-w-lg mx-auto">
               这是一个旨在通过3D毛毡艺术风格重新诠释经典韩剧《大长今》的互动网页项目。所有视觉元素均模拟真实的手工毛毡质感。
             </p>
           </div>
        </div>
      )}

      {/* Modal */}
      <DetailModal 
        node={selectedNode} 
        onClose={() => setSelectedNode(null)} 
      />

    </Layout>
  );
};

export default App;
