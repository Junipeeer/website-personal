import { TechnologyBlobs } from "../components/project-helpers/Blobs";
import { IntroAnimation } from "../components/TransitionsOverlays";

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Placeholder",
    date: "20 April 2025",
    summary:
      "This blog is currently a work in progress. The first posts will be about this website and a few smaller projects I am working on or planning. For example, I am preparing to work on a half-automated plant management system - beyond just automated watering - and a small, more philosophical exploration of returning to and embracing 'dumb' technology. Currently I am hosting this page on GitHub Pages, which means that I would have to add blog pages manually, and that is a bit tedious, so I plan to use WordPress or a similar service soon, though I have not decided on anything concrete yet.",
    tags: ["WIP", "Placeholder"],
    slug: "placeholder-and-wip",
  },
];

const Blog = () => {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper">
        <IntroAnimation className="space-y-8">
          {/* Header Section */}
          <div className="page-header border-[#74e6e6]">
            <h1 className="text-4xl font-bold text-white">Blog</h1>
            <p className="text-lg leading-relaxed text-neutral-300">
              On this blog I am going to write about my project, the
              technologies I used, and insights gained. I aim to create less of
              an organized blog and more of a collection of thoughts and ideas
              in a micro-blogging and digital garden style.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="p-4 border-l-2 border-neutral-700 hover:bg-neutral-800/30 transition-colors rounded mx-2 sm:mx-12"
              >
                <h2 className="text-2xl font-bold text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-400 mb-3">{post.date}</p>
                <p className="text-neutral-300 mb-4">{post.summary}</p>
                <div className="flex gap-2">
                  <TechnologyBlobs technologies={post.tags} />
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {blogPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-400">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </IntroAnimation>
      </div>
    </section>
  );
};

export default Blog;
