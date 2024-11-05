import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/installation", "getting-started/quick-start"],
    },
    {
      type: "category",
      label: "Fundamentals",
      items: [
        "fundamentals/variables",
        "fundamentals/conditionals",
        "fundamentals/loops",
        "fundamentals/functions",
      ],
    },
  ],
};

export default sidebars;
