/**
 * Matches user input tokens against rubric keywords logic.
 *
 * @param {Array<string>} textDetails - Array of summarized bullet points or raw text segments.
 * @param {Object} rubric - The rubric object containing competencies and keywords.
 * @returns {Object} result - Map of competency to match details.
 */
module.exports = function matchKeywords(textDetails, rubric) {
  const dataset = textDetails.join(' ').toLowerCase();
  const evaluation = {};

  if (!rubric || !rubric.competencies) {
    return evaluation;
  }

  rubric.competencies.forEach(comp => {
    const matchedKeywords = comp.keywords.filter(keyword =>
      dataset.includes(keyword.toLowerCase())
    );

    const isObserved = matchedKeywords.length > 0;

    evaluation[comp.name] = {
      status: isObserved ? 'Observed' : 'Not Observed',
      matches: matchedKeywords,
      percentage: (matchedKeywords.length / comp.keywords.length) * 100
    };
  });

  return evaluation;
};
