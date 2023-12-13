'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import Design from '../components/Design';

export default function Home() {
    return (
      <>
        <Design />
        <div style={{ marginTop: 20, marginLeft: 20 }} className='container'>
          <h1 className='text-3xl text-center p-2 bg-white text-purple-600 mb-10'> FCC Project Euler</h1> 
        <Link href="/Even_Fibonacci_Numbers" style={{ marginRight: 10   }}>
          Even_Fibonacci_Numbers
        </Link>
        <br></br>
        <Link href="/Multiples">
            Multiples
          </Link>
        <br></br>
        <Link href="/Largest">
            Largest
          </Link>
        <br></br>
        <Link href="/Larg_Palindrome_product">
            largest Palindrome Product
        </Link>
        <br></br>
        <Link href="/SmallestMultiple">
            Smallest Multiple
        </Link>
        <br></br>
        <Link href="/SumSquareDifference">
            Sum Square Difference
        </Link>
        <br></br>
        <Link href="/NthPrime">
            Nth Prime
        </Link>
        <br></br>
        <Link href="/largestProductinaSeries">
        largest Product in a Series
        </Link>
        <br></br>
        <Link href="/Pythagorean_triplet">
        Pythagorean triplet
        </Link>
        <br></br>
        <Link href="/Summation_of_Primes">
        Summation of Primes
        </Link>
        <br></br>
        <Link href="/Larg_Prod_in_grid">
        Largest Product in a grid
        </Link>
        <br></br>
        <Link href="/triangular_number">
        Triangular Number
        </Link>
        <br></br>
        <Link href="/Large_Sum">
        largest sum
        </Link>
        <br></br>
        <Link href="../Pro-1/Collatz_sequence">
        Collatz sequence
        </Link>
        <br></br>
        <Link href="../Pro-1/latticePaths">
        lattice Paths
        </Link>
        <br></br>
        <Link href="../Pro-1/power_diigit_sum">
        power diigit sum
        </Link>
        <br></br>
        <Link href="../Pro-1/Number_Letter_Count">
        Number_Letter_Count
        </Link>
        <br></br>
        <Link href="../Pro-1/Maxi_path_sum">
        Maxi_path_sum
        </Link>    
        <br></br>
        <Link href="../Pro-1/Counting_Sunday">
        Counting Sunday
        </Link> 
        <br></br>
        <Link href="../Pro-1/Factorial_digit_sum">
        Factorial_digit_sum
        </Link> 
        <br></br>
        <Link href="../Pro-1/Factorial_digit">
        Factorial digit 
        </Link> 
        <br></br>
        <Link href="../Pro-1/Amicable_numbers">
        Amicable numbers
        </Link> 
        <br></br>
        <Link href="../Pro-1/Names_scores">
        Names scores        
        </Link> 
        <br></br>
        <Link href="../Pro-2/Abudant_sum">
        Abudant sum
        </Link> 
        <Link href="../Pro-2/Lexicographic_permutations">
        Lexicographic permutations
        </Link> 
        </div>
      </>
  )
}
