import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import News from './news';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';
import LoadingButton from './progress';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const Home = (props) => {
  const [loading, setLoading] = useState(false);
  function getInfo(event) {
    if (event.key === "Enter") {
      setLoading(true);
      event.preventDefault();
      props.setSearchString(event.target.value);
      props.getSearchResults(event.target.value);
      setLoading(false);
    }
  }

  return (
    <Container>
      <br /><br /><br />
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          onKeyDown={e => getInfo(e)}
        />
      </Search>
      <LoadingButton loading={loading} done={loading} />
      <News />
    </Container>
  );
};


function mapStateToProps(state) {
  return { data: state };
}

export default connect(mapStateToProps, actions)(Home);
