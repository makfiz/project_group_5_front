import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { selectTotalPages } from 'redux/notices/selectors';

import {
  fetchNoticesByCategory,
  fetchFavoriteNotices,
} from 'redux/notices/operations';
import { selectNotices } from 'redux/notices/selectors';
import { endPoints } from 'constants/EndPoints';
import { calculateCurrentPage } from 'utils/calculateNoticesPage';

import { Box } from 'components/Box/Box';
import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { NoticesAddPetButtonMobile } from 'components/NoticesAddPetButtonMobile/NoticesAddPetButtonMobile';
import { ListWrap, List, ListItem } from './NoticesList.styled';

export const NoticesList = ({ askedPage }) => {
  const dispatch = useDispatch();
  const ads = useSelector(selectNotices);
  const totalPages = useSelector(selectTotalPages);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const page = searchParams.get('page');
  const limit = searchParams.get('limit') ?? endPoints.limit;

  const currentSearchParams = search !== '' ? { page: 1, search } : { page: 1 };
  const nextSearchParams = search !== '' ? { page, search } : { page };
  const lastSearchParams =
    search !== '' ? { page: totalPages, search } : { page: totalPages };

  // TODO: own parametr to render card delete button
  const userId = '63ef3ab7764df6f672fdc7cc';

  useEffect(() => {
    const controller = new AbortController();

    switch (askedPage) {
      case 'sell':
        dispatch(
          fetchNoticesByCategory({
            path: endPoints.pathSell,
            params: { page, limit, search },
            controller,
          })
        );

        if (!page) return setSearchParams(currentSearchParams);
        if (totalPages === 0) return;
        if (page > totalPages) return setSearchParams(lastSearchParams);
        if (page <= totalPages) return setSearchParams(nextSearchParams);

        break;
      case 'lost_found':
        dispatch(
          fetchNoticesByCategory({
            path: endPoints.pathLostFound,
            params: { page, limit, search },
            controller,
          })
        );

        if (!page) return setSearchParams(currentSearchParams);
        if (totalPages === 0) return;
        if (page > totalPages) return setSearchParams(lastSearchParams);
        if (page <= totalPages) return setSearchParams(nextSearchParams);
        break;
      case 'in_good_hands':
        dispatch(
          fetchNoticesByCategory({
            path: endPoints.pathInGoodHands,
            params: { page, limit, search },
            controller,
          })
        );

        if (!page) return setSearchParams(currentSearchParams);
        if (totalPages === 0) return;
        if (page > totalPages) return setSearchParams(lastSearchParams);
        if (page <= totalPages) return setSearchParams(nextSearchParams);
        break;
      case 'favorite':
        dispatch(
          fetchFavoriteNotices({
            path: `${endPoints.pathFavorites}${userId}${endPoints.noticesFavorite}`,
            params: { search },
            controller,
          })
        );
        setSearchParams(search ? { search } : {});
        break;
      case 'own':
        dispatch(
          fetchFavoriteNotices({
            path: `${endPoints.pathOwn}${userId}`,
            params: { search },
            controller,
          })
        );
        setSearchParams(search ? { search } : {});
        break;
      default:
        return;
    }

    return () => {
      controller.abort();
    };
  }, [dispatch, limit, page, askedPage, search, ads.length, totalPages]);

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
