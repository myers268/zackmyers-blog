import { getPosts } from "#app/server/posts";
import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Zack Myers' Blog" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return {
    posts: await getPosts(),
  }
}

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div>
      {posts.map(({ frontmatter, slug }) => (
        <div key={slug} className="flex flex-col">
          <Link to={slug} className="underline decoration-emphasis">
            <h4>{frontmatter.title}</h4>
          </Link>
          <p>{frontmatter.description}</p>
          <time className="text-[oklch(var(--lichen-400-oklch))] text-xs">{frontmatter.published}</time>
        </div>
      ))}
    </div>
  );
}
