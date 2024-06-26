# my_package/create_structure.py

import os

def create_structure(base_dir):
    structure = [
        "api/controller",
        "client",
        "custom_enum",
        "dao",
        "db",
        "dto",
        "routes",
        "service",
        "utils",
        "vo",
    ]

    for path in structure:
        dir_path = os.path.join(base_dir, "backend", path)
        os.makedirs(dir_path, exist_ok=True)

    print(f"Project structure created in {base_dir}/backend")
