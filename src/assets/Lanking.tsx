import { SVGProps } from "react";

interface PropsType extends SVGProps<SVGSVGElement> {
  fill?: string;
}

const Lanking = ({ fill, ...props }: PropsType) => (
  <svg
    width="31"
    height="31"
    viewBox="0 0 31 31"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_162_1087)">
      <path
        d="M5.08325 10.4167H25.9166M12.3749 4.16667V6.25M17.5833 3.125V6.25M22.7916 4.16667V6.25M24.8749 18.75V10.4167H10.2916V18.75C10.2916 19.5788 10.6208 20.3737 11.2069 20.9597C11.7929 21.5458 12.5878 21.875 13.4166 21.875H21.7499C22.5787 21.875 23.3736 21.5458 23.9596 20.9597C24.5457 20.3737 24.8749 19.5788 24.8749 18.75Z"
        stroke={fill ? "#000000" : "#DFDFDF"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_162_1087"
        x="-1"
        y="0"
        width="33"
        height="33"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_162_1087"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_162_1087"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Lanking;
