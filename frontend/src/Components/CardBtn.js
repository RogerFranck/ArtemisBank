import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    minHeight: 90,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
  typo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  }
}));

export const BlogCardDemo = React.memo(function BlogCard(props) {
  const styles = useStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card onClick={() => alert("Hola")} className={cx(styles.root, shadowStyles.root)}>
      <CardContent>
        <Typography className={styles.typo} >{props.message}</Typography>
      </CardContent>
    </Card>
  );
});

export default BlogCardDemo