export default function HobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div data-world="hobby" className="min-h-screen bg-white text-gray-900 antialiased pt-20 md:pt-0">
      {children}
    </div>
  )
}
