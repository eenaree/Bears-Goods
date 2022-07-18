import { css, keyframes } from '@emotion/react';
import { mq } from '@styles/mediaQueries';

const modalFadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const modalFadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const modalViewSlideDown = keyframes({
  from: { transform: 'translateY(-50px)' },
  to: { transform: 'translateY(0)' },
});

const modalViewSlideUp = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(-50px)' },
});

export const styles = {
  modalContainer: (modal: boolean) =>
    css({
      zIndex: 1,
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      animationName: modal ? modalFadeIn : modalFadeOut,
      animationDuration: '0.6s',
    }),
  modalView: (modal: boolean) =>
    css({
      width: 200,
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 5,
      boxShadow: '0 1px 4px rgba(255,255,255,0.4)',
      fontSize: '1.4rem',
      animationName: modal ? modalViewSlideDown : modalViewSlideUp,
      animationDuration: '0.6s',
      [mq('sm')]: {
        width: 300,
      },
    }),
};
