# chatgpt API

A SIMPLE NODEJS APP WITH COMMAND LINE INTERFACE, WITH DOCKER RUNNING ENVIRONMENT

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Managing API Keys](#managing-api-keys)

## Installation

Follow these steps to set up and run the project:

1. **Clone the GitHub repository:**

    ```bash
    git clone https://github.com/Elyoussf/ASEDS.git
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

## Managing API Keys:

When working with this application, you'll need an API key from OpenAI. Follow these steps to manage your OpenAI API key:

1. **Get your OpenAI API key:**
   - Sign up for an account on the OpenAI platform.
   - Obtain your API key from the OpenAI dashboard.

2. **Insert your API key in the `.env` file:**
   - In your local project directory, open the `.env` file.
   - Add the following line, replacing `your_openai_api_key_here` with your actual OpenAI API key:
     ```
     OPEN_API_KEY=your_openai_api_key_here
     ```


## Usage:

1. **Start the Docker engine:**

    - Open PowerShell as an administrator.

2. **Navigate to the project folder:**

    ```bash
    cd path\to\ASEDS
    ```

3. **Build the Docker image:**

    ```bash
    docker build -t project .
    ```

4. **Run the Docker container:**

    ```bash
    docker run -it -v ${pwd}/data:/usr/src/app/data project
    ```

    This command mounts the `data` directory from your host machine to the container.

5. **Insert your question and press enter.**

6. **Check the updated file `question_answer.csv` in your host machine after each run!**
