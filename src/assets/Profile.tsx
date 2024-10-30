import { SVGProps } from "react";

interface PropsType extends SVGProps<SVGSVGElement> {
  fill?: string;
}

const Profile = ({ fill, ...props }: PropsType) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 22.5C5 21.1739 5.52678 19.9021 6.46447 18.9645C7.40215 18.0268 8.67392 17.5 10 17.5H20C21.3261 17.5 22.5979 18.0268 23.5355 18.9645C24.4732 19.9021 25 21.1739 25 22.5C25 23.163 24.7366 23.7989 24.2678 24.2678C23.7989 24.7366 23.163 25 22.5 25H7.5C6.83696 25 6.20107 24.7366 5.73223 24.2678C5.26339 23.7989 5 23.163 5 22.5Z"
      stroke={fill ? "#000000" : "#DFDFDF"}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M15 12.5C17.0711 12.5 18.75 10.8211 18.75 8.75C18.75 6.67893 17.0711 5 15 5C12.9289 5 11.25 6.67893 11.25 8.75C11.25 10.8211 12.9289 12.5 15 12.5Z"
      stroke={fill ? "#000000" : "#DFDFDF"}
      strokeWidth="2"
    />
  </svg>
);

export default Profile;
