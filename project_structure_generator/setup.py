from setuptools import setup, find_packages

setup(
    name="project_structure_generator",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    entry_points={
        'console_scripts': [
            'create_structure=project_structure_generator.generator:main',
        ],
    },
    author="Your Name",
    author_email="your.email@example.com",
    description="A package to generate a predefined project structure",
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url="https://github.com/yourusername/project_structure_generator",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)