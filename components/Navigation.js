import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='nav'>
      <div className="nav__items">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navigation
