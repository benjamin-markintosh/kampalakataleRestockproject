function DragAndDrop() {
  return (
    <div className="max-w-xl">
      <label className="flex justify-center w-34 h-32 px-4 transition bg-kkwhite border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span className="flex flex-col justify-center items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span className="font-medium text-center text-gray-600">
            Upload Profile Picture <br />
            <span className="text-kkblack/50 hover:text-kkorange  text-sm underline ">
              Drag & Drop
            </span>
          </span>
        </span>
        <input type="file" name="file_upload" className="hidden" />
      </label>
    </div>
  );
}

export default DragAndDrop;
