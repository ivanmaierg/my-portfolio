import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export const useHasBeenViewed = () => {
  const [ref, inView] = useInView();
  const prevInView = useRef(false);
  const hasBeenViewed = prevInView.current || inView;
  useEffect(() => {
    prevInView.current = inView;
  });
  
  return [hasBeenViewed, ref];
}