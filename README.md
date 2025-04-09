# QuizWhiz 🧠✨

**AI-Powered Quiz Generation for Educators and Learners**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ---

## Table of Contents

* [About The Project](#about-the-project)
    * [Problem Statement](#problem-statement)
    * [Solution](#solution)
    * [Purpose](#purpose)
* [Features](#features)
* [Potential Use Cases](#potential-use-cases)
* [Built With](#built-with)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
* [Usage](#usage)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)

---

## About The Project

QuizWhiz is an intelligent quiz generation tool designed to empower educators and streamline the learning process. It leverages the power of AI to automatically create relevant and engaging quizzes based on user-defined parameters.

### Problem Statement

Teachers often face significant challenges in:

1.  **Real-time Assessment:** Lacking efficient tools to gauge student understanding instantly during or after a lesson.
2.  **Timely Intervention:** Difficulty in identifying and assisting students who are falling behind promptly.
3.  **Time Constraints:** The manual creation of interactive and tailored quizzes for diverse learning needs is a time-consuming process.

### Solution

QuizWhiz addresses these challenges by providing an **AI-driven quiz generator**. Users (primarily educators, but also students) can simply input key details like:

* **Topic:** The specific subject matter for the quiz (e.g., "Photosynthesis", "Python Functions", "World War I Causes").
* **Subject:** The broader academic discipline (e.g., "Biology", "Computer Science", "History").
* **Difficulty:** The target audience's educational level (e.g., "Medium", "High", "Low").
* **Number of Questions:** The desired length of the quiz.
* **Content:** Additional content for the quiz.

Based on this input, QuizWhiz utilizes the Gemini API to generate a relevant and interactive quiz, saving valuable time and effort.

### Purpose

The primary goals of QuizWhiz are to:

* ✅ **Simplify Quiz Creation:** Make it effortless for educators to generate customized quizzes.
* 📚 **Facilitate Practice:** Provide students with readily available quizzes to practice and reinforce their understanding of specific topics.
* ⏱️ **Save Time:** Reduce the manual workload associated with quiz preparation.
* 🤖 **Leverage AI:** Utilize cutting-edge AI for relevant and potentially adaptive content generation.

---

## Features

* ✨ **AI-Powered Generation:** Uses Google's Gemini API to create quizzes based on input parameters.
* ⚙️ **Customizable Inputs:** Specify topic, subject, difficulty, and number of questions.
* ⚛️ **Modern Frontend:** Built with Next.js for a fast, interactive user experience.
* 🎨 **Styled Interface:** Utilizes Tailwind CSS for rapid and responsive UI development.
* 🚀 **Easy Deployment:** Ready for deployment on platforms like Vercel.
* 🧩 **Extensible:** Potential for future additions like different question types, scoring, feedback mechanisms, and user accounts.

---

## Potential Use Cases

* **E-learning Platforms:** Integrate QuizWhiz directly into online learning systems (LMS) for seamless quiz generation within courses.
* **Classroom Tool:** Teachers can quickly generate formative assessments or exit tickets.
* **Study Aid:** Students can generate practice quizzes for self-study and revision.
* **Tutoring:** Tutors can create tailored quizzes for their students.
* **Corporate Training:** Adaptable for generating quick knowledge checks in professional development settings.

---

## Built With

This project utilizes the following technologies:

* **[Next.js](https://nextjs.org/):** React framework for server-side rendering, static site generation, and overall application structure.
* **[Google Gemini API](https://ai.google.dev/):** The core AI engine for generating quiz content.
* **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for styling the user interface.
* **[React](https://reactjs.org/):** JavaScript library for building user interfaces.
* **[Vercel](https://vercel.com/):** Platform for frontend deployment and hosting.

**Development Tool:**

* **[Visual Studio Code (VS Code)](https://code.visualstudio.com/):** Code editor used for development.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* **Node.js:** Make sure you have Node.js installed (version 18.x or later recommended). You can download it from [nodejs.org](https://nodejs.org/).
* **npm/yarn/pnpm:** A Node.js package manager (npm is included with Node.js).
* **Google Gemini API Key:** You need an API key from Google AI Studio or Google Cloud Platform to use the Gemini API.
    * Get your key here: [Google AI for Developers](https://ai.google.dev/)
* **Git:** Necessary for cloning the repository.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/QuizWhiz.git](https://github.com/your-username/QuizWhiz.git) # Replace with your actual repo URL
    cd QuizWhiz
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a file named `.env.local` in the root directory of the project. Add your Gemini API key to this file:
    ```plaintext
    # .env.local
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```
    * **Important:** Add `.env.local` to your `.gitignore` file to prevent accidentally committing your API key.

---

## Usage

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    ```

2.  **Open your browser:**
    Navigate to `http://localhost:3000` (or the port specified in your terminal).

3.  **Generate a Quiz:**
    * Fill in the required fields in the user interface (Topic, Subject, Difficulty, Number of Questions).
    * Click the "Generate Quiz" button.
    * The application will interact with the Gemini API and display the generated quiz.

---

## Deployment

This Next.js application is optimized for deployment on **Vercel**.

1.  **Push your code** to a Git repository (GitHub, GitLab, Bitbucket).
2.  **Sign up or log in** to [Vercel](https://vercel.com/).
3.  **Import your Git repository** into Vercel.
4.  **Configure Project Settings:** Vercel usually detects Next.js projects automatically. You may need to adjust build commands or output directories if you have a non-standard setup.
5.  **Add Environment Variables:** Go to your project settings in Vercel, navigate to "Environment Variables", and add your `GEMINI_API_KEY` securely.
6.  **Deploy!** Vercel will build and deploy your application, providing you with a live URL.

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  **Fork the Project**
2.  **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3.  **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4.  **Push to the Branch** (`git push origin feature/AmazingFeature`)
5.  **Open a Pull Request**

Please ensure your code adheres to standard coding practices and includes relevant updates if necessary.

---

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

*(Note: You need to actually choose a license and add a LICENSE.txt file to your repository. MIT is a common and permissive choice.)*

---

## Acknowledgements

* Google for the powerful Gemini API.
* Vercel for seamless deployment.
* The creators of Next.js and Tailwind CSS.

---

## Contact

Kunal Agrawal / Project Link - [kunal.py3@gmail.com](mailto:kunal.py3@gmail.com) Project Link: [https://github.com/its-kunal/QuizWhiz](https://github.com/its-kunal/QuizWhiz) ---
