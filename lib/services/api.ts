import type {
  AuthDTO,
  AuthResponse,
  Category,
  DeleteExpenseDTO,
  Expense,
  PostExpenseDTO,
  Utilities,
} from './type';

// Every build tool has their own convention of env naming, eg. expo uses EXPO_PUBLIC_{}
const local_ip = process.env.EXPO_PUBLIC_LOCAL_IP?.toString();

const URL = local_ip;
export const public_url = `http://${URL}:4000/public`;

export async function fetchExpenses(userID: string): Promise<Expense[]> {
  try {
    const response = await fetch(`${public_url}/users/${userID}/expenses`);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error: any) {
    console.error('Fetching expenses error: ', error.message);
    // NOTE: AI suggests throwing error
    throw error;
    // END
  }
}

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${public_url}/categories`);

    if (!response.ok) {
      throw new Error(
        `fetchCategories response status error: ${response.status}`,
      );
    }
    const { data } = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}

export type UtilitiesProps = {
  userid: string;
  month?: Number;
  year?: Number;
};

export async function fetchUtilities({
  userid,
  month,
  year,
}: UtilitiesProps): Promise<Utilities> {
  try {
    // NOTE: ChatGPT suggestion on using this
    const params = new URLSearchParams();

    month && params.append('month', month.toString());
    year && params.append('year', year.toString());

    const queryString = params.toString();
    const url = `${public_url}/users/${userid}/utilities${
      queryString && `?${queryString}`
    }`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = (await response.json()) as Utilities;
    return data;
  } catch (error: any) {
    console.error('total_monthly error: ', error.message);
    throw error;
  }
}

export async function postExpense(expenseDTO: PostExpenseDTO) {
  try {
    const response = await fetch(`${public_url}/expenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expenseDTO),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}

export async function postAuth(
  authDTO: AuthDTO,
): Promise<Partial<AuthResponse>> {
  try {
    const response = await fetch(`${public_url}/users/log_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authDTO),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = (await response.json()) as AuthResponse;
    return data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}

export async function postGenerate(
  authDTO: AuthDTO,
): Promise<Partial<AuthResponse>> {
  try {
    const response = await fetch(`${public_url}/users/generate_non_user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authDTO),
    });

    if (!response.ok) {
      throw new Error(`Response status from postGenerate: ${response.status}`);
    }
    const data = (await response.json()) as AuthResponse;
    console.log(data);
    return data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}

export async function deleteExpense(
  userID: string,
  id: number,
): Promise<Expense> {
  if (!id) {
    throw new Error('expense id is undefined');
  }

  try {
    const response = await fetch(
      `${public_url}/users/${userID}/expenses/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    // NOTE: AI solution to empty response on DELETE request
    if (response.status === 204) {
      return {} as Expense;
    }
    // End

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}
