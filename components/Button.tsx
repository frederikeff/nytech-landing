// components/Button.tsx
interface ButtonProps {
    variant?: 'primary' | 'secondary'
    children: React.ReactNode
    href?: string
    onClick?: () => void
    className?: string
  }
  
  export function Button({ 
    variant = 'primary', 
    children, 
    href, 
    onClick,
    className = '' 
  }: ButtonProps) {
    const baseStyles = "px-4 py-2 text-sm font-medium rounded-md transition-colors"
    const styles = {
      primary: `${baseStyles} bg-blue-600 text-white hover:bg-blue-700`,
      secondary: `${baseStyles} text-gray-700 hover:text-gray-900`
    }
  
    if (href) {
      return (
        <a href={href} className={`${styles[variant]} ${className}`}>
          {children}
        </a>
      )
    }
  
    return (
      <button onClick={onClick} className={`${styles[variant]} ${className}`}>
        {children}
      </button>
    )
  }