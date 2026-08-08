import React from "react";

export default function SmartTextTransformer({ text, setText }) {

  // Make text professional
  const makeProfessional = () => {

    if (!text.trim()) {
      return;
    }

    let result = text.trim();

    // Replace casual words
    result = result.replace(/\bhi\b/gi, "Hello");
    result = result.replace(/\bhey\b/gi, "Hello");
    result = result.replace(/\bthanks\b/gi, "Thank you");
    result = result.replace(/\bthx\b/gi, "Thank you");
    result = result.replace(/\bpls\b/gi, "please");
    result = result.replace(/\bplease\b/gi, "please");
    result = result.replace(/\bokay\b/gi, "Understood");
    result = result.replace(/\bok\b/gi, "Understood");
    result = result.replace(/\bwanna\b/gi, "would like to");
    result = result.replace(/\bgonna\b/gi, "going to");
    result = result.replace(/\bcan't\b/gi, "cannot");
    result = result.replace(/\bdon't\b/gi, "do not");
    result = result.replace(/\bcan't\b/gi, "cannot");

    // Remove extra spaces
    result = result.replace(/\s+/g, " ");

    // Capitalize first letter
    result =
      result.charAt(0).toUpperCase() +
      result.slice(1);

    setText(result);
  };


  // Make text simple
  const makeSimple = () => {

    if (!text.trim()) {
      return;
    }

    let result = text.trim();

    result = result.replace(
      /\butilize\b/gi,
      "use"
    );

    result = result.replace(
      /\bassistance\b/gi,
      "help"
    );

    result = result.replace(
      /\bapproximately\b/gi,
      "about"
    );

    result = result.replace(
      /\bdemonstrate\b/gi,
      "show"
    );

    result = result.replace(
      /\bcommence\b/gi,
      "start"
    );

    result = result.replace(
      /\bterminate\b/gi,
      "end"
    );

    result = result.replace(
      /\bobtain\b/gi,
      "get"
    );

    result = result.replace(
      /\brequire\b/gi,
      "need"
    );

    result = result.replace(
      /\badditional\b/gi,
      "extra"
    );

    result = result.replace(
      /\bnumerous\b/gi,
      "many"
    );

    result = result.replace(
      /\btherefore\b/gi,
      "so"
    );

    result = result.replace(
      /\bfurthermore\b/gi,
      "also"
    );

    result = result.replace(/\s+/g, " ");

    setText(result);
  };


  // Make text short
  const makeShort = () => {

    if (!text.trim()) {
      return;
    }

    const sentences = text
      .split(/[.!?]+/)
      .filter(sentence => sentence.trim() !== "");

    // Keep approximately half of the sentences
    const numberOfSentences = Math.max(
      1,
      Math.ceil(sentences.length / 2)
    );

    const shortText = sentences
      .slice(0, numberOfSentences)
      .map(sentence => sentence.trim())
      .join(". ");

    setText(shortText + ".");
  };


  // Convert text into bullet points
  const makeBulletPoints = () => {

    if (!text.trim()) {
      return;
    }

    const sentences = text
      .split(/[.!?]+/)
      .filter(sentence => sentence.trim() !== "");

    const bulletText = sentences
      .map(sentence => `• ${sentence.trim()}`)
      .join("\n");

    setText(bulletText);
  };


  // Capitalize every sentence
  const improveSentences = () => {

    if (!text.trim()) {
      return;
    }

    const sentences = text.split(/([.!?]\s*)/);

    let result = "";

    for (let i = 0; i < sentences.length; i++) {

      if (i % 2 === 0) {

        let sentence = sentences[i].trim();

        if (sentence.length > 0) {

          sentence =
            sentence.charAt(0).toUpperCase() +
            sentence.slice(1);

        }

        result += sentence;

      } else {

        result += sentences[i];

      }
    }

    setText(result);
  };


  return (

    <div className="container smart-transformer">

      <h2> Smart Text Transformer</h2>

      <p className="transformer-description">
        Transform your text into different styles with one click.
      </p>


      <div className="transformer-buttons">

        <button
          className="btn btn-success"
          onClick={makeProfessional}
          disabled={!text.trim()}
        >
          Make Professional
        </button>


        <button
          className="btn btn-info"
          onClick={makeSimple}
          disabled={!text.trim()}
        >
          Make Simple
        </button>


        <button
          className="btn btn-warning"
          onClick={makeShort}
          disabled={!text.trim()}
        >
           Make Short
        </button>


        <button
          className="btn btn-secondary"
          onClick={makeBulletPoints}
          disabled={!text.trim()}
        >
           Bullet Points
        </button>


        <button
          className="btn btn-dark"
          onClick={improveSentences}
          disabled={!text.trim()}
        >
           Improve Sentences
        </button>

      </div>

    </div>
  );
}