import styled from '@emotion/styled';
import { mq } from '@styles/mediaQueries';

export const Button = styled.button<{ disabled: boolean }>(
  {
    minWidth: 30,
    height: 29,
    backgroundColor: '#f8f8f8',
    '&:hover': {
      backgroundColor: '#eee',
    },
  },
  props => ({
    '&:hover': {
      backgroundColor: props.disabled ? '#f8f8f8' : undefined,
      cursor: props.disabled ? 'auto' : 'pointer',
    },
  })
);

export const ChangeButton = styled(Button)({
  marginLeft: 5,
});

export const Wrapper = styled.div({
  display: 'flex',
  input: {
    width: 25,
    height: 25,
    textAlign: 'center',
    border: '1px solid #eee',
  },
  [mq('sm')]: {
    flex: '1.2 1 0',
  },
  [mq('md')]: {
    flex: 0,
  },
});
