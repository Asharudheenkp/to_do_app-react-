const Footer = () => {
  return (
    <footer className="text-center py-4">
    <p className="text-sm">
      &copy; {new Date().getFullYear()}{' '}
      <a 
        href="https://github.com/Asharudheenkp" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-400 hover:text-blue-600 font-semibold"
      >
        Asharudheen kp
      </a>. All rights reserved.
    </p>
  </footer>
  )
}

export default Footer