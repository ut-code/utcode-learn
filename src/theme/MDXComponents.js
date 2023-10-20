import React from "react"; // idk if I really need it here, but docusaurus had it so I won't be deleting it until I understand everything
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";

/* 
This JS file is automatically imported on every page
Paste your custom component here, and you can use it everywhere!
*/

// Write down Libraries here
import Details from "@theme/Details";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
// what's codeblock and why is it imported EVERYWHERE?
//  i only find one being used in team-dev/fixing-conflict

/*-------------------------------------------
|                EDIT HERE                  |
|  import your custom components down here! |
-------------------------------------------*/
import Answer from "@site/src/components/Answer";
import Term from "@site/src/components/Term";
import ViewSource from "@site/src/components/ViewSource";
import ExternalVideoPlayer from "@site/src/components/ExternalVideoPlayer";

// exporting
export default {
  // Re-use the default mapping
  ...MDXComponents,

  // export Libs
  Details,
  Tabs,
  TabItem,
  CodeBlock,

  /*-------------------------------------------
  |                EDIT HERE                  |
  |  export your custom components down here  |
  -------------------------------------------*/
  // export custom Components
  Answer,
  Term,
  ViewSource,
  ExternalVideoPlayer,
};
