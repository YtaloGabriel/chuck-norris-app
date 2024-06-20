import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="h-11 min-w-56 pr-4 pl-4 text-lg flex items-center justify-center bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition duration-300 ease-in-out"
    >
      {title}
    </button>
  )
}
