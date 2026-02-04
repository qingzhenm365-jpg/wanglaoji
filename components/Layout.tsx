import React from 'react';
import { ViewState } from '../types';
import { Scroll, Users, Info, Music } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onChangeView }) => {
  return (
    <div className="min-h-screen bg-felt-texture text-[#1b140d] font-sans selection:bg-primary selection:text-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#f4f1ea]/80 border-b border-[#e0dacb] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onChangeView('timeline')}>
             <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
               <Scroll size={20} />
             </div>
             <h1 className="text-lg md:text-xl font-serif font-bold text-gray-900 tracking-tight">大长今毛毡史诗</h1>
          </div>

          <nav className="hidden md:flex items-center gap-8">
             <button 
                onClick={() => onChangeView('timeline')}
                className={`text-sm font-bold transition-colors ${currentView === 'timeline' ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
             >
                时间轴
             </button>
             <button 
                onClick={() => onChangeView('characters')}
                className={`text-sm font-bold transition-colors ${currentView === 'characters' ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
             >
                角色
             </button>
             <button 
                 onClick={() => onChangeView('about')}
                 className={`text-sm font-bold transition-colors ${currentView === 'about' ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
             >
                关于
             </button>
          </nav>

          <div className="flex items-center gap-3">
             <button className="p-2 rounded-full hover:bg-black/5 text-gray-600 transition-colors">
                <Music size={20} />
             </button>
             <button className="hidden sm:flex bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-felt hover:bg-red-700 transition-colors">
                进入3D视图
             </button>
          </div>
        </div>
      </header>

      <main className="w-full relative">
        {children}
      </main>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-[#e0dacb] mt-20">
         <p>© 2024 Dae Jang Geum Felt Epic Project. Concept Design.</p>
      </footer>
    </div>
  );
};

export default Layout;
