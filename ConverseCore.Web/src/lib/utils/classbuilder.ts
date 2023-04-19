const applyClasses = (...args: string[]): string => {
    console.log(...args);

    const filtered = args.filter((item) => typeof item != undefined && item);

    return filtered.join(' ');
};

export default {
    applyClasses
};
