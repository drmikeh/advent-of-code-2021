package aoc

import (
	"bufio"
	"io/ioutil"
	"log"
	"os"
	"strconv"
)

func ReadFileOfBytes(fileName string) []byte {
	file, err := os.Open(fileName)
	if err != nil {
		log.Fatal(err)
	}
	defer func() {
		if err = file.Close(); err != nil {
			log.Fatal(err)
		}
	}()

	b, err := ioutil.ReadAll(file)
	return b
}

func ReadFileOfStrings(fileName string) []string {
	var data []string

	file, err := os.Open(fileName)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		data = append(data, scanner.Text())
	}
	return data
}

func ReadFileOfInts(fileName string) []int {
	var data []int
	file, err := os.Open(fileName)
	if err != nil {
		log.Fatal(err)
	}
	scanner := bufio.NewScanner(file)

	// Default scanner is bufio.ScanLines. Lets use ScanWords.
	// Could also use a custom function of SplitFunc type
	// scanner.Split(bufio.ScanWords)

	for scanner.Scan() {
		n, err := strconv.Atoi(scanner.Text())
		if err == nil {
			data = append(data, n)
		} else {
			log.Fatal(err)
		}
	}
	return data
}
