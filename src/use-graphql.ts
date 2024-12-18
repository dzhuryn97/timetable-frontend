/* eslint-disable import/no-extraneous-dependencies */
import { useQuery } from "@tanstack/react-query";
import { ExecutionResult } from "graphql";
import { TypedDocumentString } from "./gql/graphql";
export function useGraphQL<TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  let apiUrl: string = process.env.REACT_APP_API_URL ?? "";
  return useQuery(
    [
      // This logic can be customized as desired
      document,
      variables,
    ] as const,
    async ({ queryKey }) => {
      return fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: queryKey[0].toString(),
          variables: queryKey[1],
        }),
      }).then((response) => response.json()) as Promise<
        ExecutionResult<TResult>
      >;
    },
  );
}
