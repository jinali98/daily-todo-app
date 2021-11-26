import { createGlobalStyle } from "styled-components";

export const globalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: black;
}
&.dashboard-wrapper {
  display: flex;
  width: 100vw;

  @media (max-width: 992px) {
   
      flex-direction: column;
    
}

}
`;
