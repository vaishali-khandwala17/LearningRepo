# setup.py

from setuptools import setup, find_packages

setup(
    name="backend",
    version="0.1",
    packages=find_packages(),
    entry_points={
        "console_scripts": [
            "create-structure=backend.main:main",
        ],
    },
)
