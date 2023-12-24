# Your Project Name

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Issues](https://img.shields.io/github/issues/your-username/your-repo.svg)](https://github.com/your-username/your-repo/issues)
[![GitHub Stars](https://img.shields.io/github/stars/your-username/your-repo.svg)](https://github.com/your-username/your-repo/stargazers)

A SIMPLE NODEJS APP WITH COMMAND LINE INTERFACE ? WITH DOCKER RUNNING ENVIRONEMENT

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgments](#acknowledgments)
## Installation

Follow these steps to set up and run the project:

1. **Clone the GitHub repository:**

    ```bash
    git clone https://github.com/your-username/ASEDS.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd ASEDS
    ```

3. **Ensure that the directory structure is as follows:**

    ```
    ASEDS/
    ├── src/
    │   └── index.js
    ├── data/
    │   └── question_answer.csv
    ├── package.json
    ├── .env
    ├── Dockerfile
    ```

4. **Start the Docker engine:**

    - Open PowerShell as an administrator.

5. **Navigate to the project folder:**

    ```bash
    cd path\to\ASEDS
    ```

6. **Build the Docker image:**

    ```bash
    docker build -t project .
    ```

7. **Run the Docker container:**

    ```bash
    docker run -it -v ${pwd}/data:/usr/src/app/data project
    ```

    This command mounts the `data` directory from your host machine to the container.

8. **Check the updated file `question_answer.csv` in your host machine after each run!**




