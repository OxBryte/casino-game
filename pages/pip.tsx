import React, { useState } from 'react'
import {
    Select,
    Input,
    Button,
    VStack,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    Box,
    Text,
} from '@chakra-ui/react';

export default function PipCals() {

    const pipValues = {
        // These are example values, and they may not be accurate.
        // You need to provide actual pip values for each currency pair.
        "EURUSD": 0.0001,
        "USDJPY": 0.01,
        "GBPUSD": 0.0001,
        "USDCHF": 0.0001,
        "USDCAD": 0.0001,
        // ... add other currency pairs as needed
    };

    const [selectedPair, setSelectedPair] = useState('EURUSD');
    const [lotSize, setLotSize] = useState(0);
    const [pips, setPips] = useState(0);
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const valuePerPip = pipValues[selectedPair];
        const pipValue = lotSize * pips * valuePerPip;
        setResult(pipValue);
    };

    return (
        <>
            <VStack spacing={4}>
                <FormControl id="currency-pair">
                    <FormLabel>Currency Pair</FormLabel>
                    <Select onChange={(e) => setSelectedPair(e.target.value)}>
                        {Object.keys(pipValues).map((pair) => (
                            <option key={pair} value={pair}>{pair}</option>
                        ))}
                    </Select>
                </FormControl>

                <FormControl id="lot-size">
                    <FormLabel>Lot Size</FormLabel>
                    <NumberInput min={0} onChange={(valueString) => setLotSize(parseFloat(valueString))}>
                        <NumberInputField />
                    </NumberInput>
                </FormControl>

                <FormControl id="pips">
                    <FormLabel>Number of Pips</FormLabel>
                    <Input type="number" onChange={(e) => setPips(parseFloat(e.target.value))} />
                </FormControl>

                <Button colorScheme="blue" onClick={handleCalculate}>Calculate</Button>

                {result !== null && (
                    <Box>
                        <Text>{`The value of ${pips} pips for a ${lotSize} lot size in ${selectedPair} is:`}</Text>
                        <Text fontWeight="bold">{result.toFixed(2)}</Text>
                    </Box>
                )}
            </VStack>
        </>
    )
}
