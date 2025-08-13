type ResponsiveValue<T> = T | Array<T | null>;

export const responsive = <T>(
    value: T,
    breakpoints: {
        sm?: T;
        md?: T;
        lg?: T;
        xl?: T;
        "2xl"?: T;
    },
): ResponsiveValue<T> => {
    return [
        value, // base
        breakpoints.sm ?? null,
        breakpoints.md ?? null,
        breakpoints.lg ?? null,
        breakpoints.xl ?? null,
        breakpoints["2xl"] ?? null,
    ];
};
