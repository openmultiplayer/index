import { visit } from "unist-util-visit";

// Remark plugin for colours.
// Usage:
//
// {text}(#hexcode)
//
// This is {yellow}(#ffff00) text!
//

const colourPattern = /{(.+?)}\(#([a-f0-9]{6})\)/gm;

export const remarkColour = function attacher() {
  return (tree: any) => {
    visit(tree, "paragraph", (node) => {
      let children: Array<any> = node.children as Array<any>;
      let newChildren: Array<any> = node.children as Array<any>;

      children.forEach((v: { value: string }, i: number) => {
        let match: RegExpExecArray | null;
        let insertions: number = 0;
        let lastIndex = 0;
        do {
          match = colourPattern.exec(v.value);
          if (match?.length !== 3) {
            continue;
          }

          newChildren.splice(
            i + insertions,
            0,
            {
              type: "text",
              value: v.value.slice(lastIndex, match.index),
            },
            {
              type: "jsx",
              value: `<span style={{color: "#${match[2]}"}}>`,
            },
            {
              type: "text",
              value: match[1],
            },
            {
              type: "jsx",
              value: `</span>`,
            }
          );
          insertions += 4;

          lastIndex = match.index + match[0].length;
        } while (match);

        if (insertions > 0) {
          // remove the original text node and insert the remaining text
          newChildren.splice(i + insertions, 1, {
            type: "text",
            value: v.value.slice(lastIndex, v.value.length),
          });
        }
      });
      node.children = newChildren;
    });
  };
};
