import { css } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

export const styles = {
  goodsItemZone: css({
    fontSize: '1.5rem',
    [mq('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }),
  goodsImageArea: css({
    padding: 20,
    boxSizing: 'border-box',
    textAlign: 'center',
    img: {
      width: '100%',
      border: '1px solid #eee',
    },
    [mq('sm')]: {
      flexBasis: '50%',
    },
  }),
  goodsInfoArea: css({
    boxSizing: 'border-box',
    padding: 20,
    [mq('sm')]: {
      flexBasis: '50%',
    },
  }),
  labelArea: css({
    [mq('sm')]: {
      paddingTop: 20,
    },
  }),
  titleLabel: css({
    fontSize: '2rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#666',
    [mq('xs')]: {
      fontSize: '2.4rem',
    },
  }),
  priceLabel: css({
    padding: '15px 0',
    strong: {
      fontWeight: 700,
      fontSize: '2.4rem',
    },
  }),
  totalPriceArea: css({
    padding: '10px 0',
    textAlign: 'right',
    color: '#666',
  }),
  totalPrice: css({
    marginLeft: 10,
    fontSize: '2rem',
    strong: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#ff0000',
    },
  }),
  optionArea: css({
    padding: '15px 0',
    '> div': {
      width: '100%',
    },
  }),
  selectedOption: css({
    fontSize: '1.3rem',
    position: 'relative',
    margin: '15px 0',
    backgroundColor: '#f8f8f8',
    border: '1px solid #eee',
    padding: 20,
    [mq('xs')]: {
      fontSize: '1.4rem',
    },
  }),
  selectedOptionSize: css({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    strong: {
      fontWeight: 700,
    },
  }),
  selectedOptionQuantity: css({
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    strong: {
      fontWeight: 700,
      fontSize: '1.6rem',
    },
  }),
  closeButton: css({
    position: 'absolute',
    top: 15,
    right: 15,
    span: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 14,
      height: 2,
      backgroundColor: '#333',
      transform: 'rotate(45deg)',
      '&:after': {
        content: '""',
        position: 'absolute',
        top: '-6px',
        left: 6,
        width: 2,
        height: 14,
        backgroundColor: '#333',
      },
    },
  }),
};
