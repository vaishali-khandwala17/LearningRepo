# my_package/main.py

import os
from backend.create_structure import create_structure

def main():
    import sys
    if len(sys.argv) != 2:
        print("Usage: create-structure <base_directory>")
    else:
        base_directory = sys.argv[1]
        create_structure(base_directory)
        print(f"Project structure created in {base_directory}/backend")

if __name__ == "__main__":
    main()
