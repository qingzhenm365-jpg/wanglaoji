import React from 'react';
import { motion } from 'framer-motion';

const CharacterMap: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-6xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">人物关系图谱</h2>
        <p className="text-gray-600">编织错综复杂的宫廷命运</p>
      </div>

      <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-[#fdfaf5] rounded-3xl shadow-inner border-8 border-[#eaddde] overflow-hidden p-8">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-50 pointer-events-none"></div>
         
         <div className="w-full h-full flex items-center justify-center">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp_dQ6o1JwRMrws3MGiu7o3nV4W541S7B1xGZeOeqslp1cvPpVERVDBlutQyueHvKxBlWInPDTd_kHG4clvYa0qQtrVW1mYHzjVnNBFfPr7Sle5W9vmlMTXduwWodVvUMzkb34b_itkH4kOAeWPRhWYAmSFOCpyKeNYIqiBJRep-lKDVsOCwxhipmmxR4RCmRugw9JZXbobBIO9U-Tbpc0-3RURNPGa00mG18Rf8_zjvUoBU1O3Gd6YP8hgABZT4F_UlFlcb2wiJoI" 
                alt="Character Map" 
                className="max-w-full max-h-full object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-700"
            />
         </div>

         <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Interactive Map Coming Soon
            </span>
         </div>
      </div>
    </motion.div>
  );
};

export default CharacterMap;
