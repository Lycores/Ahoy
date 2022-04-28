import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import {
  GridSpaceStyle,
  CardContainerStyle,
  CardCoverStyle,
} from "./ReusableStyleComp.js";
const PlaylistNameStyle = styled.div`
  margin-left: 7px;
  margin-top: 10px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: x-large;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const AlbumNameStyle = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: x-large;
  margin-left: 7px;
  margin-top: 10px;
`;

const ArtistsNameStyle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: x-large;
  margin-left: 7px;
  margin-top: 10px;
`;

const ArtistFromAlbumStyle = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: medium;
  margin-left: 7px;
  margin-top: 5px;
`;
const UniversalCardComp = React.memo((props) => {
  var { item, type } = props;
  const navigate = useNavigate();

  const goToAlbumPage = () => {
    navigate("/traditional/album", {
      state: {
        album: item,
      },
    });
  };

  const goToArtistPage = () => {
    navigate("/traditional/artists", {
      state: {
        artist: item,
      },
    });
  };

  const goToPlaylistPage = () => {
    navigate("/traditional/playlist", {
      state: {
        playlist: item,
      },
    });
  };

  if (type == "album") {
    return (
      <GridSpaceStyle onClick={goToAlbumPage}>
        <CardContainerStyle>
          <CardCoverStyle imageUrl={item.images[1].url} />
          <AlbumNameStyle>{item.name}</AlbumNameStyle>
          <ArtistFromAlbumStyle></ArtistFromAlbumStyle>
          <ArtistFromAlbumStyle>{item.artists[0].name}</ArtistFromAlbumStyle>
        </CardContainerStyle>
      </GridSpaceStyle>
    );
  }
  if (type == "artists") {
    return (
      <GridSpaceStyle onClick={goToArtistPage}>
        <CardContainerStyle>
          <CardCoverStyle imageUrl={item.images[1].url} />
          <ArtistsNameStyle>{item.name}</ArtistsNameStyle>
        </CardContainerStyle>
      </GridSpaceStyle>
    );
  }
  if (type == "playlist") {
    return (
      <GridSpaceStyle>
        <CardContainerStyle>
          {item.images.length == 0 ? (
            <CardCoverStyle onClick={goToPlaylistPage} />
          ) : (
            <CardCoverStyle
              imageUrl={item.images[0].url}
              onClick={goToPlaylistPage}
            />
          )}
          <PlaylistNameStyle>{item.name}</PlaylistNameStyle>
        </CardContainerStyle>
      </GridSpaceStyle>
    );
  }
});

export default UniversalCardComp;
