const difficultyLevels = ['text-difficulty-easy', 'text-difficulty-medium', 'text-difficulty-hard'];
let failureCountDiv = 0;

const removeFirstMatchingDiv = () => {
    if (!difficultyLevels || !Array.isArray(difficultyLevels)) {
        console.error('difficultyLevels is not properly defined');
        return;
    }

    for (let level of difficultyLevels) {
        if (!level) continue;
        
        try {
            let div = document.querySelector(`div.${level}`);
            if (div && div.parentNode) {
                div.parentNode.removeChild(div);
                console.log(`Removed: ${div}`);
                return;
            }
        } catch (error) {
            console.error(`Error removing div with class ${level}:`, error);
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
    const classNames = ["label-success", "label-warning", "label-danger"];
    if (!classNames || !Array.isArray(classNames)) {
        console.error('classNames is not properly defined');
        return;
    }

    let removed = false;
    try {
        classNames.forEach(className => {
            if (!className) return;

            const spans = document.querySelectorAll(`span.${className}`);
            if (!spans) return;

            spans.forEach(span => {
                if (span && span.parentNode) {
                    span.parentNode.removeChild(span);
                    removed = true;
                }
            });
        });
    } catch (error) {
        console.error('Error in removeSpecificSpans:', error);
    }

    if (!removed) {
        failureCountSpans++;
        if (failureCountSpans < 1000) {
            setTimeout(removeSpecificSpans, 4);
        } else {
            console.log('Failed to find and remove specific spans after 1000 attempts');
        }
    }
}

removeSpecificSpans();

// Function to remove specific spans in ProblemSet
let failureCountSpansProblemSet = 0;
function removeSpecificSpansProblemSet() {
    const classNames = ["text-pink", "text-olive", "text-yellow"];
    if (!classNames || !Array.isArray(classNames)) {
        console.error('classNames is not properly defined');
        return;
    }

    let removed = false;
    try {
        classNames.forEach(className => {
            if (!className) return;

            const spans = document.querySelectorAll(`span.${className}`);
            if (!spans) return;

            spans.forEach(span => {
                if (span && span.parentNode) {
                    span.parentNode.removeChild(span);
                    removed = true;
                }
            });
        });
    } catch (error) {
        console.error('Error in removeSpecificSpansProblemSet:', error);
    }

    if (!removed) {
        failureCountSpansProblemSet++;
        if (failureCountSpansProblemSet < 1000) {
            setTimeout(removeSpecificSpansProblemSet, 1);
        } else {
            console.log('Failed to find and remove specific spans in ProblemSet after 1000 attempts');
        }
    }
}

removeSpecificSpansProblemSet();

// Function to remove specific paragraphs in StudyPlan
let failureCountParagraphs = 0;
function removeSpecificParagraphsStudyPlan() {
    const classNames = ["text-lc-green-60", "text-lc-yellow-60", "text-lc-red-60"];
    if (!classNames || !Array.isArray(classNames)) {
        console.error('classNames is not properly defined');
        return;
    }

    let removed = false;
    try {
        classNames.forEach(className => {
            if (!className) return;

            const paragraphs = document.querySelectorAll(`p.${className}`);
            if (!paragraphs) return;

            paragraphs.forEach(paragraph => {
                if (paragraph && paragraph.parentNode) {
                    paragraph.parentNode.removeChild(paragraph);
                    removed = true;
                }
            });
        });
    } catch (error) {
        console.error('Error in removeSpecificParagraphsStudyPlan:', error);
    }

    if (!removed) {
        failureCountParagraphs++;
        if (failureCountParagraphs < 1000) {
            setTimeout(removeSpecificParagraphsStudyPlan, 1);
        } else {
            console.log('Failed to find and remove specific paragraphs after 1000 attempts');
        }
    }
}

removeSpecificParagraphsStudyPlan();

// Function to remove specific paragraphs
function removeSpecificParagraphs() {
    const classNames = ["text-sd-easy", "text-sd-medium", "text-sd-hard"];
    if (!classNames || !Array.isArray(classNames)) {
        console.error('classNames is not properly defined');
        return;
    }

    try {
        classNames.forEach(className => {
            if (!className) return;

            const paragraphs = document.querySelectorAll(`p.${className}`);
            if (!paragraphs) return;

            paragraphs.forEach(paragraph => {
                if (paragraph && paragraph.parentNode) {
                    paragraph.parentNode.removeChild(paragraph);
                }
            });
        });
    } catch (error) {
        console.error('Error in removeSpecificParagraphs:', error);
    }

    setTimeout(removeSpecificParagraphs, 1);
}

removeSpecificParagraphs();