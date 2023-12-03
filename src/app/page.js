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
      </>

  )
}
