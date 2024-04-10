import React, {useState} from 'react';
import {
    Box,
    Center,
    Container, Flex, FormControl,
    Heading, Input, InputGroup, InputLeftElement, Table, TableContainer, Tbody, Td, Th, Thead, Tr, VStack,

} from "@chakra-ui/react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import {graphql} from "./gql";
import {useGraphQL} from "./use-graphql";
import {DoctorItem} from "./DoctorItem";
import {SearchIcon} from "@chakra-ui/icons";

function App() {

    return (

         <>
            <Container maxW='4xl'></Container>
         </>
    );
}
export default App;
