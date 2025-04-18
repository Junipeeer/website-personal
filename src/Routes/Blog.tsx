import { TechnologyBlobs } from "../components/project helpers/Blobs";
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
    date: "18. April 2025",
    summary:
      "My blog is currently a work in progress. I will be writing about my experiences and sharing insights from my projects. My firsts posts will be about this website and a few smaller projects I am working on or planning. Currently I am hosting this page on github pages, which means that adding blog pages manually is a bit tedious, so I plan to use WordPress or a similar service",
    tags: ["WIP", "Getting there", "Placeholder"],
    slug: "placeholder-and-wip",
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <section className="page-wrapper">
      <div className="content-wrapper">
        <IntroAnimation className="space-y-8">
          {/* Header Section */}
          <div className="space-y-6 border-b-2 border-[#74e6e6] p-6">
            <h1 className="text-4xl font-bold text-white">Blog</h1>
            <p className="text-lg leading-relaxed text-neutral-300">
              Here I write about my experiences with different technologies and
              share insights from my projects.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="p-6 border-l-2 border-neutral-700 hover:bg-neutral-800/30 transition-colors rounded"
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
