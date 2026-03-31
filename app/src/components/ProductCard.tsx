import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  imageUrl?: string;
  link: string;
  features?: string[];
  index?: number;
}

const ProductCard = ({
  title,
  subtitle,
  description,
  price,
  imageUrl,
  link,
  features = [],
  index = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card overflow-hidden"
    >
      <Link to={link} className="block">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-[#E8DFC8]">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#3D3229]/30">
              <span className="font-serif text-2xl">{title}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[#C9A962] text-xs font-medium tracking-wider uppercase mb-2">
                {subtitle}
              </p>
              <h3 className="font-serif text-2xl text-[#3D3229] group-hover:text-[#C9A962] transition-colors">
                {title}
              </h3>
            </div>
            <div className="text-right">
              <p className="font-serif text-2xl text-[#C9A962]">{price}</p>
            </div>
          </div>

          <p className="text-[#3D3229]/70 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {features.length > 0 && (
            <ul className="space-y-2 mb-6">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm text-[#3D3229]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A962] mr-3" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center text-[#C9A962] font-medium text-sm group-hover:translate-x-2 transition-transform">
            Bekijk details
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
