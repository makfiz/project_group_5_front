import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchNoticesByCategory } from 'redux/notices/operations';
import { selectNotices } from 'redux/notices/selectors';
import { endPoints } from 'constants/EndPoints';

import { Box } from 'components/Box/Box';
import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { NoticesAddPetButtonMobile } from 'components/NoticesAddPetButtonMobile/NoticesAddPetButtonMobile';
import { ListWrap, List, ListItem } from './NoticesList.styled';

export const NoticesList = ({ askedPage }) => {
  const dispatch = useDispatch();
  const ads = useSelector(selectNotices);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1000);

  useEffect(() => {
    const controller = new AbortController();

    switch (askedPage) {
      case 'sell':
        dispatch(
          fetchNoticesByCategory({
            path: endPoints.pathSell,
            params: { page, limit, search },
          })
        );
        break;
      case 'lost_found':
        dispatch(
          fetchNoticesByCategory({
            path: endPoints.pathLostFound,
            params: { page, limit, search },
          })
        );
        break;
      case 'in_good_hands':
        dispatch(
          fetchNoticesByCategory({
            path: endPoints.pathInGoodHands,
            params: { page, limit, search },
          })
        );
        break;
      default:
        return;
    }

    return () => {
      controller.abort();
    };
  }, [dispatch, limit, page, askedPage, search]);

  if (ads.length === 0) return;
  return (
    <Box display="flex" justifyContent="center">
      <ListWrap>
        <List>
          {ads.map(ad => (
            <ListItem key={ad._id}>
              <NoticesListItem ad={ad} />
            </ListItem>
          ))}
        </List>
      </ListWrap>
      <NoticesAddPetButtonMobile />
    </Box>
  );
};
