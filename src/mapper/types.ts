export type Order = {
  [x: string]: any;
  title: string;
  price: number;
  amount: number;
  image: Image;
};

export type Image = {
  altText: string;
  mediaItemUrl: string;
};
