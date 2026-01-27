export default function TabButton({ children, onSelect }){

  return (
    <liv>
      <button onClick={onSelect}>{children}</button>
    </liv>
  )
}