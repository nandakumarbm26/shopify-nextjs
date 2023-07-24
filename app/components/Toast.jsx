function ToastContainer() {
  return (
    <div id="toast-container" className="hidden fixed top-0 right-0 m-4 max-w-xs">
      <div
        id="toast"
        style={{ borderLeft: "5px solid red" }}
        className="bg-gray-800 text-white text-sm py-2 px-4 h-max rounded shadow-lg border-1 border-lime-600"
      ></div>
    </div>
  );
}
export function toast({ type, message }) {
  const toastContainer = document.getElementById("toast-container");
  const toastMsg = document.getElementById("toast");
  toastContainer.classList.remove("hidden");
  toastMsg.innerText = message;
  setTimeout(() => {
    toastContainer.classList.add("hidden");
  }, 3000);
}

export default ToastContainer;
