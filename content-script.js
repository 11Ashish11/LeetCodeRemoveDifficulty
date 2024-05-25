const difficultyLevels = ['text-difficulty-easy', 'text-difficulty-medium', 'text-difficulty-hard'];
let failureCountDiv = 0;

const removeFirstMatchingDiv = () => {
    for (let level of difficultyLevels) {
        let div = document.querySelector(`div.${level}`);
        if (div) {
            div.remove();
            console.log(`Removed: ${div}`);
            return;
        }
    }
    failureCountDiv++;
    if (failureCountDiv < 1000) {
        setTimeout(removeFirstMatchingDiv, 1);
    } else {
        console.log('Failed to find and remove div after 1000 attempts');
    }
};

// Initial call after a delay of 500 ms
setTimeout(removeFirstMatchingDiv, 500);


// Function to remove specific spans
let failureCountSpans = 0;
function removeSpecificSpans() {
    // Define the class names to target
    const classNames = ["label-success", "label-warning", "label-danger"];

    // Loop through each class name
    let removed = false;
    classNames.forEach(className => {
        // Select all spans with the current class name
        const spans = document.querySelectorAll(`span.${className}`);

        // Loop through each span and remove it
        spans.forEach(span => {
            span.parentNode.removeChild(span);
            removed = true;
        });
    });

    if (!removed) {
        failureCountSpans++;
        if (failureCountSpans < 1000) {
            setTimeout(removeSpecificSpans, 1);
        } else {
            console.log('Failed to find and remove specific spans after 1000 attempts');
        }
    }
}

// Execute the function to remove the spans
removeSpecificSpans();


// Function to remove specific spans in ProblemSet
let failureCountSpansProblemSet = 0;
function removeSpecificSpansProblemSet() {
    // Define the class names to target
    const classNames = ["text-pink", "text-olive", "text-yellow"];

    // Loop through each class name
    let removed = false;
    classNames.forEach(className => {
        // Select all spans with the current class name
        const spans = document.querySelectorAll(`span.${className}`);

        // Loop through each span and remove it
        spans.forEach(span => {
            span.parentNode.removeChild(span);
            removed = true;
        });
    });

    if (!removed) {
        failureCountSpansProblemSet++;
        if (failureCountSpansProblemSet < 1000) {
            setTimeout(removeSpecificSpansProblemSet, 1);
        } else {
            console.log('Failed to find and remove specific spans in ProblemSet after 1000 attempts');
        }
    }
}

// Execute the function to remove the spans in ProblemSet
removeSpecificSpansProblemSet();


// Function to remove specific paragraphs
let failureCountParagraphs = 0;
function removeSpecificParagraphsStudyPlan() {
    // Define the class names to target
    const classNames = ["text-lc-green-60", "text-lc-yellow-60", "text-lc-red-60"];

    // Loop through each class name
    let removed = false;
    classNames.forEach(className => {
        // Select all paragraphs with the current class name
        const paragraphs = document.querySelectorAll(`p.${className}`);

        // Loop through each paragraph and remove it
        paragraphs.forEach(paragraph => {
            paragraph.parentNode.removeChild(paragraph);
            removed = true;
        });
    });

    if (!removed) {
        failureCountParagraphs++;
        if (failureCountParagraphs < 1000) {
            setTimeout(removeSpecificParagraphsStudyPlan, 1);
        } else {
            console.log('Failed to find and remove specific paragraphs after 1000 attempts');
        }
    }
}

// Execute the function to remove the paragraphs
removeSpecificParagraphsStudyPlan();





// Function to remove specific paragraphs
function removeSpecificParagraphs() {
    // Define the class names to target
    const classNames = ["text-sd-easy", "text-sd-medium", "text-sd-hard"];

    // Loop through each class name
    classNames.forEach(className => {
        // Select all paragraphs with the current class name
        const paragraphs = document.querySelectorAll(`p.${className}`);

        // Loop through each paragraph and remove it
        paragraphs.forEach(paragraph => {
            paragraph.parentNode.removeChild(paragraph);
        });
    });

    setTimeout(removeSpecificParagraphs, 1);
}

// Execute the function to remove the paragraphs
removeSpecificParagraphs();

