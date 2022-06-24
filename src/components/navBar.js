import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
import { connect } from 'react-redux';
import * as actions from '../actions';




const extractHeadlines = (headlines) => {
    return [...new Set(headlines?.articles.map(headline => headline.source.name))]
}

const SearchAppBar = (props) => {
    const pages = extractHeadlines(props?.data?.headlines) || [];
    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages?.map((page) => (
                                <MenuItem key={page}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}



function mapStateToProps(state) {
    return { data: state.headlines };
}

export default connect(mapStateToProps, actions)(SearchAppBar);