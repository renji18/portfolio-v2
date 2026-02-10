import type { PortfolioInterface } from "../../../interface/portfolio.interface";

export const initialState: {
  loading: boolean;
  bootstrapped: boolean;
  error: string | null;
  message: string | null;
  portfolio?: PortfolioInterface;
} = {
  loading: true,
  bootstrapped: false,
  error: null,
  message: null,
};
