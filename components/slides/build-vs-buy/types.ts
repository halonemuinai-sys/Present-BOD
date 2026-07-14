export type ToolLink = { name: string; domain: string; url: string };

export type LineItem = { title: string; subtitle: string; price: string; tools?: ToolLink[] };

export type PanelTotal = { price: string; note: string };

export type SummaryStat = { value: string; label: string };
