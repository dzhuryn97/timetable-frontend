import { Box } from "@chakra-ui/react";
import { DoctorItem } from "./DoctorItem";
import { graphql } from "./gql";
import { useGraphQL } from "./use-graphql";

const DoctorList_QueryFragment = graphql(/* GraphQL */ `
  query SearchDoctors($name: String, $limit: Int = 10) {
    doctors(name: $name, limit: $limit) {
      ...DoctorListItem_DoctorFragment
    }
  }
`);

type DoctorListProps = {
  search: string;
};
export function DoctorList(props: DoctorListProps) {
  const { data, error, isLoading } = useGraphQL(DoctorList_QueryFragment, {
    name: props.search,
  });

  if (data && data.data) {
    const res = data.data;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const doctorList = data?.data?.doctors.map(function ($doctor) {
    return <DoctorItem doctor={$doctor} />;
  });

  return <Box>{doctorList}</Box>;
}
