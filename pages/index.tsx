import React, { useEffect, useState } from "react";

export default function CssTestPage() {
  const [compiledCss, setCompiledCss] = useState("");

  useEffect(() => {
    setInterval(() => {
      // Find the style element containing css-test-page-id
      const styleElements = document.head.querySelectorAll("style");
      for (const styleElement of Array.from(styleElements)) {
        if (styleElement.textContent?.includes("css-test-page-id")) {
          console.log("Found style element with css-test-page-id:");
          console.log(styleElement.textContent);
          setCompiledCss(styleElement.textContent);
          break;
        }
      }
    }, 1000);
  });

  return (
    <>
      <div className="container">
        <div className="p1">
          .p1 -This is another parent.
          <div className="c1">
            .c1 - This should be orange bg.
            <div className="c2">.c2 - This should be orange bg as well.</div>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="mb-2">Compiled CSS</h3>
        {compiledCss ? (
          <pre>{formatCss(compiledCss)}</pre>
        ) : (
          <p>Loading CSS...</p>
        )}
      </div>

      <style jsx>{`
        // This does nothing except helping the JS find the StyledJSX element on the page.
        #css-test-page-id {
          color: red;
        }

        .p1 {
          background: purple !important;
        }

        :global(.c1),
        .c2 {
          background: orange !important;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}

// Helper function to format CSS
function formatCss(css: string): string {
  if (!css) {
    return "";
  }

  // Basic formatting - indent nested rules, add line breaks
  return (
    css
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // Add line breaks after closing braces and semicolons
      .replace(/}/g, "}\n")
      .replace(/;/g, ";\n")
      // Add line breaks before opening braces
      .replace(/{/g, " {\n  ")
      // Add indentation for nested rules
      .replace(/\n/g, "\n  ")
      // Clean up extra spaces
      .replace(/\s+/g, " ")
      .replace(/\s*{\s*/g, " {\n  ")
      .replace(/\s*}\s*/g, "\n}\n")
      .replace(/;\s*/g, ";\n  ")
      // Final cleanup
      .replace(/\n\s*\n/g, "\n")
      .trim()
  );
}
