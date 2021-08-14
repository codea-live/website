// import { faCopy } from '@fortawesome/react-fontawesome';

const CopyButton = (props) => {
  const copyToClipboard = () => navigator.clipboard.writeText(props.children);

  return (
    <button
      className="w-full sm:w-auto flex-none bg-gray-50 hover:text-gray-900 font-mono leading-6 py-3 sm:px-6 border border-gray-200 rounded-xl flex items-center justify-center space-x-2 sm:space-x-4 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-300 focus:outline-none transition-colors duration-200"
      onClick={copyToClipboard}>
      <span>{props.children}</span>
      {/* <FontAwesomeIcon icon={faCopy} /> */}
    </button>
  );
}

export default CopyButton;