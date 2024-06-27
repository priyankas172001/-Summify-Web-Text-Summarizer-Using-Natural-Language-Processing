document.getElementById('summarizeButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = summarizeText(inputText);
    document.getElementById('outputText').innerHTML = outputText;
});

function summarizeText(text) {
    // Split the text into words
    const words = text.split(' ');

    // If the text has more than 100 words, truncate it to 100 words
    const summaryLength = Math.min(100, words.length);
    const summary = words.slice(0, summaryLength).join(' ');

    // Highlight the summarized words
    return highlightSummary(summary, text);
}

function highlightSummary(summary, originalText) {
    // Split the summary into words and wrap each in a span with a highlight class
    const highlightedSummary = summary.split(' ').map(word => {
        return originalText.includes(word) ? `<span class="highlight">${word}</span>` : word;
    }).join(' ');

    return highlightedSummary;
}


