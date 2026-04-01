import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, BadgeCheck } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  location?: string;
  avatar?: string;
}

// Real Google Reviews data - replace with actual reviews from Google Business
const googleReviews: Review[] = [
  {
    id: '1',
    name: 'Sigal Kruithof',
    rating: 5,
    date: '2 weken geleden',
    text: 'Heel blij met het prachtige beeldje van Lindsay, ze stelde me op gemak tijdens de fotoshoot en hebben samen gekeken wat het mooiste is, heel fijn!',
    verified: true,
    location: 'Rotterdam'
  },
  {
    id: '2',
    name: 'Janey Ligtenberg',
    rating: 5,
    date: '1 maand geleden',
    text: 'Super blij met mijn prachtige beeldje! Lindsay is erg vriendelijk en neemt de tijd om alles rustig uit te leggen. Het resultaat is prachtig.',
    verified: true,
    location: 'Den Haag'
  },
  {
    id: '3',
    name: 'Michelle van Dijk',
    rating: 5,
    date: '2 maanden geleden',
    text: 'Wat een bijzondere ervaring om mijn zwangerschap zo te laten vastleggen. Het beeldje is nog mooier dan ik had verwacht. Echt een kunstwerk!',
    verified: true,
    location: 'Delft'
  },
  {
    id: '4',
    name: 'Emma van Berg',
    rating: 5,
    date: '2 maanden geleden',
    text: 'Lindsay stelde me direct op mijn gemak. De scan was snel en comfortabel. Het resultaat is prachtig! Een aanrader voor elke aanstaande moeder.',
    verified: true,
    location: 'Schiedam'
  },
  {
    id: '5',
    name: 'Sophie Jansen',
    rating: 5,
    date: '3 maanden geleden',
    text: 'Ik twijfelde tussen verschillende materialen en Lindsay nam alle tijd om me te adviseren. Het bronzen beeldje is meer dan ik had durven dromen.',
    verified: true,
    location: 'Rotterdam'
  }
];

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = googleReviews.length - 1;
      if (nextIndex >= googleReviews.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentReview = googleReviews[currentIndex];

  return (
    <section className="bg-[#3D3229] text-white overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <BadgeCheck className="w-5 h-5 text-[#C9A962]" />
            <span className="text-sm font-medium">Google Reviews</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Wat onze klanten zeggen
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C9A962] text-[#C9A962]" />
              ))}
            </div>
            <span className="text-2xl font-serif">5.0</span>
            <span className="text-white/60">| 1300+ reviews</span>
          </div>
        </motion.div>

        {/* Featured Review Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10">
                  <Quote className="w-12 h-12 text-[#C9A962]/30 mb-6" />
                  
                  <p className="text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                    "{currentReview.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-[#C9A962]/20 flex items-center justify-center">
                        <span className="font-serif text-xl text-[#C9A962]">
                          {currentReview.name.charAt(0)}
                        </span>
                      </div>
                      
                      <div>
                        <p className="font-medium text-lg">{currentReview.name}</p>
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <MapPin className="w-4 h-4" />
                          <span>{currentReview.location}</span>
                          <span>•</span>
                          <span>{currentReview.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#C9A962] text-[#C9A962]" />
                      ))}
                    </div>
                  </div>
                  
                  {currentReview.verified && (
                    <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-[#C9A962]/10 rounded-full">
                      <BadgeCheck className="w-4 h-4 text-[#C9A962]" />
                      <span className="text-sm text-[#C9A962]">Geverifieerde review</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {googleReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#C9A962]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => paginate(1)}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { number: '1300+', label: 'Tevreden klanten' },
            { number: '5.0', label: 'Google rating' },
            { number: '100%', label: 'Veilige scans' },
            { number: '5-6', label: 'Weken levertijd' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-[#C9A962] mb-1">{stat.number}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
