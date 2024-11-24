import { Flex } from "@chakra-ui/react";

interface SearchFormProps {
  value: string;
  onChange: (value: string) => void;
}
export function SearchForm({ value, onChange }: SearchFormProps) {
  return (
    <Flex>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="П.І.Б."
      />
    </Flex>
  );
}
