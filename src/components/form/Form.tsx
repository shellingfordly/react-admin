export default function Form({ children, ...props }: any) {
  
  
	return ( 
    <form {...props}>
      {children}
    </form>
  )
}
