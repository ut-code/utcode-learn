import MDXComponents from "@theme-original/MDXComponents";

/* 
Export components in this file,
and they become available on every page.
cf. https://docusaurus.io/docs/markdown-features/react#mdx-component-scope
*/

// libraries
import Details from "@theme/Details";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

// custom components
import Answer from "@site/src/components/Answer";
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";

export default {
  // Re-use the default mapping
  ...MDXComponents,

  // export libraries
  Details,
  Tabs,
  TabItem,
  CodeBlock,

  // export custom Components
  Answer,
  Term,
  ViewSource,
  ExternalVideoPlayer,
};
