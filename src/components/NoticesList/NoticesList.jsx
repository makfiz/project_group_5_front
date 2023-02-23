import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import {
  selectTotalPages,
  selectIsLoadingNotices,
  selectIsNoticesError,
} from 'redux/notices/selectors';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

import {
  selectNotices,
  selectNoticesSearchQuery,
} from 'redux/notices/selectors';
import { endPoints } from 'constants/EndPoints';

import {
  fetchRoute,
  fetchFavoriteRoute,
  fetchOwnRoute,
} from 'utils/fetchNoticesRoute';

import { Box } from 'components/Box/Box';
import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { NoticesAddPetButtonMobile } from 'components/NoticesAddPetButtonMobile/NoticesAddPetButtonMobile';
import {
  ListWrap,
  List,
  ListItem,
  LoaderContainer,
  LoaderWrap,
  InformationText,
} from './NoticesList.styled';

export const NoticesList = ({ askedPage }) => {
  const dispatch = useDispatch();
  const ads = useSelector(selectNotices);
  const totalPages = useSelector(selectTotalPages);
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = endPoints.limit;
  const search = useSelector(selectNoticesSearchQuery);
  const page = searchParams.get('page');

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
        if (!isLoggedIn) return navigate('/notices/sell', { replace: true });
        fetchFavoriteRoute(commonParams, {
          path: `${endPoints.pathFavorites}${userId}${endPoints.noticesFavorite}`,
          controller,
        });

        break;
      case 'own':
        if (!isLoggedIn) return navigate('/notices/sell', { replace: true });
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

  const navigate = useNavigate();
  const { id: userId } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoadingNotices);
  const error = useSelector(selectIsNoticesError);
  const isRefreshing = useSelector(selectIsRefreshing);
  const showNotices = ads.length > 0 && !error && !isRefreshing;
  const noNotices = ads.length === 0 && !isLoading && !error && !isRefreshing;
  const showLoader = isLoading || isRefreshing;
  const errorMessage = error && !isLoading && !isRefreshing;

  return (
    <>
      {showLoader && (
        <LoaderContainer>
          <LoaderWrap>
            <BarLoader color="#F59256" height={4} width={'100%'} />
          </LoaderWrap>
        </LoaderContainer>
      )}
      {showNotices && (
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
      {noNotices && (
        <Box display="flex" justifyContent="center">
          <InformationText>...no notices yet</InformationText>
        </Box>
      )}
      {errorMessage && (
        <Box display="flex" justifyContent="center">
          <InformationText>{error.message}</InformationText>
        </Box>
      )}
    </>
  );
};
