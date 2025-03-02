import { getPosts } from "#app/server/posts";
import type { MetaFunction } from "react-router";
import { Link } from "react-router";

import type { Route } from "./+types/_layout._index";

export const meta: MetaFunction = () => {
  return [
    { title: "Zack Myers' Blog" },
    { name: "description", content: "Musings on software engineering and sometimes other topics." },
  ];
};

export async function loader() {
  return {
    posts: await getPosts(),
  }
}

export default function Index({ loaderData }: Route.ComponentProps) {
  const { posts } = loaderData;

  return (
    <div>
      {posts.map(({ frontmatter, slug }) => (
        <div key={slug} className="flex flex-col">
          <Link to={slug} className="underline decoration-emphasis">
            <h4>{frontmatter.title}</h4>
          </Link>
          <p>{frontmatter.description}</p>
          <time className="text-subtle-foreground text-xs">{frontmatter.published}</time>
        </div>
      ))}
    </div>
  );
}
