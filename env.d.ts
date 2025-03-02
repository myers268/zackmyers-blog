// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="react-router" />
/// <reference types="vite/client" />

declare module "*.mdx" {
  const MDXComponent: (props: any) => JSX.Element;
  export const frontmatter: any;
  export default MDXComponent;
}

declare module "virtual:react-router/server-build" {
  import type { ServerBuild } from "react-router";
  export const routes: ServerBuild["routes"];
}
