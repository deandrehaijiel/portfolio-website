import React from "react";
import { fetchSimpleIcons, Cloud, renderSimpleIcon } from "react-icon-cloud";

const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40
    }
  },
  // https://www.goat1000.com/tagcanvas-options.php
  options: {
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    reverse: true,
    tooltip: "native",
    tooltipDelay: 0,
    wheelZoom: true,
    minSpeed: 0.03,
  }
};

export const DynamicCloud = (props) => {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetchSimpleIcons({ slugs: props.iconSlugs }).then(setData);
  }, [props.iconSlugs]);
  const renderedIcons = React.useMemo(() => {
    if (!data) {
      return null;
    }

    const icons = [];
    for (const k of Object.keys(data.simpleIcons)) {
      icons.push(data.simpleIcons[k]);
    }
    return icons.map((icon) =>
      renderSimpleIcon({
        icon,
        minContrastRatio: 1.2,
        bgHex: "#000",
        size: 42,
        fallbackHex: "#fff",
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e) => e.preventDefault()
        }
      })
    );
  }, [data]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
};