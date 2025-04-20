import React, {useState} from "react";

interface ExpandableTextProps {
  text: string;
  previewChars?: number;
}

const ExpandableText = (props: ExpandableTextProps) => {
  const {
    text,
    previewChars = 3,
  } = props

  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > previewChars;
  const displayedText = expanded || !isLong ? text : text.slice(0, previewChars) + "…";

  return (
    <div className="space-y-2 max-w-[50%]">
      <p>{displayedText}</p>
      {isLong && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-blue-600 text-sm hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText
