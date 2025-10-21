export type Category = {
  id: number;
  name: string;
};

export type Expense = {
  id: number;
  category: Category;
  user_id: number;
  item: string;
  amount: string;
  note: string;
  spent_at: string;
};

export type PostExpenseDTO = {
  expense: {
    user_id: number;
    item: string;
    amount: number;
    note: string;
    spent_at: string;
    category_id: number;
  };
};

export type DeleteExpenseDTO = {
  id: number;
};

export type AuthDTO = {
  user: {
    email: string;
    password: string;
  };
};

type CategorySum = {
  category_id: number;
  total: string;
};

export type Utilities = {
  total_monthly: string;
  date_time: Date;
  category_sums: CategorySum[];
};

export type ExpenseListProps = {
  titleProp: string;
  subTitleProp: string;
};

export type AddExpenseProps = {
  categories: Category[];
};

export type AuthResponse = {
  message: string;
  user: {
    id: number;
    email: string;
  };
};

export type MonthNumConfig = 3 | 6 | 12;

export type LastFewMonth = [{ month: number; year: number }];
