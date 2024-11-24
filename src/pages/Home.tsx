import { Box, FormControl, Heading, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { DoctorList } from "../DoctorList";

export default function Home() {
  const intervalRef = useRef<number>();
  const [inputSearchQuery, setInputSearchQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function searchInputChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputSearchQuery(e.target.value);

    if (intervalRef.current) {
      window.clearTimeout(intervalRef.current);
    }
    intervalRef.current = window.setTimeout(function () {
      setSearchQuery(e.target.value);
    }, 300);
  }

  return (
    <Box
      margin={"0 auto"}
      maxWidth={"500px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Heading textAlign={"center"} mb={"50px"}>
        Time Table
      </Heading>

      <FormControl mb={"10px"}>
        <Input
          placeholder="Search"
          value={inputSearchQuery}
          onChange={searchInputChangeHandler}
        />
      </FormControl>

      <DoctorList search={searchQuery} />
    </Box>
  );
}
