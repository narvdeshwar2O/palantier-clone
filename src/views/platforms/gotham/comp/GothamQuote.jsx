export default function GothamQuote() {
    return (
        <div className="flex flex-col md:flex-row w-full p-10 gap-10 bg-white">
            {/* Left Card */}
            <div className="w-full md:w-2/3 bg-[#1F2225] text-white p-10 md:p-20 rounded-xl flex flex-col justify-between min-h-[600px]">
                <div className="text-3xl md:text-5xl font-light leading-tight text-gray-300">
                    <span className="text-gray-500">“</span>
                    [Palantir] came up with ground breaking technologies that help us make better decisions in combat zones. You are giving us advantages right now that we need.
                    <span className="text-gray-500">” —</span>
                </div>

                <div className="mt-10">
                    <p className="text-xl font-medium text-white">General James N. Mattis</p>
                    <p className="text-gray-400 text-sm mt-1">Fmr. US Secretary of Defense</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/3 flex justify-between items-start pt-4">
                <span className="text-xs font-bold tracking-widest text-gray-500">{"{ REAL PEOPLE"}</span>
                <span className="text-xs font-bold tracking-widest text-gray-500">{"REAL RESULTS }"}</span>
            </div>
        </div>
    );
}
