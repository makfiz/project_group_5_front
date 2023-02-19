import { Box } from 'components/Box/Box';
import { ListWrap, List, ListItem } from './NoticesList.styled';
import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { NoticesAddPetButtonMobile } from 'components/NoticesAddPetButtonMobile/NoticesAddPetButtonMobile';

export const NoticesList = () => {
  return (
    <Box display="flex" justifyContent="center">
      <ListWrap>
        <List>
          <ListItem>
            <NoticesListItem />
          </ListItem>
          <ListItem>
            <NoticesListItem />
          </ListItem>
          <ListItem>
            <NoticesListItem />
          </ListItem>
          <ListItem>
            <NoticesListItem />
          </ListItem>
          <ListItem>
            <NoticesListItem />
          </ListItem>
        </List>
      </ListWrap>
      <NoticesAddPetButtonMobile />
    </Box>
  );
};
