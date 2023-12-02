def read_file(input):
    file = open(input, "r")
    file_read = file.read()
    file_split = file_read.splitlines()
    return file_split


file = read_file("input.txt")


def print_line(lines):
    all_numbs = []
    for line in lines:
        just_digits = list(filter(lambda symbol: symbol.isdigit(), list(line)))
        first, last = just_digits[0], just_digits[len(just_digits) - 1]
        all_numbs.append(int(first + last))
    return sum(all_numbs)


print(print_line(file))
