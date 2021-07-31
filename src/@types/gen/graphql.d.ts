export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>
  /** delete single row from the table: "todo" */
  delete_todo_by_pk?: Maybe<Todo>
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>
  /** insert a single row into the table: "todo" */
  insert_todo_one?: Maybe<Todo>
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>
  /** update single row of the table: "todo" */
  update_todo_by_pk?: Maybe<Todo>
}

/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Todo_By_PkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>
  on_conflict?: Maybe<Todo_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Todo_OneArgs = {
  object: Todo_Insert_Input
  on_conflict?: Maybe<Todo_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _inc?: Maybe<Todo_Inc_Input>
  _set?: Maybe<Todo_Set_Input>
  where: Todo_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Todo_By_PkArgs = {
  _inc?: Maybe<Todo_Inc_Input>
  _set?: Maybe<Todo_Set_Input>
  pk_columns: Todo_Pk_Columns_Input
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "todo" */
  todo: Array<Todo>
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>
}

export type Query_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

export type Query_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

export type Query_RootTodo_By_PkArgs = {
  id: Scalars['Int']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "todo" */
  todo: Array<Todo>
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>
}

export type Subscription_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['Int']
}

/** columns and relationships of "todo" */
export type Todo = {
  __typename?: 'todo'
  description: Scalars['String']
  done?: Maybe<Scalars['Boolean']>
  id: Scalars['Int']
}

/** aggregated selection of "todo" */
export type Todo_Aggregate = {
  __typename?: 'todo_aggregate'
  aggregate?: Maybe<Todo_Aggregate_Fields>
  nodes: Array<Todo>
}

/** aggregate fields of "todo" */
export type Todo_Aggregate_Fields = {
  __typename?: 'todo_aggregate_fields'
  avg?: Maybe<Todo_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Todo_Max_Fields>
  min?: Maybe<Todo_Min_Fields>
  stddev?: Maybe<Todo_Stddev_Fields>
  stddev_pop?: Maybe<Todo_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Todo_Stddev_Samp_Fields>
  sum?: Maybe<Todo_Sum_Fields>
  var_pop?: Maybe<Todo_Var_Pop_Fields>
  var_samp?: Maybe<Todo_Var_Samp_Fields>
  variance?: Maybe<Todo_Variance_Fields>
}

/** aggregate fields of "todo" */
export type Todo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todo_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Todo_Avg_Fields = {
  __typename?: 'todo_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: Maybe<Array<Todo_Bool_Exp>>
  _not?: Maybe<Todo_Bool_Exp>
  _or?: Maybe<Array<Todo_Bool_Exp>>
  description?: Maybe<String_Comparison_Exp>
  done?: Maybe<Boolean_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodoPkey = 'todo_pkey',
}

/** input type for incrementing numeric columns in table "todo" */
export type Todo_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  description?: Maybe<Scalars['String']>
  done?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Todo_Max_Fields = {
  __typename?: 'todo_max_fields'
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate min on columns */
export type Todo_Min_Fields = {
  __typename?: 'todo_min_fields'
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
}

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Todo>
}

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint
  update_columns?: Array<Todo_Update_Column>
  where?: Maybe<Todo_Bool_Exp>
}

/** Ordering options when selecting data from "todo". */
export type Todo_Order_By = {
  description?: Maybe<Order_By>
  done?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** primary key columns input for table: todo */
export type Todo_Pk_Columns_Input = {
  id: Scalars['Int']
}

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  description?: Maybe<Scalars['String']>
  done?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Todo_Stddev_Fields = {
  __typename?: 'todo_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Todo_Stddev_Pop_Fields = {
  __typename?: 'todo_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Todo_Stddev_Samp_Fields = {
  __typename?: 'todo_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate sum on columns */
export type Todo_Sum_Fields = {
  __typename?: 'todo_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
}

/** aggregate var_pop on columns */
export type Todo_Var_Pop_Fields = {
  __typename?: 'todo_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Todo_Var_Samp_Fields = {
  __typename?: 'todo_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Todo_Variance_Fields = {
  __typename?: 'todo_variance_fields'
  id?: Maybe<Scalars['Float']>
}
