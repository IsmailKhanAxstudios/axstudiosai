import Markdown from "react-markdown";

export default function ArticleBody({ content }: { content: string }) {
  return (
    <div className="space-y-4 break-words leading-relaxed text-secondary-text [&_a]:text-foreground [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-line [&_blockquote]:pl-4 [&_code]:rounded [&_code]:bg-field [&_code]:px-1 [&_h2]:pt-4 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:pt-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h4]:font-semibold [&_h4]:text-foreground [&_ol]:list-decimal [&_ol]:pl-6 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:bg-field [&_pre]:p-4 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-6">
      <Markdown
        skipHtml
        disallowedElements={["img"]}
        components={{ h1: ({ children }) => <h2>{children}</h2> }}
      >
        {content}
      </Markdown>
    </div>
  );
}
