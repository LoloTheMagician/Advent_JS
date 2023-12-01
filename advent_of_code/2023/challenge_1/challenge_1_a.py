import read_file

file = read_file.read_file("input.txt")


def print_line(lines):
    for line in lines:
        print(line)


print_line(file)
