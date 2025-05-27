# NeuralInk

NeuralInk is an AI-powered article generator that creates informative and engaging content on any topic. Built with Node.js and OpenAI's GPT-3.5, it provides a seamless experience for generating well-written articles in seconds.

## Features

- 🚀 Instant article generation
- 🎯 Topic-based content creation
- 💡 AI-powered writing assistance
- 📱 Responsive and modern UI
- ⚡ Fast and efficient performance

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/NeuralInk.git
cd NeuralInk
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3000
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter a topic in the input field
3. Click "Generate Article"
4. Wait for the AI to generate your article
5. Read and enjoy your generated content!

## Project Structure

```
NeuralInk/
├── public/
│   └── index.html      # Frontend interface
├── server.js           # Backend server
├── package.json        # Project dependencies
└── .env                # Environment variables
```

## Code Review Test Script

The `codereview-test` script is a simple calculator script designed to test code review tools. It includes the following components:

- **Calculator Class**: A class with basic arithmetic operations and a history of calculations.
- **calculate_average Function**: Computes the average of a list of numbers.
- **main Function**: Demonstrates the use of the calculator and other operations.

### Known Issues

- **Missing Input Validation**: Functions do not validate input types or values.
- **Potential Division by Zero**: The `calculate_average` and `divide` methods do not check for division by zero.
- **Security Concerns**: The use of `eval` poses a security risk.
- **Syntax and Logic Errors**: Includes syntax errors, such as missing brackets, and logic errors, such as incorrect function calls.
- **Inefficient Code**: Contains inefficient loops and string concatenation practices.
- **Missing Exception Handling**: File operations lack exception handling.

## Contributing

We welcome contributions to NeuralInk! Here's how you can help:

1. Fork the repository
2. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit them:
```bash
git commit -m 'Add some feature'
```

4. Push to your branch:
```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request

### Guidelines for Contributions

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure your code is well-documented

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for their powerful GPT-3.5 API
- Express.js for the backend framework
- Tailwind CSS for the beautiful UI components

## Support

If you encounter any issues or have suggestions, please open an issue in the GitHub repository.