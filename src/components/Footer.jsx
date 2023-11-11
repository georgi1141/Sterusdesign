import React from 'react'
import "./footer.css"
import { GithubFilled } from '@ant-design/icons'

function Footer() {
  return (
    <footer className="site-footer"> &copy; 2023 Copyright <a className='github' href="https://github.com/georgi1141"><GithubFilled/> Georgi Yanev</a></footer>
  )
}

export default Footer