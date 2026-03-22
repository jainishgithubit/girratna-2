import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    category: "Recipes",
    title: "5 Traditional Indian Recipes That Taste Better with Pure Ghee",
    excerpt: "From dal tadka to gajar ka halwa, discover how pure A2 ghee transforms everyday Indian dishes into something extraordinary.",
    date: "Feb 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Health Tips",
    title: "Why Ayurveda Recommends Ghee on an Empty Stomach",
    excerpt: "Learn about the ancient Ayurvedic practice of consuming ghee first thing in the morning and its incredible health benefits.",
    date: "Feb 5, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Ayurveda",
    title: "A2 vs A1 Milk: What's the Difference and Why It Matters",
    excerpt: "Understanding the science behind A2 protein and why ghee made from A2 milk is significantly healthier for your family.",
    date: "Jan 28, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    category: "Health Tips",
    title: "Ghee for Weight Loss: Myth or Reality?",
    excerpt: "Contrary to popular belief, pure ghee can actually support healthy weight management. Here's what the science says.",
    date: "Jan 20, 2026",
    readTime: "4 min read",
  },
  {
    id: 5,
    category: "Recipes",
    title: "The Perfect Ghee Rice: A Simple Recipe for Pure Comfort",
    excerpt: "Nothing beats the aroma of freshly made ghee rice. Learn our family recipe that has been passed down for generations.",
    date: "Jan 15, 2026",
    readTime: "3 min read",
  },
  {
    id: 6,
    category: "Ayurveda",
    title: "Ghee in Panchakarma: The Ayurvedic Detox Secret",
    excerpt: "How ghee plays a crucial role in Ayurvedic Panchakarma therapy and helps detoxify the body at a cellular level.",
    date: "Jan 8, 2026",
    readTime: "5 min read",
  },
];

const categoryColors: Record<string, string> = {
  Recipes: "bg-primary/15 text-primary",
  "Health Tips": "bg-accent/15 text-accent",
  Ayurveda: "bg-gold-dark/15 text-gold-dark",
};

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-warm py-16">
        <div className="container text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Knowledge</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recipes, health tips, and Ayurvedic wisdom — all centered around the golden goodness of ghee.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-card rounded-2xl border border-gold/10 overflow-hidden hover:shadow-gold transition-all duration-300 group flex flex-col">
                <div className="h-48 bg-gradient-gold/10 flex items-center justify-center">
                  <span className="font-display text-6xl text-primary/20">✦</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all cursor-pointer">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
