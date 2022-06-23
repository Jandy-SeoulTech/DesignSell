import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

function ListSquareEle(props) {
  const type = props.type;
  const {id, company, name, productionThumbnailImage, price, like} = props.item;
  const size = props.size;
  const linkUrl = `/${type}/${id}`
  return (
    <Link to={linkUrl}>
      <Box sx={{ maxWidth: size, pb: 2 }}>
        <Box
        component="img"
          sx={{width: size,
            height: size,
          }} src={productionThumbnailImage}
        />
        <Box sx={{p: '12px'}}>
        <Typography variant="body4" color="text.secondary">
            {company}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {name}
          </Typography>
        </Box>
        <Box sx={{position: 'relative'}}>
        <Typography size="small" sx={{
          position: 'absolute', left: '15px'}}>{price} 원</Typography>
          <IconButton aria-label="add to favorites" sx={{
            position: 'absolute', right:'10px'}}>
            <FavoriteIcon /> <Typography size="small">{like}</Typography>
          </IconButton>
        </Box>
      </Box>
    </Link>
  )
}


export default ListSquareEle