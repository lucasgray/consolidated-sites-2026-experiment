export default function HobbyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div data-world="hobby" className="min-h-screen bg-[#07000f] text-gray-100 antialiased flex flex-col">
      <div className="flex-1">{children}</div>
      <footer className="py-10 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Lucas Gray</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="https://mastodon.gamedev.place/@lucasgray" target="_blank" rel="noopener noreferrer me" className="text-gray-400 hover:text-[#FF69B4] hover:underline transition-colors">Mastodon</a>
            <a href="https://github.com/lucasgray" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF69B4] hover:underline transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/lucas-gray-6169403/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF69B4] hover:underline transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
