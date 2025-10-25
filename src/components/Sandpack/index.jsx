import { Sandpack as SandpackBase } from "@codesandbox/sandpack-react";

/**
 * Interactive code editor using Sandpack
 */
export default function Sandpack({
  files = {},
  template = "static",
  theme = "auto",
  options = {},
  customSetup = {},
  ...props
}) {
  return (
    <SandpackBase
      files={files}
      template={template}
      theme={theme}
      options={{
        showNavigator: false,
        showTabs: false,
        showLineNumbers: true,
        editorHeight: 350,
        ...options,
      }}
      customSetup={customSetup}
      {...props}
    />
  );
}
