import Image from "next/image";
import Chatbox from "./components/Chatbox";
import SuggestionRow from "./components/SuggestionRow";
export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col gap-5 w-2/3 justify-center">
        <h1 className="text-4xl font-bold mx-auto">
          What Can I Help You With?
        </h1>
        <Chatbox />
        <br />
        <SuggestionRow />
      </div>
    </div>
  );
}
