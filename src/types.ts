export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrder: Order;
  createPatient: Patient;
  updateOrder: Order;
  updatePatient: Patient;
};


export type MutationCreateOrderArgs = {
  input?: InputMaybe<NewOrder>;
};


export type MutationCreatePatientArgs = {
  input?: InputMaybe<NewPatient>;
};


export type MutationUpdateOrderArgs = {
  input?: InputMaybe<UpdateOrder>;
};


export type MutationUpdatePatientArgs = {
  input?: InputMaybe<UpdatePatient>;
};

export type NewOrder = {
  message: Scalars['String']['input'];
};

export type NewPatient = {
  name: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type Patient = {
  __typename?: 'Patient';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  orderId?: Maybe<Scalars['ID']['output']>;
};

export type Query = {
  __typename?: 'Query';
  orders: Array<Order>;
  patients: Array<Patient>;
};


export type QueryOrdersArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPatientsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateOrder = {
  id: Scalars['ID']['input'];
  message: Scalars['String']['input'];
};

export type UpdatePatient = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
};
