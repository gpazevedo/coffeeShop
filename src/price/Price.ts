export type Price = ({
  drink_name: string;
  prices: {
    small: number;
  }
} | {
  drink_name: string;
  prices: {
    medium?: number;
  }
} | {
  drink_name: string;
  prices: {
    large: number;
  }
} | {
  drink_name: string;
  prices: {
    huge: number;
  }
} | {
  drink_name: string;
  prices: {
    ultra: number;
  }
});
