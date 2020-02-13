import React from "react";
// import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="md:flex bg-white rounded-lg p-6">
        <img
          className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
          src="//placekitten.com/300/300"
        />
        <div className="text-center md:text-left">
          <h2 className="text-lg">Erin Lindford</h2>
          <div className="text-purple-500">Customer Support</div>
          <div className="text-gray-600">erinlindford@example.com</div>
          <div className="text-gray-600">(555) 765-4321</div>
        </div>
      </div>
      <input
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        type="email"
        placeholder="jane@example.com"
      />
    </>
  );
}
