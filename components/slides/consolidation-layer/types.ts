export type SystemBoxData = { title: string };

export type ComparisonColumn = {
  label: string;
  title: string;
  subtitle: string;
  accent: "amber" | "green";
  steps: string[];
  bullets: string[];
};
