import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "HP by Next.js" }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 p-5">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 px-3 py-4 rounded"
              >
                Home
              </Link>
              <Link
                href="/blog-page"
                className="text-gray-300 hover:bg-gray-700 px-3 py-4 rounded"
              >
                Blog
              </Link>
              <Link
                href="/contact-page"
                className="text-gray-300 hover:bg-gray-700 px-3 py-4 rounded"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a href="#" target="_blank" rel="noopaper norefer">
          Powered by{" "}
        </a>
      </footer>
    </div>
  );
};

export default Layout;
