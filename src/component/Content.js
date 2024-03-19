import React, { useState, useEffect } from "react";
import styles from './Content.module.css'

const Content = () => {

    const pronounRegex = /\b(he|she|it|they|we|you|I|me|him|her|us|them|myself|yourself|himself|herself|itself|ourselves|yourselves|themselves)\b/gi;

    const [text, setText] = useState('');
    const [character, setCharacter] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [pronounCount, setPronounCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);
    const [longestWord, setLongestWord] = useState('');

    const TextinputHandler = (e) => {
        const newText = e.target.value;
        setText(newText);

        // Counting characters
        setCharacter(newText.length);

        // Counting words
        const words = newText.trim().split(/\s+/);
        setWordCount(words.length);
        if (newText == 0) {
            setWordCount(0)
        }

        // Counting sentences
        const sentences = newText.trim().split(/[.?!]/u);
        setSentenceCount(sentences.length - 1);

        // Counting pronouns
        const matches = newText.match(pronounRegex);
        setPronounCount(matches ? matches.length : 0);

        // **Debugging:**
        console.log('newText:', newText);

        // Counting paragraphs (improved regex)
        const regex = /(^|\n\n)(.*?)(?=\n\n|$)/gm;
        const newParagraphs = newText.match(regex) || [];
        setParagraphCount(newParagraphs.length);

        if (newText == 0) {
            setParagraphCount(0)
        }

        // check for the longest word



    };

    const findLongestWord = (inputText) => {
        let currentLongestWord = '';
        const words = inputText.trim().split(/\s+/);

        for (const word of words) {
            const trimmedWord = word.replace(/[\.,?!]$/, '');
            if (trimmedWord.length > currentLongestWord.length) {
                currentLongestWord = trimmedWord;
            }
        }

        return currentLongestWord;
    };


    useEffect(() => {
        const newLongestWord = findLongestWord(text);
        setLongestWord(newLongestWord);
    }, [text]);


    return (

        <div>
            <div className={styles.results_container}>
                <div className={styles.results_box}>
                    <span>Words</span>
                    <span>{wordCount}</span>
                </div>
                <div className={styles.results_box}>
                    <span>Characters</span>
                    <span>{character}</span>
                </div>
                <div className={styles.results_box}>
                    <span>Sentences</span>
                    <span>{sentenceCount}</span>
                </div>
                <div className={styles.results_box}>
                    <span>Paragraphs</span>
                    <span>{paragraphCount}</span>
                </div>
                <div className={styles.results_box}>
                    <span>Pronouns</span>
                    <span>{pronounCount}</span>
                </div>
            </div>
            <div className={styles.input}>
                <textarea onChange={TextinputHandler} value={text} type="text" placeholder="Paste/Enter your text here..."></textarea>
            </div>
            <div className={styles.longest}>Longest Word: - {longestWord}</div>
            <footer>
                <div className={styles.footer_container}>
                    <p>Built by Adisa Rasak</p>
                    <div className={styles.contact}>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>

                </div>
            </footer>
        </div>
    )
}


export default Content