import Link from 'next/link'

const HeaderMenu = ({ links }) => {
  return (
    <>
      <div className=''></div>
      {links.map(
        link =>
          link.show && (
            <li key={link.id} className='block ml-4 text-black dark:text-gray-50 nav'>
              <Link href={link.to} target={link.external ? '_blank' : null}>
                {link.name}
              </Link>
            </li>
          ),
      )}
    </>
  )
}

export default HeaderMenu
