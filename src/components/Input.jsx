

const InputComponent = ({className,...props}) => {
  return (
   
        <input
          
          className={` p-2 rounded-lg ring shadow-lg ring-gray-900/5 focus:outline-black  ${className}`}
          {...props}
        />
    
  )
}

export default InputComponent