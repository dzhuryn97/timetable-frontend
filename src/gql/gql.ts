/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nfragment DoctorListItem_DoctorFragment on Doctor {\n    id,\n    name\n}\n": types.DoctorListItem_DoctorFragmentFragmentDoc,
    "\n    query SearchDoctors($name: String, $limit: Int =  10) {\n       doctors (name: $name, limit: $limit) {\n        ...DoctorListItem_DoctorFragment\n       }\n    }\n": types.SearchDoctorsDocument,
    "\n        query DoctorItem($id: ID){\n            doctor(id: $id){\n                id,\n                name,\n                description,\n                photo,\n\n                daySlots {\n                    id,\n                    date(format: \"d-m\"),\n                    status,\n                    workHours,\n                    absentReason\n                    replacement {\n                        id,\n                        name\n                    }\n                }\n            }\n        }\n    ": types.DoctorItemDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment DoctorListItem_DoctorFragment on Doctor {\n    id,\n    name\n}\n"): typeof import('./graphql').DoctorListItem_DoctorFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SearchDoctors($name: String, $limit: Int =  10) {\n       doctors (name: $name, limit: $limit) {\n        ...DoctorListItem_DoctorFragment\n       }\n    }\n"): typeof import('./graphql').SearchDoctorsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query DoctorItem($id: ID){\n            doctor(id: $id){\n                id,\n                name,\n                description,\n                photo,\n\n                daySlots {\n                    id,\n                    date(format: \"d-m\"),\n                    status,\n                    workHours,\n                    absentReason\n                    replacement {\n                        id,\n                        name\n                    }\n                }\n            }\n        }\n    "): typeof import('./graphql').DoctorItemDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
