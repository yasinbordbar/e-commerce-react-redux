export const cutText = (text: string, max: number): string => {
  return text && text.length > max
    ? text.slice(0, max).split(" ").slice(0, -1).join(" ")
    : text;
};
