export type storedTokenType = {
  token: string;
  user: {
    firstName: string;
    lastName: string;
    displayName: string;
  };
};

export type storedItemType = {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  color: string;
  img: string;
}[];
