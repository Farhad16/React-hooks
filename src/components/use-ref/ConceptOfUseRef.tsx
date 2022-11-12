import { useRef, useState } from "react";

const ConceptOfUseRef = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <h1>React use Ref</h1>
      <input
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
      />
      <button onClick={handleFocus}>Focus</button>
    </>
  );
};

export default ConceptOfUseRef;
