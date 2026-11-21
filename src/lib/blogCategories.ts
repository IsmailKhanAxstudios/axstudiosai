const editorialCategories = [
  "AI Innovation",
  "Business",
  "Commodities",
  "Economy",
  "Entrepreneurship",
  "Finance",
  "Investing",
  "Leadership",
  "Personal Finance",
  "Real Estate",
  "Startups",
  "Stocks",
  "Technology",
];

export function getBlogCategories(existing: string[]) {
  const categories = new Map(editorialCategories.map((topic) => [topic.toLowerCase(), topic]));
  for (const topic of existing) {
    const key = topic.toLowerCase();
    if (!categories.has(key)) categories.set(key, topic);
  }
  return [...categories.values()].sort((a, b) => a.localeCompare(b));
}
