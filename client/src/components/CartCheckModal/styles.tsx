import styled from '@emotion/styled';

export const ModalBody = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxHeight: '100vh',
  backgroundColor: '#f8f8f8',
  borderRadius: 10,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  minWidth: 220,
  padding: '40px 20px',
  textAlign: 'center',
  p: {
    marginBottom: 20,
    fontSize: '1.4rem',
  },
  div: {
    button: {
      fontWeight: 700,
      backgroundColor: '#fff',
      padding: 10,
      margin: '0 5px',
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
  top: 5,
  right: 10,
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#333',
  '&:hover': {
    color: '#666',
  },
});
