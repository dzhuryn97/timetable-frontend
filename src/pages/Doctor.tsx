import {Box, Flex, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import React from "react";
import {graphql} from "../gql";
import {useGraphQL} from "../use-graphql";
import {Link, useParams} from "react-router-dom";
import {StatusEnum} from "../gql/graphql";


export async function loader(){

}

export default function Doctor() {

    const params = useParams();

    const DoctorQuery = graphql(/* GraphQL */ `
        query DoctorItem($id: ID){
            doctor(id: $id){
                id,
                name,
                description,
                photo,

                currentMonthDaySlots {
                    id,
                    date(format: "d-m"),
                    status,
                    workHours,
                    absentReason
                    replacement {
                        id,
                        name
                    }
                }
            }
        }
    `)

    const {data} = useGraphQL(DoctorQuery,{id: params['id']});



    if(!data?.data?.doctor){
        return <div>Loading...</div>
    }
    const doctor = data.data.doctor;

    const daySlots = doctor.currentMonthDaySlots?.map(function (daySlot) {
        return (
            <Tr key={doctor.id}>
                <Td>{ daySlot.date}</Td>

                { daySlot.status === StatusEnum.Present && <Td>{daySlot.workHours}</Td>}
                { daySlot.status === StatusEnum.Absent && <Td>{daySlot.absentReason}</Td>}

                <Td >{daySlot.replacement && <Link to={"/doctor/"+daySlot.replacement.id}>{daySlot.replacement.name}</Link>}</Td>
            </Tr>

        )
    })

    return <>
        <Heading mb='20px' textAlign='center'>{doctor.name}</Heading>
        <Flex gap='10px' mb='20px'>
            <Box maxWidth={'150px'} >
                <img src={doctor.photo}/>
            </Box>
            <Box>{ doctor.description}</Box>
        </Flex>

        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Дата</Th>
                        <Th>Робочі години/Статус</Th>
                        <Th>Заміна</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {daySlots}
                </Tbody>
            </Table>
        </TableContainer>

    </>
}