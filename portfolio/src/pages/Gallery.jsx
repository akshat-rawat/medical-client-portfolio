import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#D61C4E',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PhotoBooth = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Item><Paper
              sx={{
                height: 250,
                backgroundColor: '#293462'
              }}
            />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const Gallery = () => {
  return <>
    <Container maxWidth="lg" sx={{ p: 5 }}>
      <PhotoBooth />
    </Container>
  </>;
}

export default Gallery;