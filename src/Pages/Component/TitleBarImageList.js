import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
    return (
        <ImageList className='title' sx={{ width: 1200, height: 600 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader className='text' component="div">Food Item Of Weeding Hall</ListSubheader>
            </ImageListItem>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.title}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://img.freepik.com/free-photo/closeup-shot-restaurant-menu-set-black-plates-perfect-food-background_181624-58554.jpg?w=1380&t=st=1673538379~exp=1673538979~hmac=60070f4d87c3005b999cb276fa38bc87fdcfcfd0ae2d870be6648626a6947a24',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://img.freepik.com/free-photo/thanksgiving-day-delicious-meal-assortment_23-2149100109.jpg?w=1380&t=st=1673538410~exp=1673539010~hmac=ee7ad4d415a25b6a4e64a2eaf48ed3f6c078c8f6def93e3fb2263e4877957c83',
        title: 'Food',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://img.freepik.com/free-photo/delicious-fish-rolls-canape-with-red-caviar-served-plates_132075-13059.jpg?w=1380&t=st=1673537242~exp=1673537842~hmac=6b69a30cc9186a42a8622b944dedc5b597684971984ce8a80d8181e77b596a16',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://img.freepik.com/free-photo/chicken-steak-with-lemon-tomato-chili-carrot-white-plate_1150-25886.jpg?w=1380&t=st=1673537267~exp=1673537867~hmac=9f4f8c19e7b3c2ab9bf8934ace7f1d0b6d74b4694f2ce4731cc518e51b68aa3c',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://img.freepik.com/free-photo/prawns_1157-530.jpg?w=1380&t=st=1673538318~exp=1673538918~hmac=ddc7293e20ebccd585a7448e8f80049e1d24f2f0634bb4db257f8548772e0a46',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://img.freepik.com/free-photo/happy-businesswomen-serving-food-while-preparing-christmas-party-office_637285-9823.jpg?w=1380&t=st=1673537343~exp=1673537943~hmac=5a338f030df969988822f7650b9059c65885820f91ca33a4b4063cedd0a6d610',
        title: 'Food',
        author: '@southside_customs',
        cols: 2,
    },
];