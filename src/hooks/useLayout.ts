import React from 'react';
import { IStory } from '../store/types';

const cardSize = {
  height: 38,
  width: 100,
};

const canvasPadding = window.outerHeight;

/**
 * Use layout
 */
const useLayout = (bounds: IStory['bounds']) => {
  const archerContainer = React.useRef(null);
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  /**
   * Test
   */
  const renderArrows = () => {
    if (!archerContainer) return;
    if (!archerContainer.current) return;

    // @ts-ignore
    archerContainer.current.refreshScreen();
  };

  let height: number = 0;
  let width: number = 0;
  let leftOffset: number = 0;
  let topOffset: number = 0;

  if (bounds.bottom) {
    height = bounds.bottom - bounds.top + cardSize.height + canvasPadding * 2;
    width = bounds.right - bounds.left + cardSize.width + canvasPadding * 2;

    leftOffset = -(bounds.left - canvasPadding);
    topOffset = -(bounds.top - canvasPadding);
  }

  React.useEffect(() => {
    const ref = scrollContainer.current;

    if (!ref) return;

    const scroll = {
      left: canvasPadding,
      top: canvasPadding,
    };

    ref.scroll(scroll);
  });

  return {
    scrollContainer,
    archerContainer,
    width,
    height,
    renderArrows,
    leftOffset,
    topOffset,
  };
};

export default useLayout;
