import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from './ui/button';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:scale-105 hover:glow-effect animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar & Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(testimonial.rating)
                        ? 'fill-primary text-primary'
                        : i < testimonial.rating
                        ? 'fill-primary/50 text-primary'
                        : 'text-muted'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-semibold">{testimonial.rating}</span>
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        {testimonials.length > 6 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              variant="outline"
              className="glow-effect"
            >
              {showAll ? 'Show Less' : 'Show More Reviews'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
