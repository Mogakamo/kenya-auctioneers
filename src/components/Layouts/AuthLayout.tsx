import Head from "next/head";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#BED7C1E5] text-center">
      <Head>
        <title>Kenyan Auctioneers | Auth</title>
      </Head>

      <main className="flex flex-col items-center justify-center px-10 py-5 h-auto container bg-white rounded-lg shadow-xl w-auto text-center">
        {children}
      </main>

      
    </div>
  );
}
