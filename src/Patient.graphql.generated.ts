import * as Types from './types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type FindPatientsQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']['input']>;
}>;


export type FindPatientsQuery = { __typename?: 'Query', patients: Array<{ __typename?: 'Patient', id: string, name: string, orderId?: string | null }> };


export const FindPatientsDocument = gql`
    query findPatients($id: ID) {
  patients(id: $id) {
    id
    name
    orderId
  }
}
    `;

/**
 * __useFindPatientsQuery__
 *
 * To run a query within a React component, call `useFindPatientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPatientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPatientsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindPatientsQuery(baseOptions?: Apollo.QueryHookOptions<FindPatientsQuery, FindPatientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPatientsQuery, FindPatientsQueryVariables>(FindPatientsDocument, options);
      }
export function useFindPatientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPatientsQuery, FindPatientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPatientsQuery, FindPatientsQueryVariables>(FindPatientsDocument, options);
        }
export function useFindPatientsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindPatientsQuery, FindPatientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindPatientsQuery, FindPatientsQueryVariables>(FindPatientsDocument, options);
        }
export type FindPatientsQueryHookResult = ReturnType<typeof useFindPatientsQuery>;
export type FindPatientsLazyQueryHookResult = ReturnType<typeof useFindPatientsLazyQuery>;
export type FindPatientsSuspenseQueryHookResult = ReturnType<typeof useFindPatientsSuspenseQuery>;
export type FindPatientsQueryResult = Apollo.QueryResult<FindPatientsQuery, FindPatientsQueryVariables>;