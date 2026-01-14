export type IconName = 'star' | 'menu' | 'close' | 'arrow_forward' | 'watch' | 'diamond' | 'construction';

interface IconProps {
    name: IconName;
    className?: string;
}

export function Icon({ name, className = "" }: IconProps) {
    const paths: Record<IconName, string> = {
        star: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
        menu: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
        close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
        arrow_forward: "M12 4l-1.41 1.41 5.58 5.59H4v2h12.17l-5.58 5.59L12 20l8-8z",
        watch: "M12 2c-3.87 0-7 3.13-7 7 0 3.87 3.13 7 7 7 3.87 0 7-3.13 7-7 0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm.5-8.5v4l2.5 1.5-.75 1.23-3.25-2V5.5h1.5z", // Clock face for cleaner look
        diamond: "M12.16 3h-3.2L2.73 10l9.31 11 9.23-11h-9.11z", // Simple diamond shape
        construction: "M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" // Hammer/Wrench
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`inline-block ${className}`}
            width="1em"
            height="1em"
        >
            <path d={paths[name]} />
        </svg>
    );
}
