export type Tooltip = {
  title: string;
  message: string;
};

const cardDeclined: Tooltip = {
  title: "Your card was declined",
  message:
    "Your card was declined. Your request was in live mode, but used a known test card.",
};

export const tooltip = {
  cardDeclined: cardDeclined,
};
