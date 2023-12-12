import React from 'react'
import DesignTypeScript from '../../components/DesignTypeScript';
import "../../app/globals.css"

export default function Names_scores() {
    const codesnippet = `
    function nameScoreCalc(word) {
        let sum = 0;
        let alphabets = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (let i = 0 ; i < word.length; i++)
          sum += alphabets.indexOf(word[i].toLowerCase());
        return sum;
      }
      function namesScores(arr) {
        arr = [...arr].sort();
        arr.unshift('');
        let total = 0;
        for (let i = 1 ; i < arr.length; i++)
          total += nameScoreCalc(arr[i]) * i;
        return total;
      }
      const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
      const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
    `;

    function nameScoreCalc(word) {
        let sum = 0;
        let alphabets = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (let i = 0; i < word.length; i++)
            sum += alphabets.indexOf(word[i].toLowerCase());
        return sum;
    }
    function namesScores(arr) {
        arr = [...arr].sort();
        arr.unshift('');
        let total = 0;
        for (let i = 1; i < arr.length; i++)
            total += nameScoreCalc(arr[i]) * i;
        return total;
    }
    const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
    const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];


    const anotherSolution = `
    function nameScoreCalc(word) {
        return [ ...word ]
        .reduce((sum, letter) => sum += letter.charCodeAt() - 64, 0);
      }
      
      function namesScores(arr) {
        return arr
          .sort((a, b) => a < b ? - 1: a > b ? 1 : 0)
          .reduce((total, word, i) => total += nameScoreCalc(word) * (i + 1), 0);
      }
      const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
      const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
    `;

    function nameScoreCal(word) {
        return [...word]
            .reduce((sum, letter) => sum += letter.charCodeAt() - 64, 0);
    }

    function namesScore(arr) {
        return arr
            .sort((a, b) => a < b ? - 1 : a > b ? 1 : 0)
            .reduce((total, word, i) => total += nameScoreCalc(word) * (i + 1), 0);
    }
    const test3 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
    const test4 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
    return (
        <div>
            <DesignTypeScript />
            <h1>
                Names scores
            </h1>
            <pre>
                <code>
                    {codesnippet}
                </code>
            </pre>
            <p>
                The total score of all names is: {namesScores(test1)}
            </p>
            <p>
                The total score of all names is: {namesScores(test2)}
            </p>

            <pre>
                <code>
                    {anotherSolution}
                </code>
            </pre>

            <p>
                The total score of all names is: {namesScores(test3)}
            </p>
        </div>
    )
}
