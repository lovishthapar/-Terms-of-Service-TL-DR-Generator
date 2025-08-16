from flask import Flask, request, jsonify, render_template_string
import google.generativeai as genai
import os

app = Flask(__name__)

# Replace with your Gemini API key
GEMINI_API_KEY = 'your gemini api key'  
genai.configure(api_key=GEMINI_API_KEY)

@app.route('/')
def index():
    # Serve the HTML directly
    with open('index.html', 'r') as f:
        html = f.read()
    return html

@app.route('/summarize', methods=['POST'])
def summarize():
    tos_text = request.json.get('text')
    if not tos_text:
        return jsonify({'error': 'No text provided'}), 400

    # Custom prompt for summarization
    prompt = f"""
    Summarize the following Terms of Service in a concise bulleted list. Focus on these key points:
    - What personal data the company collects.
    - Whether the company can sell your data to third parties.
    - Rules about content you upload.
    - How disputes are handled.
    - The terms under which your account can be terminated.
    Only include these points if they are mentioned in the text. Use simple, easy-to-read language.

    Terms of Service text:
    {tos_text}
    """

    try:
        # Initialize the Gemini model (use 'gemini-1.5-flash' for free tier)
        model = genai.GenerativeModel('gemini-1.5-flash')
        response = model.generate_content(prompt, generation_config={'max_output_tokens': 500})
        summary = response.text
        return jsonify({'summary': summary})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
