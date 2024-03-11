export type CreditCard = {
  cardNumber: string;
  expire: string;
  cvc: string;
};

const validCard: CreditCard = {
  cardNumber: "4242424242424242",
  expire: "0424",
  cvc: "000",
};

export const creditCard = {
  valid: validCard,
};
