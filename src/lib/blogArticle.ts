const tagPrefix = "<!-- axstudios-tags: ";
const tagSuffix = " -->";

export function parseBlogTags(value: string) {
  const tags = value.split(",").map((tag) => tag.trim()).filter(Boolean);
  const unique = new Map<string, string>();
  for (const tag of tags) {
    const key = tag.toLowerCase();
    if (!unique.has(key)) unique.set(key, tag);
  }
  return [...unique.values()];
}

const eventPrefix = "<!-- axstudios-event-date: ";

export function validBlogEventDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    new Date(value).toJSON()?.slice(0, 10) === value && !value.startsWith("0000-");
}

const eventDateFormatter = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeZone: "UTC" });

export function formatBlogEventDate(value: string) {
  return eventDateFormatter.format(new Date(value));
}

export function serializeBlogArticle(body: string, tags: string[], eventDate?: string) {
  const article = tags.length ? tagPrefix + tags.join(", ") + tagSuffix + "\n\n" + body : body;
  return eventDate ? eventPrefix + eventDate + tagSuffix + "\n\n" + article : article;
}

function readHeader(content: string, prefix: string) {
  const end = content.indexOf("\n\n");
  const header = content.slice(0, end);
  if (end < 0 || !header.startsWith(prefix) || !header.endsWith(tagSuffix)) {
    return { body: content, value: "" };
  }
  return { body: content.slice(end + 2), value: header.slice(prefix.length, -tagSuffix.length) };
}

export function parseBlogArticle(content: string) {
  const event = readHeader(content, eventPrefix);
  const article = readHeader(event.body, tagPrefix);
  return {
    body: article.body,
    tags: parseBlogTags(article.value),
    eventDate: validBlogEventDate(event.value) ? event.value : undefined,
  };
}
