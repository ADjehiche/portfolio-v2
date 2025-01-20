import Chatbox from "./components/Chatbox";
import SuggestionRow from "./components/SuggestionRow";
export default function Home() {
  return (
    <div className="flex flex-row justify-center items-center h-screen bg-[#212121]">
      <div className="flex flex-col gap-5 w-2/3 justify-center">
        <h1 className="md:text-4xl font-bold mx-auto text-[1.875rem]">
          What Can I Help With?
        </h1>
        <Chatbox />
        <br />
        <SuggestionRow />
      </div>
    </div>
  );
}
