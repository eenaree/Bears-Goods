import styled from '@emotion/styled';

export const ModalBody = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '100vh',
  minWidth: 280,
  backgroundColor: '#f8f8f8',
  padding: '40px 20px',
  borderRadius: 10,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  textAlign: 'center',
  p: {
    margin: 20,
  },
  div: {
    button: {
      fontWeight: 700,
      backgroundColor: '#fff',
      padding: 10,
      marginRight: 10,
      borderRadius: 10,
      borderBottom: '2px solid #00cc33',
      transition: '0.5s',
      '&:nth-of-type(2)': {
        borderColor: '#ff0000',
      },
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
});

export const CloseButton = styled.button({
  position: 'absolute',
  top: 10,
  right: 15,
  fontSize: 28,
  fontWeight: 700,
  color: '#333',
  '&:hover': {
    color: '#666',
  },
});
