import React from 'react';

export default function Search() {
    return (
        <>
            <div className="bg-white shadow p-4 flex rounded-md my-6 mx-10">
                <input
                    className=" focus:outline-none w-full rounded p-1"
                    type="text"
                    placeholder="Search 'Rocket Name'"
                />
                <button
                    type="button"
                    className="bg-gray-300 hover:bg-gray-500 rounded text-white p-2 pl-4 pr-4"
                >
                    <p className="font-semibold text-xs">Search</p>
                </button>
            </div>
        </>
    );
}
