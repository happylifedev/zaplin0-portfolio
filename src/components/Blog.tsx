import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Calendar, Clock } from 'lucide-react';
import { blogPosts, type BlogPost } from '@/data/blog';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:scale-105 hover:glow-effect animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s`, cursor: 'pointer' }}
            >
              <div className="mb-4">
                <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Post Detail Modal */}
        <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
          <DialogContent className="max-w-4xl bg-card/95 backdrop-blur-xl border-primary/20 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl gradient-text mb-4">{selectedPost?.title}</DialogTitle>
            </DialogHeader>
            
            {selectedPost && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedPost.excerpt}
                  </p>
                  <div className="mt-6 text-foreground leading-relaxed">
                    {selectedPost.content}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Blog;
