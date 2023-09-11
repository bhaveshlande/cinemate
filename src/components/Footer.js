import { Link } from "react-router-dom"
export const Footer = () => {
  return (
    <footer className="bg-white  shadow m-0 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-1 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/bhaveshbl9697/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instragram</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/bhavesh-lande-630892141/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/bhaveshbl9697?tab=repositories/" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
