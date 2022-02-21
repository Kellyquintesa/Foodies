import Link from 'next/link'

 function Home() {
  return (
    <ul>
    <li>
      <Link href="/loginForm/login">
        <a>login1</a>
      </Link>
    </li>
    <li>
      <Link href="/loginForm/login2">
        <a>About Us</a>
      </Link>
    </li>
    <li>
      <Link href="/loginForm/login3">
        <a>Blog Post</a>
      </Link>
    </li>
  </ul>
  )
}

export default Home