import {
    Article, 
    Divider,
    ArticleTitle,
    TextPreview,
    ArticleText,
    ArticleDate,
    Details,
    ReadMoreLink,
} from './NewsItem.styled';

export function NewsItem({ article }) {
  const { title, url, description, date } = article;

  // function cutter(type, text) {
  //   switch(type) {
  //       case "title":
  //           return text.slice(0, 45);
  //       case "text":
  //           return text.slice(0, 231);
  //       default: return null;
  //   }
  // }

  function convertData(date){
    let updatedDate = "01/01/1999"
    if (date) {
      const articleDate = new Date(date);
      const year = articleDate.getFullYear();
      const month = () => {
        let artMonth = articleDate.getMonth() + 1;
        return artMonth <= 9 ? 
          "0" + artMonth : artMonth
      }
      const day = () => {
        let artDay = articleDate.getDate()
        return artDay <= 9 ? 
          "0" + artDay : artDay
      }
      updatedDate = `${year}/${month()}/${day()}`
    }
    return updatedDate;
  }

  return (
      <Article>
        <Divider></Divider>
        <ArticleTitle>{title}</ArticleTitle>
        <TextPreview>
        <ArticleText>{description}</ArticleText>

        </TextPreview>
        <Details>
          <ArticleDate>{convertData(date)}</ArticleDate>
          <ReadMoreLink href={url} target="_blank" rel="noopener noreferrer">
            Read more
          </ReadMoreLink>
        </Details>
      </Article>
  );
}
