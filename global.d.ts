import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      tt: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
