import { html as CssNamed } from "./css-named.md";
import { html as Js_1 } from "./js-1.md";
import { html as NpmDocs } from "./npm-docs.md";

export const docs = {
  CssNamed,
  Js_1,
  NpmDocs,
};

export const menus = [
  {
    label: "Css",
    value: "Css",
    children: [
      {
        label: "命名规范",
        value: "CssNamed",
      },
    ],
  },
  {
    label: "JavaScript",
    value: "JavaScript",
    children: [
      {
        label: "JavaScript单行代码",
        value: "Js_1",
      },
    ],
  },
  {
    label: "插件",
    value: "Tools",
    children: [
      {
        label: "npm常用",
        value: "NpmDocs",
      },
    ],
  },
];
