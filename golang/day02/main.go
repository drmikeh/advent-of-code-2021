package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"strconv"
	"strings"
)

type location struct {
	pos   int
	depth int
}

func removeEmptyStrings(ss []string) (result []string) {
	for _, s := range ss {
		if len(s) > 0 {
			result = append(result, s)
		}
	}
	return
}

func tokenize(ss []string) (result [][]string) {
	for _, s := range ss {
		tokens := strings.Fields(s)
		result = append(result, tokens)
	}
	return
}

type Instruction struct {
	direction string
	amount    int
}

type Location struct {
	pos   int
	depth int
	aim   int
}

func readAndParseDataFile(fileName string) []Instruction {
	input, _ := ioutil.ReadFile(fileName)
	lines := strings.Split(string(input), "\n")
	lines = removeEmptyStrings(lines)
	tokenLines := tokenize(lines)
	var data []Instruction
	for _, d := range tokenLines {
		dir := d[0]
		amount, err := strconv.Atoi(d[1])
		if err != nil {
			log.Fatal(err)
		}
		v := Instruction{direction: dir, amount: amount}
		data = append(data, v)
	}
	return data
}

func part1() {
	data := readAndParseDataFile("input.txt")
	location := Location{}

	for _, instr := range data {
		switch instr.direction {
		case "forward":
			location.pos += instr.amount
		case "up":
			location.depth -= instr.amount
		case "down":
			location.depth += instr.amount
		default:
			log.Fatal("Unknown direction:", instr.direction)
		}
	}

	fmt.Println("Part 1:", location, location.pos*location.depth)
}

func part2() {
	data := readAndParseDataFile("input.txt")
	location := Location{}

	for _, instr := range data {
		switch instr.direction {
		case "forward":
			location.pos += instr.amount
			location.depth += instr.amount * location.aim
		case "up":
			location.aim -= instr.amount
		case "down":
			location.aim += instr.amount
		default:
			log.Fatal("Unknown direction:", instr.direction)
		}
	}

	fmt.Println("Part 2:", location, location.pos*location.depth)
}

func main() {
	part1()
	part2()
}
