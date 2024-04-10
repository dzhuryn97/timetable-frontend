import React from "react";
import {FragmentType, graphql, useFragment} from "./gql";
import {Box} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const DoctorListItem_DoctorFragment = graphql(`
fragment DoctorListItem_DoctorFragment on Doctor {
    id,
    name
}
`)

type DoctorItemProps = {
    doctor: FragmentType<typeof DoctorListItem_DoctorFragment>
}

export function DoctorItem(props: DoctorItemProps) {
    const doctor = useFragment(DoctorListItem_DoctorFragment, props.doctor)
    return <Box
            mt='-1px'
            width='100%'
            bg='#f6f6f6'
            p='5px'
            border='1px'
            cursor='pointer'
            _hover={{
                bg: '#eee'
            }}
        >
        <Link to={"/doctor/"+doctor.id}>{ doctor.name}</Link>
    </Box>
    ;
}