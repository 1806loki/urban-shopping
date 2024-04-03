export const truncate = (string) => {
    if (string.length <= 10) {
        return string;
    }
    return string.substring(0, 15) + '...';
}