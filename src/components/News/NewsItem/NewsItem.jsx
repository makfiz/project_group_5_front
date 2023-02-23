import EllipsisText from 'react-ellipsis-text';
import { convertDate } from 'utils/convertDate';
import {
  Article,
  Divider,
  ArticleTitle,
  ArticleText,
  ArticleDate,
  Details,
  ReadMoreLink,
} from './NewsItem.styled';

export function NewsItem({ article }) {
  const { title, url, description, date } = article;

  return (
    <Article>
      <Divider></Divider>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleText>
        <EllipsisText text={description} length={230} />
      </ArticleText>
      <Details>
        <ArticleDate>{convertDate(date)}</ArticleDate>
        <ReadMoreLink href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </ReadMoreLink>
      </Details>
    </Article>
  );
}
