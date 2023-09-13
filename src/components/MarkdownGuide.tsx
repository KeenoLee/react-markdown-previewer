import React from "react";
import styled from "styled-components";

const GuideContainer = styled.div`
  background-color: #eee;
  padding: 10px;
  white-space: pre-wrap;
  font-family: monospace;
`;

const MarkdownGuide: React.FC = () => {
  return (
    <GuideContainer>
      {`
Element       Markdown Syntax
-----------------------------------
Heading       # H1
              ## H2
              ### H3
Bold          **bold text**
Italic        *italicized text*
Blockquote    > blockquote
Ordered List  1. First item
              2. Second item
              3. Third item
Unordered List - First item
              - Second item
              - Third item
Code          \`code\`
Horizontal    ---
Link          [title](https://www.example.com)
Image         ![alt text](image.jpg)

Extended Syntax
------------------------------------------------
Element         Markdown Syntax
--------------------------------------------
Table           | Syntax | Description |
                | ----------- | ----------- |
                | Header | Title |
                | Paragraph | Text |
Fenced Code     \`\`\`
                {
                  "firstName": "John",
                  "lastName": "Smith",
                  "age": 25
                }
                \`\`\`
Footnote        Here's a sentence with a footnote. [^1]
                [^1]: This is the footnote.
Heading ID      ### My Great Heading {#custom-id}
Definition List term
                : definition
Strikethrough   ~~The world is flat.~~
Task List       - [x] Write the press release
                - [ ] Update the website
                - [ ] Contact the media
Emoji           That is so funny! :joy:
Highlight       I need to highlight these ==very important words==.
Subscript       H~2~O
Superscript     X^2^

More details: https://www.markdownguide.org/cheat-sheet/
      `}
    </GuideContainer>
  );
};

export default MarkdownGuide;
