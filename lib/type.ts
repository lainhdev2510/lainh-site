export interface AnimationContainerProps {
    children: React.ReactNode;
    customClassName?: string;
    customDelay?: number;
}

export interface TimelineItemProps {
    active?: boolean;
    children: React.ReactNode;
    last?: boolean;
}
