'use client'
import Link from 'next/link'

export default function Home() {
  return  (
  <>
   
  <Link href="/Even_Fibonacci_Numbers" style={{ marginRight: 10  }}>
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
      </>

  )
}
