import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

export default function Game() {


    const [board, setBoard] = useState(createBoard());
    const [score, setScore] = useState(0);
    const [history, setHistory] = useState([]);

    function createBoard() {
        // Initialize a 4x4 board with zeros
        let board = Array(4).fill(0).map(row => Array(4).fill(0));

        // Add two random 2's or 4's
        addRandomTile(board);
        addRandomTile(board);

        return board;
    }

    function addRandomTile(board) {
        let availableTiles = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (board[i][j] === 0) availableTiles.push([i, j]);
            }
        }
        if (availableTiles.length) {
            let [x, y] = availableTiles[Math.floor(Math.random() * availableTiles.length)];
            board[x][y] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    function compressBoard(board) {
        return board.map(row => {
            const nonZeroRow = row.filter(tile => tile !== 0);
            const zeros = Array(4 - nonZeroRow.length).fill(0);
            return nonZeroRow.concat(zeros);
        });
    }

    function mergeBoard(board) {
        let points = 0;
        for (let i = 0; i < 4; i++) {
            for (let j = 3; j >= 1; j--) {
                if (board[i][j] === board[i][j - 1] && board[i][j] !== 0) {
                    board[i][j] *= 2;
                    points += board[i][j];
                    board[i][j - 1] = 0;
                }
            }
        }
        return { newBoard: board, points };
    }

    function reverseBoard(board) {
        return board.map(row => row.slice().reverse());
    }

    function rotateBoard(board) {
        return board[0].map((_, colIndex) => board.map(row => row[colIndex])).reverse();
    }

    function moveLeft(board) {
        let compressed = compressBoard(board);
        let merged = mergeBoard(compressed);
        let finalBoard = compressBoard(merged.newBoard);
        return { newBoard: finalBoard, points: merged.points };
    }

    function moveRight(board) {
        let reversed = reverseBoard(board);
        let result = moveLeft(reversed);
        return { newBoard: reverseBoard(result.newBoard), points: result.points };
    }

    function moveUp(board) {
        let rotated = rotateBoard(board);
        let result = moveLeft(rotated);
        return { newBoard: rotateBoard(rotateBoard(rotateBoard(result.newBoard))), points: result.points };
    }

    function moveDown(board) {
        let rotated = rotateBoard(board);
        let result = moveRight(rotated);
        return { newBoard: rotateBoard(rotateBoard(rotateBoard(result.newBoard))), points: result.points };
    }

    useEffect(() => {
        function handleKeyPress(event) {
            let result;

            switch (event.key) {
                case "ArrowLeft":
                    result = moveLeft(board);
                    break;
                case "ArrowRight":
                    result = moveRight(board);
                    break;
                case "ArrowUp":
                    result = moveUp(board);
                    break;
                case "ArrowDown":
                    result = moveDown(board);
                    break;
            }

            if (result && result.newBoard) {
                const newScore = score + result.points;
                setScore(newScore);
                setHistory(prevHistory => [...prevHistory, { board: result.newBoard, score: newScore }]);
                addRandomTile(result.newBoard);
                setBoard(result.newBoard);
            }
        }

        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [board, score]);


    return (
        <>
            <Box w="260px" mx="auto" mt={10} gridGap={4} display="grid" gridTemplateColumns="repeat(4, 60px)" justifyContent="center" alignItems="center">
                {board.flatMap((row, rowIndex) => (
                    row.map((tile, colIndex) => (
                        <Box key={`${rowIndex}-${colIndex}`} w="60px" h="60px" bg={tile === 4 ? 'red.800' : tile === 2 ? "purple.800" : tile === 8 ? 'orange.600' : tile === 16 ? 'green.800' : tile === 32 ? 'blue.800' : tile === 64 ? 'pink.800' : tile === 128 ? 'orange.800' : "whiteAlpha.200"} display="flex" justifyContent="center" alignItems="center">
                            {tile !== 0 && tile}
                        </Box>
                    ))
                ))}
            </Box>
            <Box w="260px" mx="auto" mt={5}>
                <p>Score: {score}</p>
            </Box>
            {/* <Box w="260px" mx="auto" mt={5}>
                <h3>History</h3>
                <ul> 
                    {history.map((entry, index) => (
                        <li key={index}>
                            Move {index + 1}: {entry.score}
                        </li>
                    ))}
                </ul>
            </Box> */}
        </>
    )
}
