import { ReactNode } from "react"

const Hello: React.FC<{children: ReactNode}> = ({children}) => {
  return children
}

export default Hello