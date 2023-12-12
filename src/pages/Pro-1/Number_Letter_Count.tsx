import React from 'react'
import "../../app/globals.css";
import DesignTypeScript from '../../components/DesignTypeScript';

export default function Number_Letter_Count() {
  const codesnippet = `
    // Approach inspired by discussion at
    // https://stackoverflow.com/questions/14766951/transform-numbers-to-words-in-lakh-crore-system 
    
    const UNITS = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
    ];
    const TENS = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
    ];
    const SHORTSCALE = [
      '',
      'thousand',
      'million',
      'billion',
      'trillion',
      'quadrillion',
      'quintillion',
      'sextillion',
      'septillion',
      'octillion',
      'nonillion'
    ];
    
    // convert triple of numbers into words
    function tripleInWords([hundreds, tens, ones]) {
      return [
        // hundreds
        hundreds === 0 ?
          '' :
          UNITS[hundreds] + 'hundred',
        // tens
        10*tens + ones < 20 ?
          '' :
          TENS[tens],
        // ones
        10 * tens + ones < 20 ?
          UNITS[10*tens + ones] :
          UNITS[ones],
      ];
    }
    
    // convert single number into words
    function numInWords(num) {
      // numbers less than 1 decillion supported
      if (Math.log10(num) > 32)
        return NaN;
      // convert to array of triples
      let numToArray = [];
      let numCopy = num;
      while (numCopy > 0) {
        const triple = numCopy % 1000;
        numCopy = Math.floor(numCopy / 1000);
        numToArray.push([
          // hundreds
          Math.floor(triple / 100),
          // tens
          Math.floor((triple % 100) / 10),
          // ones
          Math.floor(triple % 10),
        ])
      }
      // Convert to words
      return numToArray
        .map((triple) => tripleInWords(triple).join(''))
        .map((triple, index) => triple !== '' ? triple + SHORTSCALE[index] : '')
        .join('') +
        ((num % 100 > 0 && num >= 100) ? 'and' : '');
    }
    
    // Sum lengths of all words as numbers
    function numberLetterCounts(limit) {
      let numberLetters = 0;
      for (let i = 1; i <= limit; i++) {
        numberLetters += numInWords(i).length;
      }
      return numberLetters;
    }
    
    // test
    console.log(numberLetterCounts(1000));
    `;
  // Approach inspired by discussion at
  // https://stackoverflow.com/questions/14766951/transform-numbers-to-words-in-lakh-crore-system 

  const UNITS = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const TENS = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];
  const SHORTSCALE = [
    '',
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion'
  ];

  // convert triple of numbers into words
  function tripleInWords([hundreds, tens, ones]) {
    return [
      // hundreds
      hundreds === 0 ?
        '' :
        UNITS[hundreds] + 'hundred',
      // tens
      10 * tens + ones < 20 ?
        '' :
        TENS[tens],
      // ones
      10 * tens + ones < 20 ?
        UNITS[10 * tens + ones] :
        UNITS[ones],
    ];
  }

  // convert single number into words
  function numInWords(num) {
    // numbers less than 1 decillion supported
    if (Math.log10(num) > 32)
      return NaN;
    // convert to array of triples
    let numToArray: any = [];
    let numCopy = num;
    while (numCopy > 0) {
      const triple = numCopy % 1000;
      numCopy = Math.floor(numCopy / 1000);
      numToArray.push([
        // hundreds
        Math.floor(triple / 100),
        // tens
        Math.floor((triple % 100) / 10),
        // ones
        Math.floor(triple % 10),
      ])
    }
    // Convert to words
    return numToArray
      .map((triple) => tripleInWords(triple).join(''))
      .map((triple, index) => triple !== '' ? triple + SHORTSCALE[index] : '')
      .join('') +
      ((num % 100 > 0 && num >= 100) ? 'and' : '');
  }

  // Sum lengths of all words as numbers
  function numberLetterCounts(limit) {
    let numberLetters = 0;
    for (let i = 1; i <= limit; i++) {
      numberLetters += numInWords(i).toString().length;
    }
    return numberLetters;
  }

  // test
  console.log(numberLetterCounts(1000));
  return (
    <div>
      <DesignTypeScript />
      <h1>
        Number Letter Count
      </h1>
      <pre>
        <code>
          {codesnippet}
        </code>
      </pre>
      <p>
        The sum of the digits in the number 2^15 is: {numberLetterCounts(1000)}
      </p>

    </div>
  )
}
