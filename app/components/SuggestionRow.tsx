import SuggestionButton from "./SuggestionButton";

export default function SuggestionRow() {
  return (
    <div className="flex sm:flex-row flex-col md:gap-10 justify-center gap-3">
      <SuggestionButton text="About" />
      <SuggestionButton text="Education" />
      <SuggestionButton text="Experience" />
      <SuggestionButton text="Projects" />
    </div>
  );
}
