import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchNoticesByCategory } from 'redux/notices/operations';

import { Box } from 'components/Box/Box';
import { ListWrap, List, ListItem } from './NoticesList.styled';
import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { NoticesAddPetButtonMobile } from 'components/NoticesAddPetButtonMobile/NoticesAddPetButtonMobile';
import { endPoints } from 'constants/EndPoints';

export const NoticesList = ({ search }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [value, setValue] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    switch (search) {
      case 'sell':
        dispatch(
          fetchNoticesByCategory({
            path: endPoints.pathSell,
            params: { page, limit, search: value },
          })
        );
        break;
      case 'lost_found':
        dispatch(
          fetchNoticesByCategory({
            path: endPoints.pathLostFound,
            params: { page, limit },
          })
        );
        break;
      case 'in_good_hands':
        dispatch(
          fetchNoticesByCategory({
            path: endPoints.pathInGoodHands,
            params: { page, limit },
          })
        );
        break;
      default:
        return;
    }

    return () => {
      controller.abort();
    };
  }, [dispatch, limit, page, search]);

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
