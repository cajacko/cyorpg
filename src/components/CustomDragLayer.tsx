import React from 'react';
import { DragLayer, XYCoord } from 'react-dnd';
import { Identifier } from 'dnd-core';
import ItemTypes from './ItemTypes';
import BoxDragPreview from './BoxDragPreview';

const layerStyles: React.CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

/**
 * Get the item style
 */
function getItemStyles(props: CustomDragLayerProps) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x}px, ${y}px)`;

  return {
    transform,
    WebkitTransform: transform,
  };
}

export interface CustomDragLayerProps {
  item?: any;
  itemType?: Identifier | null;
  initialOffset?: XYCoord | null;
  currentOffset?: XYCoord | null;
  isDragging?: boolean;
  boxWidth: number;
  boxHeight: number;
}

/**
 * Custom drag layer
 */
const CustomDragLayer: React.FC<CustomDragLayerProps> = (props) => {
  // eslint-disable-next-line
  const { item, itemType, isDragging, boxWidth, boxHeight } = props;

  /**
   * Render
   */
  function renderItem() {
    switch (itemType) {
      case ItemTypes.BOX:
        return (
          <BoxDragPreview title={item.title} id={item.id} width={boxWidth} height={boxHeight} />
        );
      default:
        return null;
    }
  }

  if (!isDragging) {
    return null;
  }
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(props)}>{renderItem()}</div>
    </div>
  );
};

export default DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
}))(CustomDragLayer);
