import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  location?: string;
  rating?: number;
  image?: string;
}

interface TestimonialsProps {
  items: Testimonial[];
  title?: string;
  subtitle?: string;
}

const Testimonials = ({ 
  items,
  title = 'Wat anderen zeggen',
  subtitle = 'Ervaringen'
}: TestimonialsProps) => {
  return (
    <section className="bg-[#F5F1EB]">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A962] font-medium text-sm tracking-wider uppercase mb-3">
            {subtitle}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3D3229]">
            {title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#C9A962]/20" />
              
              {testimonial.rating && (
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A962] text-[#C9A962]" />
                  ))}
                </div>
              )}

              <blockquote className="text-[#3D3229]/80 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#C9A962]/10 flex items-center justify-center mr-4">
                    <span className="font-serif text-lg text-[#C9A962]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium text-[#3D3229]">{testimonial.name}</p>
                  {testimonial.location && (
                    <p className="text-sm text-[#3D3229]/60">
                      {testimonial.location}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
