export const evaluateEssay = (answer) => {
    if (!answer || typeof answer !== "string") return 0;
    
    const words = answer.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    const maxWordsForFullScore = 200;
    const maxScore = 10;
    
    let score = (wordCount / maxWordsForFullScore) * maxScore;
    
    return Math.round(Math.min(Math.max(score, 0), maxScore));
};