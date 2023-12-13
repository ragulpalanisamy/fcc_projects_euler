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
          <div className='grid grid-cols-5'>
        <Link href="/Even_Fibonacci_Numbers" style={{ marginRight: 10   }}>
          Even_Fibonacci_Numbers
        </Link>
        <Link href="/Multiples">
            Multiples
          </Link>
        <Link href="/Largest">
            Largest
          </Link>
        <Link href="/Larg_Palindrome_product">
            largest Palindrome Product
        </Link>
        <Link href="/SmallestMultiple">
            Smallest Multiple
        </Link>
        <Link href="/SumSquareDifference">
            Sum Square Difference
        </Link>
        <Link href="/NthPrime">
            Nth Prime
        </Link>
        <Link href="/largestProductinaSeries">
        largest Product in a Series
        </Link>
        <Link href="/Pythagorean_triplet">
        Pythagorean triplet
        </Link>
        <Link href="/Summation_of_Primes">
        Summation of Primes
        </Link>
        <Link href="/Larg_Prod_in_grid">
        Largest Product in a grid
        </Link>
        <Link href="/triangular_number">
        Triangular Number
        </Link>
        <Link href="/Large_Sum">
        largest sum
        </Link>
        <Link href="../Pro-1/Collatz_sequence">
        Collatz sequence
        </Link>
        <Link href="../Pro-1/latticePaths">
        lattice Paths
        </Link>
        <Link href="../Pro-1/power_diigit_sum">
        power diigit sum
        </Link>
        <Link href="../Pro-1/Number_Letter_Count">
        Number_Letter_Count
        </Link>
        <Link href="../Pro-1/Maxi_path_sum">
        Maxi_path_sum
        </Link>    
        <Link href="../Pro-1/Counting_Sunday">
        Counting Sunday
        </Link> 
        <Link href="../Pro-1/Factorial_digit_sum">
        Factorial_digit_sum
        </Link> 
        <Link href="../Pro-1/Factorial_digit">
        Factorial digit 
        </Link> 
        <Link href="../Pro-1/Amicable_numbers">
        Amicable numbers
        </Link> 
        <Link href="../Pro-1/Names_scores">
        Names scores        
        </Link> 
        <Link href="../Pro-2/Abudant_sum">
        Abudant sum
        </Link> 
        <Link href="../Pro-2/Lexicographic_permutations">
        Lexicographic permutations
        </Link> 
        <Link href="../Pro-2/Fibonacci_Number">
        Fibonacci Number
        </Link> 
        <Link href="../Pro-2/Reciprocal_cycles">
        Reciprocal cycles
        </Link>
        <Link href="../Pro-2/Quadratic_primes">
        Quadratic primes
        </Link>
        </div>
        </div>

      </>
  )
}
