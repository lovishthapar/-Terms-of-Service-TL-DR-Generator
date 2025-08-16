document.getElementById('tos-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form refresh
    
    const text = document.getElementById('tos-input').value;
    if (!text) {
        alert('Please paste some text!');
        return;
    }

    const outputDiv = document.getElementById('summary-output');
    const contentDiv = document.getElementById('summary-content');
    const spinner = document.getElementById('loading-spinner');
    const submitBtn = document.getElementById('submit-btn');

    // Show loading, hide output, disable button
    spinner.style.display = 'block';
    outputDiv.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Generating...';

    try {
        const response = await fetch('/summarize', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            throw new Error('Error from server');
        }

        const data = await response.json();
        if (data.error) {
            contentDiv.innerHTML = `<p class="text-danger">Error: ${data.error}</p>`;
        } else {
            // Format summary as list
            const lines = data.summary.split('\n').filter(line => line.trim());
            const listItems = lines.map(line => `<li>${line.trim().replace(/^- /, '')}</li>`).join('');
            contentDiv.innerHTML = `<ul>${listItems}</ul>`;
        }

        // Show output
        outputDiv.style.display = 'block';
    } catch (error) {
        contentDiv.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        outputDiv.style.display = 'block';
    } finally {
        // Hide loading, re-enable button
        spinner.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Generate Summary';
    }
});