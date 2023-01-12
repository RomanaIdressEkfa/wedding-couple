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
        img: 'https://img.freepik.com/free-photo/tasty-creamy-desserts-decorated-with-strawberry-slices-tiramisu_8353-11508.jpg?w=1380&t=st=1673537068~exp=1673537668~hmac=bc792fc0b754c3514b548cb03e62ea76b64bdffcdca5f4eadcacde74f291fe30',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://img.freepik.com/premium-photo/self-service-restaurant_538646-9464.jpg?w=1800',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://img.freepik.com/premium-photo/appetizing-snacks-buffet-table-holidays-celebrations-business-meetings_120897-3926.jpg?w=1380',
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
        img: 'https://img.freepik.com/premium-photo/concept-tasty-eating-with-caesar-salad-white-background_185193-47238.jpg?w=1380',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://img.freepik.com/premium-photo/appetizers-wedding-reception-gourmet-bruschetta-with-pate-zucchini-tomato-cucumber-herbs_273094-1088.jpg?w=1380',
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