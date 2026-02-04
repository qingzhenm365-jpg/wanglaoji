import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TimelineNode } from '../types';
import { X, Calendar, Share2, MapPin, User, Star, Quote } from 'lucide-react';
import clsx from 'clsx';

interface DetailModalProps {
  node: TimelineNode | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ node, onClose }) => {
  if (!node) return null;

  // Determine specific layout traits based on node ID for visual variety
  const isDarkTheme = node.id === 2 || node.id === 6 || node.id === 7 || node.id === 8;
  const isFullWidthHero = node.id === 3 || node.id === 5 || node.id === 8;
  const isPocketStyle = node.id === 1;

  const bgClass = isDarkTheme ? 'bg-[#221510] text-white' : 'bg-[#fcf9f8] text-slate-900';
  const textSubClass = isDarkTheme ? 'text-gray-300' : 'text-slate-600';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className={clsx(
            "relative w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row z-10 my-auto",
            bgClass,
            isPocketStyle && "rounded-[2.5rem] border-4 border-dashed border-primary/20"
          )}
          style={{ maxHeight: '90vh' }}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className={clsx(
              "absolute top-4 right-4 z-30 p-2 rounded-full transition-colors",
              isDarkTheme ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/5 hover:bg-black/10 text-slate-800"
            )}
          >
            <X size={24} />
          </button>

          {/* Left / Top Section: Visual */}
          <div className={clsx(
            "relative",
            isFullWidthHero ? "w-full lg:w-7/12 min-h-[300px] lg:min-h-[600px]" : "w-full lg:w-1/2 min-h-[300px]",
            "overflow-hidden bg-gray-100"
          )}>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${node.image})` }}
            >
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Badges/Overlays */}
            <div className="absolute top-6 left-6 flex gap-2">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm flex items-center gap-1"
                style={{ backgroundColor: node.themeColor, color: '#fff' }}
              >
                Node {String(node.id).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right / Bottom Section: Content */}
          <div className={clsx(
            "relative p-6 md:p-10 lg:p-12 flex flex-col overflow-y-auto no-scrollbar",
            isFullWidthHero ? "w-full lg:w-5/12" : "w-full lg:w-1/2",
            isPocketStyle && "bg-opacity-50"
          )}>
             {/* Header */}
             <div className="mb-6">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                  <Calendar size={16} className={node.themeColor} />
                  <span className={clsx("text-sm font-bold uppercase tracking-widest", textSubClass)}>{node.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
                  {node.title}
                </h2>
                <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: node.themeColor }}></div>
             </div>

             {/* Description */}
             <div className="prose prose-lg dark:prose-invert">
                <p className={clsx("text-lg font-serif leading-relaxed", textSubClass)}>
                  {node.description}
                </p>
                <div className="mt-6 space-y-4">
                  <p className={clsx("text-base", isDarkTheme ? "text-gray-400" : "text-gray-600")}>
                    {node.details.fullDescription}
                  </p>
                  
                  {node.details.quote && (
                    <blockquote className={clsx(
                      "pl-4 border-l-4 italic my-4 py-2",
                      isDarkTheme ? "border-gray-600 text-gray-400" : "border-gray-300 text-gray-600"
                    )}>
                      "{node.details.quote}"
                    </blockquote>
                  )}
                </div>
             </div>

             {/* Features / Micro-details grid */}
             {node.details.features && (
               <div className="mt-8 grid grid-cols-1 gap-4">
                 {node.details.features.map((feature, idx) => (
                   <div key={idx} className={clsx(
                     "flex items-start gap-4 p-4 rounded-xl border",
                     isDarkTheme ? "bg-white/5 border-white/10" : "bg-white border-gray-100 shadow-sm"
                   )}>
                     <div className="p-2 rounded-full shrink-0" style={{ backgroundColor: `${node.themeColor}20`, color: node.themeColor }}>
                       <Star size={16} />
                     </div>
                     <div>
                       <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                       <p className={clsx("text-xs", textSubClass)}>{feature.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             )}

             {/* Meta Info Grid */}
             {(node.details.location || node.details.characters) && (
               <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-dashed border-gray-200/20">
                  {node.details.location && (
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-1 text-xs uppercase tracking-wider opacity-60">
                        <MapPin size={12} /> 地点
                      </span>
                      <span className="font-medium">{node.details.location}</span>
                    </div>
                  )}
                  {node.details.characters && (
                    <div className="flex flex-col gap-1">
                      <span className="flex items-center gap-1 text-xs uppercase tracking-wider opacity-60">
                        <User size={12} /> 人物
                      </span>
                      <span className="font-medium">{node.details.characters.join(', ')}</span>
                    </div>
                  )}
               </div>
             )}

             {/* Actions */}
             <div className="mt-auto pt-8 flex gap-4">
                <button 
                  onClick={onClose}
                  className="flex-1 py-3 px-6 rounded-xl font-bold text-white shadow-lg transform active:scale-95 transition-all"
                  style={{ backgroundColor: node.themeColor }}
                >
                  返回时间轴
                </button>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DetailModal;
