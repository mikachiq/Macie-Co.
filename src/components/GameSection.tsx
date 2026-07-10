import React, { useState } from 'react';
import { motion } from 'motion/react';

export interface SubItem {
  name: string;
  price?: string;
  isHeader?: boolean;
}

export interface Service {
  name: string;
  price: string;
  subtitle?: string;
  description: string | string[];
  subItems?: SubItem[];
  backgroundImage?: string;
}

export interface ServiceCategory {
  categoryName: string;
  navLabel?: string;
  categoryDescription?: string;
  services: Service[];
  images?: string[];
}

export interface Review {
  username?: string;
  rating?: number;
  comment?: string;
  image?: string;
}

interface GameSectionProps {
  id: string;
  title: string;
  icon?: string;
  accentColorClass?: string;
  services?: Service[];
  categories?: ServiceCategory[];
  reviews: Review[];
  currency: 'PHP' | 'USD';
}

function PriceDisplay({ priceString, currency, padLength = 6 }: { priceString: string | undefined, currency: 'PHP' | 'USD', padLength?: number }) {
  if (!priceString) return null;
  const parts = priceString.split('|').map(p => p.trim());
  if (parts.length === 2) {
    let selectedPrice = currency === 'PHP' ? parts[0] : parts[1];
    
    // If the price is a text label like "free dialogue" without numbers
    if (!/\d/.test(selectedPrice)) {
      return <span>{selectedPrice.trim()}</span>;
    }
    
    selectedPrice = selectedPrice.replace(/Php/gi, '').replace(/\$/g, '').trim();
    const symbol = currency === 'PHP' ? '₱' : '$';
    
    const suffixMatch = selectedPrice.match(/\/(hr|pc|flr)$/);
    const suffix = suffixMatch ? `/${suffixMatch[1]}` : '';
    let value = suffixMatch ? selectedPrice.replace(/\/(hr|pc|flr)$/, '').trim() : selectedPrice;

    // Preserve a trailing "+" (e.g. "400.00+" -> "400+")
    const plus = value.endsWith('+') ? '+' : '';
    if (plus) value = value.slice(0, -1);

    if (value.includes('.')) {
      const [intPart, decPart] = value.split('.');
      // Drop only trailing zero decimals (e.g. 1,000.00 -> 1,000); keep real decimals (0.50, 0.005)
      if (/^0+$/.test(decPart)) {
        value = intPart;
      }
    }
    value = value + plus;
    
    const pad = '\u2007'.repeat(Math.max(0, padLength - value.length));

    return (
      <span className="tabular-nums whitespace-pre">
        {pad}{symbol}{value}{suffix}
      </span>
    );
  }
  return <span>{priceString}</span>;
}

function ServiceCard({ service, currency }: { service: Service, currency: 'PHP' | 'USD', key?: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hasSubItems = service.subItems && service.subItems.length > 0;
  const displayName = service.name.replace(/\s*100%$/, '');

  return (
    <>
      <div
        className={`glass p-6 rounded-2xl service-card transition-all flex flex-col justify-between h-full min-h-[190px] relative overflow-hidden ${hasSubItems ? 'cursor-pointer hover:border-brand-pink/50' : ''}`}
        onClick={() => hasSubItems && setIsModalOpen(true)}
      >
        {service.backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"
            style={{ backgroundImage: `url(${service.backgroundImage})` }}
            aria-hidden="true"
          />
        )}
        <div className="flex-1 relative z-10">
          <div className="mb-4 min-h-[3.5rem]">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-lg font-bold text-white group-hover:text-brand-pink transition-colors">
                {displayName}
              </h3>
              <span className="text-brand-pink font-bold whitespace-nowrap">
                <PriceDisplay priceString={service.price} currency={currency} padLength={8} />
              </span>
            </div>
            {service.subtitle && (
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-pink/80 mt-1">
                {service.subtitle}
              </p>
            )}
          </div>

          {Array.isArray(service.description) ? (
            <ul className="text-xs text-white/50 mt-2 leading-relaxed space-y-1 list-disc pl-4">
              {service.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <ul className="text-xs text-white/50 mt-2 leading-relaxed space-y-1 list-disc pl-4">
              <li>{service.description}</li>
            </ul>
          )}
        </div>
      </div>

      {isModalOpen && hasSubItems && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div 
            className="glass bg-brand-black/90 p-6 rounded-2xl w-full max-w-6xl max-h-[80vh] overflow-y-auto border border-brand-pink/30 shadow-2xl shadow-brand-pink/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 sticky top-0 bg-brand-black/95 py-2 -mt-2 z-10">
              <h3 className="text-xl font-bold text-white">{displayName}</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-md hover:bg-white/10 text-white/50 hover:text-white transition-colors"
              >
                <i className="fi fi-br-cross text-lg flex items-center justify-center"></i>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
              {service.subItems!.map((item, i) => (
                item.isHeader ? (
                  <div key={i} className="col-span-1 md:col-span-2 lg:col-span-3 mt-6 mb-2 border-b border-brand-pink/30 pb-2">
                    <span className="text-sm font-bold text-brand-pink uppercase tracking-wider">{item.name}</span>
                  </div>
                ) : (
                  <div key={i} className="flex justify-between items-center py-2 px-2 border-b border-white/5 hover:bg-white/5 rounded transition-colors">
                    <span className="text-sm text-white/80">{item.name}</span>
                    <span className="text-sm text-brand-pink font-bold">
                      <PriceDisplay priceString={item.price} currency={currency} />
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function GameSection({ id, title, icon, services, categories, reviews, currency }: GameSectionProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categoryId = (name: string) => `${id}-${slugify(name)}`;

  const scrollToCategory = (name: string) => {
    const el = document.getElementById(categoryId(name));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderServiceCard = (service: Service, index: number) => (
    <ServiceCard key={index} service={service} currency={currency} />
  );

  return (
    <section id={id} className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white flex items-center justify-center gap-4">
            {icon && (
              <img src={icon} alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-2xl object-cover" />
            )}
            {title}
          </h2>

          {categories && categories.length > 0 && (
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToCategory(cat.categoryName)}
                  className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider glass text-white/70 hover:text-white hover:border-brand-pink/50 transition-all"
                >
                  {cat.navLabel || cat.categoryName}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Services Grid (Flat array fallback) */}
        {services && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map(renderServiceCard)}
          </div>
        )}

        {/* Services Categories */}
        {categories && categories.length > 0 && (
          <div className="mb-20 space-y-16">
            {categories.map((cat, catIndex) => (
              <div key={catIndex} id={categoryId(cat.categoryName)} className="scroll-mt-28">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white uppercase tracking-widest">{cat.categoryName}</h3>
                  {cat.categoryDescription && (
                    <p className="text-sm text-white/60 mt-2">{cat.categoryDescription}</p>
                  )}
                </div>
                {cat.images && cat.images.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.images.map((img, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setLightboxImage(img)}
                        className="block w-full rounded-2xl overflow-hidden border border-white/10 hover:border-brand-pink/50 transition-colors cursor-pointer"
                      >
                        <img src={img} alt="" className="w-full h-auto" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.services.map(renderServiceCard)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Reviews */}
        <div id="reviews" className="scroll-mt-24">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-pink mb-3">Client Testimonials</h4>
          <p className="text-sm md:text-base text-white/60 mb-8 whitespace-nowrap">
            Over <span className="text-brand-pink font-semibold">500+ transactions</span> completed.{' '}
            <a
              href="https://discord.gg/MwKZGwdAN4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-pink font-semibold underline underline-offset-2 hover:text-brand-pink/80 transition-colors"
            >
              Join our server
            </a>{' '}
            of 200+ community members to see more proof of legitimacy.
          </p>
          <div className="relative overflow-hidden">
            {/* Edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-brand-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-brand-black to-transparent pointer-events-none" />

            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            >
              {[...reviews, ...reviews].map((review, index) => (
                <div key={index} className="glass p-3 rounded-2xl w-[380px] shrink-0">
                  {review.image && (
                    <img
                      src={review.image}
                      alt="Client vouch"
                      className="w-full rounded-lg border border-white/10"
                    />
                  )}
                  {review.comment && (
                    <div className="p-3">
                      {typeof review.rating === 'number' && (
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fi fi-sr-star text-xs ${i < review.rating! ? 'text-brand-pink' : 'text-gray-600'}`}
                            ></i>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-white/60 italic mb-4">"{review.comment}"</p>
                      {review.username && (
                        <div className="text-white/40 font-medium text-[10px] uppercase tracking-wider flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-brand-pink/20 flex items-center justify-center text-[10px] text-brand-pink">
                            {review.username.charAt(0)}
                          </div>
                          - @{review.username}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 rounded-md hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <i className="fi fi-br-cross text-xl flex items-center justify-center"></i>
          </button>
          <img
            src={lightboxImage}
            alt=""
            className="max-w-full max-h-[90vh] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
