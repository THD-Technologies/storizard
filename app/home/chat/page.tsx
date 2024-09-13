export default function Chat() {
    return (
      <div className="flex items-center justify-center h-full text-black">
              {/* Input and buttons container at the bottom */}
        <div className="flex flex-row items-center gap-2 mt-auto bg-blue-200 p-2 rounded-lg">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" type="button">Upload</button>
          <input 
            className="flex-grow px-44 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Type your message here..."
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded">Send</button>
        </div>
      </div>
    );
  }