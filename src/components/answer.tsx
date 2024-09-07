export default function Answer() {
  return (
    <div
      className="md:container mx-auto md:py-6 md:px-6 py-2 px-2 bg-neutral-900 rounded 
    shadow-sm shadow-neutral-900"
    >
      <h3 className="text-xl p-2">Question 1 out of 10</h3>
      <hr />
      <h1 className="text-2xl p-2">Which year was the Prophet ﷺ born in?</h1>
      <div className="p-2">
        <div className="bg-neutral-900 border-2 border-neutral-800 rounded px-4 py-2 hover:bg-white hover:text-neutral-900 cursor-pointer transition-colors">
          Year of the elephant
        </div>
      </div>
      <div className="p-2 flex">
        <div className="mr-4">
          <button>Go back</button>
        </div>
        <div>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}
