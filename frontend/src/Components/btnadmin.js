import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
  },
  content: {
    padding: 24,
  },
  avatar: {
    backgroundColor:'#0F2027',
    width: 50,
    height: 50,
    border: '2px solid #fff',
    margin: '-48px 32px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

export const PostCardDemo = React.memo(function PostCard(props) {
  const cardStyles = useStyles();
  const mediaStyles = useSlopeCardMediaStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  return (
    <Card className={cx(cardStyles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          props.img
        }
      />
      <Avatar className={cardStyles.avatar} >
        {props.children}
      </Avatar>
      <CardContent className={cardStyles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          heading={props.head}
          body={
            props.bod
          }
        />
      </CardContent>
    </Card>
  );
});

export default PostCardDemo;