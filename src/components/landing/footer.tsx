// export const Footer = () => {
//   return (
//     <footer className="text-center py-6 text-sm text-zinc-500 dark:text-zinc-400 border-t dark:border-zinc-700">
//       &copy; {new Date().getFullYear()} KaweHub – Built by Group I
//     </footer>
//   );
// };

export function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PS</span>
              </div>
              <h3 className="text-xl font-bold">PeerShelf</h3>
            </div>
            <p className="text-zinc-400">
              Empowering Unilorin students through collaborative learning and
              resource sharing.
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} PeerShelf. Built Group I.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-zinc-400 text-sm">Made in Nigeria 🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
