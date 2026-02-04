import React from 'react';
import { motion } from 'framer-motion';
import { TimelineNode } from '../types';
import { TIMELINE_DATA } from '../constants';
import * as Icons from 'lucide-react';

interface TimelineProps {
  onNodeSelect: (node: TimelineNode) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onNodeSelect }) => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-4 py-20">
      {/* Central Thread Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] bg-indigo-100 md:-ml-[2px] stiching-line z-0">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(to bottom, #1349ec 50%, transparent 50%)', backgroundSize: '4px 20px' }}></div>
      </div>

      <div className="flex flex-col gap-24">
        {TIMELINE_DATA.map((node, index) => {
          const isEven = index % 2 === 0;
          // Dynamically get icon
          // @ts-ignore
          const IconComponent = Icons[node.icon.charAt(0).toUpperCase() + node.icon.slice(1)] || Icons.Sparkles;

          return (
            <motion.div 
              key={node.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col md:flex-row items-center w-full group"
            >
              {/* Center Marker */}
              <div 
                className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full border-4 bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ borderColor: node.themeColor }}
              >
                <span className="font-bold text-lg" style={{ color: node.themeColor }}>
                   {String(node.id).padStart(2, '0')}
                </span>
              </div>

              {/* Content Side */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right order-1' : 'md:pl-16 order-1 md:order-2'}`}>
                 <div 
                   onClick={() => onNodeSelect(node)}
                   className={`
                     relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-felt border border-white 
                     cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                     ${isEven ? 'md:mr-auto' : 'md:ml-auto'}
                     max-w-md mx-auto md:mx-0
                   `}
                 >
                    <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: node.themeColor }}>{node.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">{node.description}</p>
                 </div>
              </div>

              {/* Image Side */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 mt-6 md:mt-0 ${isEven ? 'md:pl-16 order-2' : 'md:pr-16 order-2 md:order-1'}`}>
                <div 
                  onClick={() => onNodeSelect(node)}
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-felt-floating border-4 border-white cursor-pointer group-hover:ring-4 transition-all duration-300 transform group-hover:rotate-1"
                  style={{ ringColor: `${node.themeColor}30` }}
                >
                  <img 
                    src={node.image} 
                    alt={node.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <span className="text-white font-bold tracking-widest uppercase text-sm">View Details</span>
                  </div>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
