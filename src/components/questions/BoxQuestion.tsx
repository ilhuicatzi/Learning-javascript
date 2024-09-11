
function BoxQuestion({ children }: { children: React.ReactNode }) {
  return (
    <div className="borde border-b border-muted border-dashed space-y-1 p-3 hover:bg-muted rounded-md">
    {children}
    </div>
  )
}

export default BoxQuestion