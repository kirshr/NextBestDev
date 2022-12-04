function ContentPageHeader({ title, tagline, type, children }) {
  return (
    <>
      <header className="text-center mt-20">
        <h1 className="text-lg font-semibold text-amber-300">{type}</h1>
        <p className="mt-1 text-4xl font-bold tracking-tight text-cyan-50 sm:text-5xl lg:text-6xl">
          {title}
        </p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-amber-300">
          {tagline}
        </p>
        {children}
      </header>
    </>
  );
}

export default ContentPageHeader;
