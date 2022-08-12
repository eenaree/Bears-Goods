import * as React from 'react';
import { useState } from 'react';
import ZoomScanner from '@components/ZoomScanner';
import ZoomView from '@components/ZoomView';
import useClientRect from '@hooks/useClientRect';
import { GoodsData } from '@typings/db';
import { styles } from './styles';

interface Props {
  img: GoodsData['img'];
  alt: GoodsData['name'];
}

interface Position {
  left: number;
  top: number;
}

export default function GoodsImage({ img, alt }: Props) {
  const [imageRectRef, setImageRectRef] = useClientRect();
  const [scannerPosition, setScannerPosition] = useState<Position | null>();
  const [viewPosition, setViewPosition] = useState<Position | null>();

  const onMouseMove = (e: React.MouseEvent) => {
    if (document.documentElement.clientWidth >= 768 && imageRectRef.current) {
      const scannerPosition = { left: 0, top: 0 };

      // +2 = tracker border-width 1px
      const scannerOffsetWidth = imageRectRef.current.width * 0.5 + 2;
      const scannerOffsetHeight = imageRectRef.current.height * 0.5 + 2;
      const scannerPosLeft =
        e.pageX - imageRectRef.current.x - scannerOffsetWidth / 2;
      const scannerPosTop =
        e.pageY - imageRectRef.current.y - scannerOffsetHeight / 2;

      const allowedPosLeft =
        scannerPosLeft >= 0 &&
        scannerPosLeft <= imageRectRef.current.width - scannerOffsetWidth;
      const allowedPosTop =
        scannerPosTop >= 0 &&
        scannerPosTop <= imageRectRef.current.height - scannerOffsetHeight;

      if (allowedPosLeft) {
        scannerPosition.left = scannerPosLeft;
      } else {
        if (scannerPosLeft < 0) {
          scannerPosition.left = 0;
        } else {
          scannerPosition.left =
            imageRectRef.current.width - scannerOffsetWidth;
        }
      }

      if (allowedPosTop) {
        scannerPosition.top = scannerPosTop;
      } else {
        if (scannerPosTop < 0) {
          scannerPosition.top = 0;
        } else {
          scannerPosition.top =
            imageRectRef.current.height - scannerOffsetHeight;
        }
      }

      setScannerPosition(scannerPosition);
      setViewPosition({
        left: scannerPosition.left * -2,
        top: scannerPosition.top * -2,
      });
    }
  };

  const onMouseLeave = () => {
    if (document.documentElement.clientWidth >= 768 && imageRectRef.current) {
      setScannerPosition(null);
      setViewPosition(null);
    }
  };

  return (
    <>
      <div
        css={styles.goodsImageArea}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <img src={img} alt={alt} ref={setImageRectRef} />
        {imageRectRef.current && scannerPosition && (
          <ZoomScanner
            position={scannerPosition}
            elementOffset={{
              width: imageRectRef.current.width * 0.5,
              height: imageRectRef.current.height * 0.5,
            }}
          />
        )}
      </div>
      {imageRectRef.current && viewPosition && (
        <ZoomView
          img={img}
          position={viewPosition}
          elementOffset={{
            left: imageRectRef.current.x + imageRectRef.current.width + 20,
            top: imageRectRef.current.y,
            width: imageRectRef.current.width,
            height: imageRectRef.current.height,
          }}
        />
      )}
    </>
  );
}
