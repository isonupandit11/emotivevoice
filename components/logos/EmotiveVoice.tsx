import type { FC, SVGAttributes } from "react";
import { useId } from "react";

export type EmotiveVoiceLogoProps = SVGAttributes<SVGSVGElement>;

export default function EmotiveVoiceLogo(props: EmotiveVoiceLogoProps) {
  const id = useId();

  const gradientId = `emotivevoice-logo-gradient-${id}`;

  return (
    <svg
      width="160"
      height="25"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 25"
      {...props}>
      <text
        x="35"
        y="20"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
        fontSize="17"
        fontWeight="bold">
        Emotive Voice
      </text>
    </svg>
  );
}
