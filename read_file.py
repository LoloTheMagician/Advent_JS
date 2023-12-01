def read_file(input):
    file = open(input, "r")
    file_read = file.read()
    file_split = file_read.splitlines()
    return file_split

