import React from "react";
import UrlForm from "../components/UrlForm";

const features = [
  {
    title: "Fast",
    text: "Get a short link in seconds and redirect visitors instantly.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Simple",
    text: "Paste a long URL, click once, done. No clutter, no learning curve.",
    icon: "M5 13l4 4L19 7",
  },
  {
    title: "Easy to Share",
    text: "Copy your short link with one click and share it anywhere.",
    icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Free &amp; easy link shortener
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Shorten your links,
            <br className="hidden sm:block" /> share them anywhere
          </h1>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Turn long, messy URLs into clean, shareable links in one click.
          </p>
        </div>

        {/* Form card */}
        <div className="mx-auto mt-10 w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-indigo-100/50 sm:p-8">
          <UrlForm />
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={f.icon}
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
