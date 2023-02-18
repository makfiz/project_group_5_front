import React from 'react';
import { Box } from 'components/Box/Box';
import {
  ListWrap,
  List,
  ListItem,
  ImgWrap,
  Img,
  ImgBadge,
  AddInFavoriteBtn,
  TextWrap,
  Title,
  ListsWrap,
  DescriptionFieldList,
  DescriptionDefinitionList,
  DescriptionItem,
  DescriptionText,
  CardButtonWrap,
  LearnMoreLink,
  DeleteButton,
  DeleteButtonText,
  AddPetMobileButton,
  AddPetMobileButtonText,
} from './NoticesList.styled';
import imgExample from '../../assets/cardExample.jpg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';
import { ReactComponent as Favorite } from '../../assets/icons/Favorite.svg';
import { ReactComponent as PlusIconMobile } from '../../assets/icons/plusIconMobile.svg';

export const NoticesList = () => {
  // TODO: own parametr to render card delete button
  const own = true;
  return (
    <Box display="flex" justifyContent="center">
      <ListWrap>
        <List>
          <ListItem>
            <ImgWrap>
              <Img src={imgExample} alt="pet" />
              <ImgBadge>in good hands</ImgBadge>
              <AddInFavoriteBtn type="button">
                <Favorite />
              </AddInFavoriteBtn>
            </ImgWrap>

            <TextWrap>
              <Title>Сute dog looking for a home</Title>
              <ListsWrap>
                <DescriptionFieldList>
                  <DescriptionItem>
                    <DescriptionText>Breed:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Place:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Age:</DescriptionText>
                  </DescriptionItem>
                </DescriptionFieldList>

                <DescriptionDefinitionList>
                  <DescriptionItem>
                    <DescriptionText>Pomeranian</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Lviv</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>one year</DescriptionText>
                  </DescriptionItem>
                </DescriptionDefinitionList>
              </ListsWrap>
              <CardButtonWrap own={own}>
                <LearnMoreLink>Learn more</LearnMoreLink>
                {own && (
                  <DeleteButton type="button">
                    <DeleteButtonText>Delete</DeleteButtonText>
                    <DeleteIcon />
                  </DeleteButton>
                )}
              </CardButtonWrap>
            </TextWrap>
          </ListItem>

          <ListItem>
            <ImgWrap>
              <Img src={imgExample} alt="pet" />
              <ImgBadge>in good hands</ImgBadge>
              <AddInFavoriteBtn type="button">
                <Favorite />
              </AddInFavoriteBtn>
            </ImgWrap>

            <TextWrap>
              <Title>Сute dog looking for a home</Title>
              <ListsWrap>
                <DescriptionFieldList>
                  <DescriptionItem>
                    <DescriptionText>Breed:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Place:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Age:</DescriptionText>
                  </DescriptionItem>
                </DescriptionFieldList>

                <DescriptionDefinitionList>
                  <DescriptionItem>
                    <DescriptionText>Pomeranian</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Lviv</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>one year</DescriptionText>
                  </DescriptionItem>
                </DescriptionDefinitionList>
              </ListsWrap>
              <CardButtonWrap own={own}>
                <LearnMoreLink>Learn more</LearnMoreLink>
                {own && (
                  <DeleteButton type="button">
                    <DeleteButtonText>Delete</DeleteButtonText>
                    <DeleteIcon />
                  </DeleteButton>
                )}
              </CardButtonWrap>
            </TextWrap>
          </ListItem>

          <ListItem>
            <ImgWrap>
              <Img src={imgExample} alt="pet" />
              <ImgBadge>in good hands</ImgBadge>
              <AddInFavoriteBtn type="button">
                <Favorite />
              </AddInFavoriteBtn>
            </ImgWrap>

            <TextWrap>
              <Title>Сute dog looking for a home</Title>
              <ListsWrap>
                <DescriptionFieldList>
                  <DescriptionItem>
                    <DescriptionText>Breed:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Place:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Age:</DescriptionText>
                  </DescriptionItem>
                </DescriptionFieldList>

                <DescriptionDefinitionList>
                  <DescriptionItem>
                    <DescriptionText>Pomeranian</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Lviv</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>one year</DescriptionText>
                  </DescriptionItem>
                </DescriptionDefinitionList>
              </ListsWrap>
              <CardButtonWrap own={own}>
                <LearnMoreLink>Learn more</LearnMoreLink>
                {own && (
                  <DeleteButton type="button">
                    <DeleteButtonText>Delete</DeleteButtonText>
                    <DeleteIcon />
                  </DeleteButton>
                )}
              </CardButtonWrap>
            </TextWrap>
          </ListItem>

          <ListItem>
            <ImgWrap>
              <Img src={imgExample} alt="pet" />
              <ImgBadge>in good hands</ImgBadge>
              <AddInFavoriteBtn type="button">
                <Favorite />
              </AddInFavoriteBtn>
            </ImgWrap>

            <TextWrap>
              <Title>Сute dog looking for a home</Title>
              <ListsWrap>
                <DescriptionFieldList>
                  <DescriptionItem>
                    <DescriptionText>Breed:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Place:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Age:</DescriptionText>
                  </DescriptionItem>
                </DescriptionFieldList>

                <DescriptionDefinitionList>
                  <DescriptionItem>
                    <DescriptionText>Pomeranian</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Lviv</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>one year</DescriptionText>
                  </DescriptionItem>
                </DescriptionDefinitionList>
              </ListsWrap>
              <CardButtonWrap own={own}>
                <LearnMoreLink>Learn more</LearnMoreLink>
                {own && (
                  <DeleteButton type="button">
                    <DeleteButtonText>Delete</DeleteButtonText>
                    <DeleteIcon />
                  </DeleteButton>
                )}
              </CardButtonWrap>
            </TextWrap>
          </ListItem>

          <ListItem>
            <ImgWrap>
              <Img src={imgExample} alt="pet" />
              <ImgBadge>in good hands</ImgBadge>
              <AddInFavoriteBtn type="button">
                <Favorite />
              </AddInFavoriteBtn>
            </ImgWrap>

            <TextWrap>
              <Title>Сute dog looking for a home</Title>
              <ListsWrap>
                <DescriptionFieldList>
                  <DescriptionItem>
                    <DescriptionText>Breed:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Place:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Age:</DescriptionText>
                  </DescriptionItem>
                </DescriptionFieldList>

                <DescriptionDefinitionList>
                  <DescriptionItem>
                    <DescriptionText>Pomeranian</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Lviv</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>one year</DescriptionText>
                  </DescriptionItem>
                </DescriptionDefinitionList>
              </ListsWrap>
              <CardButtonWrap own={own}>
                <LearnMoreLink>Learn more</LearnMoreLink>
                {own && (
                  <DeleteButton type="button">
                    <DeleteButtonText>Delete</DeleteButtonText>
                    <DeleteIcon />
                  </DeleteButton>
                )}
              </CardButtonWrap>
            </TextWrap>
          </ListItem>

          <ListItem>
            <ImgWrap>
              <Img src={imgExample} alt="pet" />
              <ImgBadge>in good hands</ImgBadge>
              <AddInFavoriteBtn type="button">
                <Favorite />
              </AddInFavoriteBtn>
            </ImgWrap>

            <TextWrap>
              <Title>Сute dog looking for a home</Title>
              <ListsWrap>
                <DescriptionFieldList>
                  <DescriptionItem>
                    <DescriptionText>Breed:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Place:</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Age:</DescriptionText>
                  </DescriptionItem>
                </DescriptionFieldList>

                <DescriptionDefinitionList>
                  <DescriptionItem>
                    <DescriptionText>Pomeranian</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>Lviv</DescriptionText>
                  </DescriptionItem>
                  <DescriptionItem>
                    <DescriptionText>one year</DescriptionText>
                  </DescriptionItem>
                </DescriptionDefinitionList>
              </ListsWrap>
              <CardButtonWrap own={own}>
                <LearnMoreLink>Learn more</LearnMoreLink>
                {own && (
                  <DeleteButton type="button">
                    <DeleteButtonText>Delete</DeleteButtonText>
                    <DeleteIcon />
                  </DeleteButton>
                )}
              </CardButtonWrap>
            </TextWrap>
          </ListItem>
        </List>
      </ListWrap>
      <AddPetMobileButton type="button">
        <AddPetMobileButtonText>Add pet</AddPetMobileButtonText>
        <PlusIconMobile />
      </AddPetMobileButton>
    </Box>
  );
};
