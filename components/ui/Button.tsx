import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseStyles =
      'font-semibold rounded-full transition-all inline-flex items-center justify-center'

    const variants = {
      primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl',
      secondary: 'bg-gray-900 text-white hover:bg-gray-800',
      outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
      ghost: 'text-gray-700 hover:bg-gray-100',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
