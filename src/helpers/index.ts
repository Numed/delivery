import { useState, useRef, useMemo, MutableRefObject } from "react";

type EventHandlers = {
  onMouseOver: (e: React.MouseEvent) => void;
  onMouseOut: () => void;
};

export const useHover = (): [
  boolean,
  EventHandlers,
  MutableRefObject<HTMLImageElement | null>
] => {
  const [hovered, setHovered] = useState(false);
  const hoveredCard = useRef<HTMLImageElement | null>(null);

  const eventHandlers = useMemo<EventHandlers>(
    () => ({
      onMouseOver: (e: any) => (
        setHovered(true), (hoveredCard.current = e.target as HTMLImageElement)
      ),
      onMouseOut: () => (setHovered(false), (hoveredCard.current = null)),
    }),
    [setHovered]
  );

  return [hovered, eventHandlers, hoveredCard];
};
