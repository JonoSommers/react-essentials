export default function TabButton({ children, onSelect, isSelected }){

  return (
    <liv>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
    </liv>
  )
}