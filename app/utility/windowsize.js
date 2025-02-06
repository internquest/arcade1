import { useWindowSize } from '@uidotdev/usehooks';
function windowsize() {
  const { width, height } = useWindowSize();
  return width;
}
