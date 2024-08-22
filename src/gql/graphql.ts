/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
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
  Date: { input: any; output: any; }
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AuthToken = {
  __typename?: 'AuthToken';
  name: Scalars['String']['output'];
  role: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type CreateDaySlotHasMany = {
  create: Array<DaySlotInput>;
};

export type DaySlot = {
  __typename?: 'DaySlot';
  absentReason?: Maybe<Scalars['String']['output']>;
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  replacement?: Maybe<Doctor>;
  status: StatusEnum;
  workHours?: Maybe<Scalars['String']['output']>;
};


export type DaySlotDateArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
};

export type DaySlotInput = {
  absentReason?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['Date']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  replacement?: InputMaybe<UpdateReplacementHasMany>;
  status: StatusEnum;
  workHours?: InputMaybe<Scalars['String']['input']>;
};

/** Account of a person who utilizes this application. */
export type DaySlotTemplate = {
  __typename?: 'DaySlotTemplate';
  dayNumber: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  status: StatusEnum;
  workHours?: Maybe<Scalars['String']['output']>;
};

export type DaySlotTemplateInput = {
  dayNumber?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<StatusEnum>;
  workHours?: InputMaybe<Scalars['String']['input']>;
};

export type Doctor = {
  __typename?: 'Doctor';
  currentMonthDaySlots: Array<DaySlot>;
  daySlotTemplates: Array<DaySlotTemplate>;
  daySlots: Array<DaySlot>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo: Scalars['String']['output'];
};


export type DoctorDaySlotsArgs = {
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};


export type DoctorDescriptionArgs = {
  len?: InputMaybe<Scalars['Int']['input']>;
};

export type DoctorInput = {
  daySlotTemplates?: InputMaybe<Array<DaySlotTemplateInput>>;
  daySlots?: InputMaybe<CreateDaySlotHasMany>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
};

/** A paginated list of Doctor items. */
export type DoctorPaginator = {
  __typename?: 'DoctorPaginator';
  /** A list of Doctor items. */
  data: Array<Doctor>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type DoctorUpdateInput = {
  daySlotTemplates?: InputMaybe<Array<DaySlotTemplateInput>>;
  daySlots?: InputMaybe<CreateDaySlotHasMany>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
};

export type Film = {
  __typename?: 'Film';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDoctor: Doctor;
  deleteDoctor?: Maybe<Doctor>;
  updateDaySlots: Array<DaySlot>;
  updateDoctor: Doctor;
  upload?: Maybe<Scalars['String']['output']>;
};


export type MutationCreateDoctorArgs = {
  input?: InputMaybe<DoctorInput>;
};


export type MutationDeleteDoctorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateDaySlotsArgs = {
  input?: InputMaybe<UpdateDaySlotsInput>;
};


export type MutationUpdateDoctorArgs = {
  input?: InputMaybe<DoctorUpdateInput>;
};


export type MutationUploadArgs = {
  file: Scalars['Upload']['input'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
  __typename?: 'Query';
  daySlots: Array<DaySlot>;
  doctor: Doctor;
  doctors: Array<Doctor>;
  login: AuthToken;
  paginationDoctors: DoctorPaginator;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryDoctorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryDoctorsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryPaginationDoctorsArgs = {
  first: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export enum StatusEnum {
  Absent = 'ABSENT',
  Present = 'PRESENT'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateDaySlotsInput = {
  daySlots?: InputMaybe<Array<DaySlotInput>>;
  doctorId: Scalars['ID']['input'];
  month: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type UpdateReplacementHasMany = {
  connect?: InputMaybe<Scalars['ID']['input']>;
};

export type DoctorListItem_DoctorFragmentFragment = { __typename?: 'Doctor', id: string, name: string } & { ' $fragmentName'?: 'DoctorListItem_DoctorFragmentFragment' };

export type SearchDoctorsQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchDoctorsQuery = { __typename?: 'Query', doctors: Array<(
    { __typename?: 'Doctor' }
    & { ' $fragmentRefs'?: { 'DoctorListItem_DoctorFragmentFragment': DoctorListItem_DoctorFragmentFragment } }
  )> };

export type DoctorItemQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type DoctorItemQuery = { __typename?: 'Query', doctor: { __typename?: 'Doctor', id: string, name: string, description: string, photo: string, currentMonthDaySlots: Array<{ __typename?: 'DaySlot', id: string, date: string, status: StatusEnum, workHours?: string | null, absentReason?: string | null, replacement?: { __typename?: 'Doctor', id: string, name: string } | null }> } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const DoctorListItem_DoctorFragmentFragmentDoc = new TypedDocumentString(`
    fragment DoctorListItem_DoctorFragment on Doctor {
  id
  name
}
    `, {"fragmentName":"DoctorListItem_DoctorFragment"}) as unknown as TypedDocumentString<DoctorListItem_DoctorFragmentFragment, unknown>;
export const SearchDoctorsDocument = new TypedDocumentString(`
    query SearchDoctors($name: String, $limit: Int = 10) {
  doctors(name: $name, limit: $limit) {
    ...DoctorListItem_DoctorFragment
  }
}
    fragment DoctorListItem_DoctorFragment on Doctor {
  id
  name
}`) as unknown as TypedDocumentString<SearchDoctorsQuery, SearchDoctorsQueryVariables>;
export const DoctorItemDocument = new TypedDocumentString(`
    query DoctorItem($id: ID) {
  doctor(id: $id) {
    id
    name
    description
    photo
    currentMonthDaySlots {
      id
      date(format: "d-m")
      status
      workHours
      absentReason
      replacement {
        id
        name
      }
    }
  }
}
    `) as unknown as TypedDocumentString<DoctorItemQuery, DoctorItemQueryVariables>;