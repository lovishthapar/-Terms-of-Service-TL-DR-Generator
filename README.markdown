# Terms of Service TL;DR Generator

A simple web tool that summarizes lengthy Terms of Service (ToS) documents into concise, easy-to-read bullet points using the Google Gemini API. Built for hackathons, it demonstrates AI-powered text summarization with a clean, responsive UI.

![App in Action](images/working.png)

## Features
- Paste any ToS text and get a bulleted summary of key points:
  - Personal data collected
  - Data sharing with third parties
  - Rules for uploaded content
  - Dispute resolution
  - Account termination terms
- Responsive design with Bootstrap for mobile and desktop.
- Loading spinner and error handling for a smooth UX.
- Powered by Google Gemini API (free tier).

## Demo
Try the app by pasting a ToS text (e.g., from [Google's Terms](https://www.google.com/policies/terms/)) and clicking "Generate Summary." The screenshot below shows the app in action:

![Working Screenshot](working.png)

## Installation
1. **Prerequisites**:
   - Python 3.8+ (Anaconda recommended).
   - A Google Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/tos-tldr-generator.git
   cd tos-tldr-generator
   ```

3. **Set Up a Virtual Environment** (optional, but recommended):
   ```bash
   conda create -n iotp python=3.8
   conda activate iotp
   ```

4. **Install Dependencies**:
   ```bash
   pip install flask google-generative-ai python-dotenv
   ```

5. **Configure the API Key**:
   - Create a `.env` file in the project root:
     ```
     GEMINI_API_KEY=your_gemini_api_key_here
     ```
   - Replace `your_gemini_api_key_here` with your Gemini API key.

6. **Run the App**:
   ```bash
   python app.py
   ```
   - Open http://127.0.0.1:5000 in your browser.

## Usage
1. Paste a Terms of Service text into the textarea.
2. Click "Generate Summary."
3. View the summarized bullet points in a clean, card-based UI.

## Project Structure
```
tos-tldr-generator/
├── app.py              # Flask backend with Gemini API integration
├── index.html          # Frontend HTML with Bootstrap
├── static/
│   ├── styles.css      # Custom CSS
│   ├── script.js       # JavaScript for form handling
├── images/
│   ├── working.png     # Screenshot of the app
├── .env                # Environment variables (not committed)
├── README.md           # This file
```

## Troubleshooting
- **404 Errors for `styles.css` or `script.js`**: Ensure files are in the `static` folder and referenced as `/static/styles.css` in `index.html`.
- **API Errors**:
  - `403 PERMISSION_DENIED`: Verify your Gemini API key.
  - `429 RESOURCE_EXHAUSTED`: Wait due to free tier limits (1,500 requests/day).
- **UnicodeDecodeError**: Ensure `index.html` is saved as UTF-8 in your editor.

## License
MIT License. See [LICENSE](LICENSE) for details.

## Credits
- Built with [Flask](https://flask.palletsprojects.com/), [Bootstrap](https://getbootstrap.com/), and [Google Gemini API](https://aistudio.google.com/).
- Developed for hackathon use, showcasing AI-driven summarization.
