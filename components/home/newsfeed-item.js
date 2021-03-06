import React from "react";

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { useRouter } from 'next/router';
import CardContent from '@material-ui/core/CardContent';
import Button from 'components/Button';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 40,
    minWidth: 275,
    borderRadius: 20,
    borderColor: theme.palette.primary.main,
    height: '100%',
    padding: 20
  },
}));

const cleanURL = (url) => {
  return url.replace(/^.*\/\/[^\/]+/, '');
}


const Item = ({ item, author }) => {
  const date = new Date(item.date);

  const classes = useStyles();
  const router = useRouter();

  const [renderedExcerpt, setRenderedExcerpt] = React.useState('');
  const [renderedTitle, setRenderedTitle] = React.useState('');

  React.useEffect(() => {
    if ('rendered' in item.excerpt) {
      setRenderedExcerpt(item.excerpt.rendered);
    }
  }, [item.excerpt])

  React.useEffect(() => {
    if ('rendered' in item.title) {
      setRenderedTitle(item.title.rendered);
    }
  }, [item.title])

  return (
    <Grid item xs={12} md={4}>
      <Card className={classes.cardRoot} elevation={0} variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" dangerouslySetInnerHTML={{ __html: renderedTitle }} />
          { author ? 
            <Typography variant="body2" color="textSecondary" component="p">By <b>{author.name}</b></Typography>
          : null }
          <Typography variant="body2" color="textSecondary" component="p">on <b>{date.toDateString()}</b></Typography>
          <Typography variant="body1" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: renderedExcerpt }} />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" disableElevation onClick={() => router.push(`${cleanURL(item.link)}`)}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

// Connect the Item to gain access to `state` as a prop
export default Item;