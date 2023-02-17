import {
    Article, 
    Divider,
    ArticleTitle,
    ArticleText
} from './NewsItem.styled';

export function NewsItem({ article }) {
  const { title, url, description, date } = article;

  function cutter(type, text) {
    switch(type) {
        case "title":
            return text.slice(0, 45);
        case "text":
            return text.slice(0, 231);
        default: return null;
    }
  }

  return (
      <Article>
        <Divider></Divider>
        <ArticleTitle>{cutter("title", title)}</ArticleTitle>
        <ArticleText>{cutter("text", description)}</ArticleText>
        <p>
          <span>{date}</span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </p>
      </Article>
  );
}
