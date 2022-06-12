import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const PriceBox = styled.div({
  padding: '10px 20px',
  borderRadius: 15,
  backgroundColor: '#eee',
  textAlign: 'right',
  p: {
    margin: '10px 0',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  span: {
    flex: '0 0 150px',
    position: 'relative',
    fontSize: '1.5rem',
  },
  'span:first-of-type': {
    fontWeight: 700,
    '&:hover': {
      em: {
        visibility: 'visible',
        opacity: 1,
      },
    },
  },
  strong: {
    fontWeight: 700,
    fontSize: '2.2rem',
    color: '#ff0000',
  },
  hr: {
    borderTop: '1px solid #ddd',
    borderBottom: 'none',
  },
  [mq('md')]: {
    float: 'left',
    width: '33%',
    height: 150,
    padding: 20,
    margin: '20px 0 0 2%',
    boxSizing: 'border-box',
  },
});

export const ToolTipText = styled.em({
  visibility: 'hidden',
  zIndex: 1,
  position: 'absolute',
  bottom: '140%',
  left: '50%',
  transform: 'translate(-40%, 0)',
  padding: 10,
  width: 180,
  textAlign: 'center',
  fontSize: '1.3rem',
  fontWeight: 400,
  backgroundColor: '#fff',
  borderRadius: 10,
  opacity: 0,
  transition: 'opacity 0.5s',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: '100%',
    right: '25%',
    border: '5px solid #fff',
    borderColor: '#fff transparent transparent transparent',
  },
});
