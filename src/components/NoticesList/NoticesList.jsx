import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { selectTotalPages } from 'redux/notices/selectors';

import {
  selectNotices,
  selectNoticesSearchQuery,
} from 'redux/notices/selectors';
import { endPoints } from 'constants/EndPoints';
import { setQueryValue } from 'redux/notices/searchQuerySlice';

import {
  fetchRoute,
  fetchFavoriteRoute,
  fetchOwnRoute,
} from 'utils/fetchNoticesRoute';

import { Box } from 'components/Box/Box';
import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { NoticesAddPetButtonMobile } from 'components/NoticesAddPetButtonMobile/NoticesAddPetButtonMobile';
import { ListWrap, List, ListItem } from './NoticesList.styled';

export const NoticesList = ({ askedPage }) => {
  const dispatch = useDispatch();
  const ads = useSelector(selectNotices);
  const totalPages = useSelector(selectTotalPages);

  const [searchParams, setSearchParams] = useSearchParams();
  const limit = endPoints.limit;
  const search = useSelector(selectNoticesSearchQuery);
  const page = searchParams.get('page');

  // TODO: own parametr to render card delete button
  const userId = '63ef3ab7764df6f672fdc7cc';

  useEffect(() => {
    const controller = new AbortController();
    const commonParams = {
      page,
      search,
      limit,
      totalPages,
      dispatch,
      setSearchParams,
    };

    switch (askedPage) {
      case 'sell':
        fetchRoute(commonParams, { path: endPoints.pathSell, controller });
        break;
      case 'lost_found':
        fetchRoute(commonParams, { path: endPoints.pathLostFound, controller });

        break;
      case 'in_good_hands':
        fetchRoute(commonParams, {
          path: endPoints.pathInGoodHands,
          controller,
        });
        break;
      case 'favorite':
        fetchFavoriteRoute(commonParams, {
          path: `${endPoints.pathFavorites}${userId}${endPoints.noticesFavorite}`,
          controller,
        });

        break;
      case 'own':
        fetchOwnRoute(commonParams, {
          path: `${endPoints.pathOwn}${userId}`,
          controller,
        });

        break;
      default:
        return;
    }

    return () => {
      controller.abort();
    };
  }, [dispatch, limit, search, page, askedPage, ads.length, totalPages]);

  return (
    <>
      {ads.length > 0 && (
        <Box display="flex" justifyContent="center">
          <ListWrap>
            <List>
              {ads.map(ad => (
                <ListItem key={ad._id}>
                  <NoticesListItem ad={ad} askedPage={askedPage} />
                </ListItem>
              ))}
            </List>
          </ListWrap>
          <NoticesAddPetButtonMobile />
        </Box>
      )}
    </>
  );
};
