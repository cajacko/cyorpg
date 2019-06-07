import {
  withGetCoordinatesFromPosition,
  withGetPositionFromCoordinates,
  IContainerProps,
} from '../useLayout';

type TestData = [number, number];

const containerProps: IContainerProps = {
  height: 500,
  width: 600,
  cardSize: {
    height: 20,
    width: 80,
  },
  padding: 50,
  bounds: {
    top: 30,
    left: 40,
    bottom: 600,
    right: 700,
  },
};

const testData: TestData[] = [[0, 0], [100, 200], [200, 100]];

describe('useLayout', () => {
  describe('position - coordinates', () => {
    describe('When withGetCoordinatesFromPosition is run through withGetPositionFromCoordinates with the test data', () => {
      it('returns the same test data', () => {
        testData.forEach(([arg1, arg2]) => {
          const targetWidth = 200;
          const targetHeight = 80;

          const coord = withGetCoordinatesFromPosition(containerProps)({
            targetWidth,
            targetHeight,
            left: arg1,
            top: arg2,
          });

          const position = withGetPositionFromCoordinates(containerProps)({
            targetWidth,
            targetHeight,
            ...coord,
          });

          expect(position.left).toBe(arg1);
          expect(position.top).toBe(arg2);
        });
      });
    });

    describe('When withGetPositionFromCoordinates is run through withGetCoordinatesFromPosition with the test data', () => {
      it('returns the same test data', () => {
        testData.forEach(([arg1, arg2]) => {
          const targetWidth = 200;
          const targetHeight = 80;

          const position = withGetPositionFromCoordinates(containerProps)({
            targetWidth,
            targetHeight,
            x: arg1,
            y: arg2,
          });

          const coord = withGetCoordinatesFromPosition(containerProps)({
            targetWidth,
            targetHeight,
            ...position,
          });

          expect(coord.x).toBe(arg1);
          expect(coord.y).toBe(arg2);
        });
      });
    });
  });
});
