package main

import (
	"fmt"

	"github.com/drmikeh/aoc"
)

func part1(data []int) int {
	count := 0
	for i := 1; i < len(data); i++ {
		if data[i] > data[i-1] {
			count++
		}
	}
	return count
}

func part2(data []int) int {
	count := 0
	for i := 3; i < len(data); i++ {
		w1 := data[i-3] + data[i-2] + data[i-1]
		w2 := data[i-2] + data[i-1] + data[i]
		if w2 > w1 {
			count++
		}
	}
	return count
}

func main() {
	data := aoc.ReadFileOfInts("input.txt")
	fmt.Println("Part 1:", part1(data))
	fmt.Println("Part 2:", part2(data))
}
