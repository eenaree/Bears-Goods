import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const CardLabel = styled.div({
  padding: '0 10px',
  fontSize: '1.2rem',
  fontWeight: 700,
  color: '#333',
  backgroundColor: '#f8f8f8',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  p: {
    height: 25,
    lineHeight: '25px',
  },
  strong: {
    color: '#ff0000',
    fontSize: '1.5rem',
  },
});

export const OverlayText = styled.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '5px 5px 0 0',
  opacity: 0,
  transition: 'opacity 0.5s',
  a: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '2.5vw',
    border: '1px solid #999',
    borderRadius: 20,
    color: '#fff',
    fontWeight: 700,
    transition: '0.5s',
    '&:hover': {
      backgroundColor: '#ff6666',
      borderColor: '#ff6666',
    },
  },
  '&:after': {
    opacity: 0,
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#ff8080',
    transition: 'opacity 0.5s',
  },
  [mq('xs')]: {
    a: {
      padding: 15,
      fontSize: '1.2rem',
    },
  },
});

export const ImageWrapper = styled.div({
  textAlign: 'center',
  img: {
    width: '100%',
    maxWidth: 300,
  },
});

export const CardSquare = styled.div({
  position: 'relative',
});

export const Wrapper = styled.div({
  position: 'relative',
  flex: '0 1 calc(50% - 2rem)',
  maxWidth: 'calc(50% - 2rem)',
  margin: '1rem',
  boxSizing: 'border-box',
  border: '1px solid #eee',
  borderRadius: 5,
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)',
  transition: '0.5s',
  '&:hover': {
    transform: 'translate(0, -5px)',
    boxShadow: '10px 10px 10px rgba(255, 255, 255, 0.4)',
    'div > div:nth-of-type(2)': {
      opacity: 1,
      '&:after': {
        opacity: 1,
      },
    },
  },
  [mq('sm')]: {
    flex: '0 1 calc(33.3% - 2rem)',
    maxWidth: 'calc(33% - 2rem)',
  },
  [mq('md')]: {
    flex: '0 1 calc(25% - 2rem)',
    maxWidth: 'calc(25% - 2rem)',
  },
});
