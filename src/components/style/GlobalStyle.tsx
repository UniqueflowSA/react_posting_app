import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable.css");
  }
    body, html{
      box-sizing:border-box;
      margin:0;
      padding:0;
      height:100%;
      font-family: "Pretendard";
      background-color: #f5f4ec
  }
`;

export const textOverflow = (lineCount: number) => css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lineCount};
`;
