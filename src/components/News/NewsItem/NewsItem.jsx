import {} from './NewsItem.styled';

export function NewsItem({ article }) {
  const { title, url, description, date } = article;

  return (
      <article>
        <div></div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          <span>{date}</span>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </p>
      </article>
  );
}
