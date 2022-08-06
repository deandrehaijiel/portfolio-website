import React from "react";
import { fetchSimpleIcons, Cloud } from "react-icon-cloud";
import { cloudProps } from ".";

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export const DynamicCloud = (props: DynamicCloudProps) => {
  const [data, setData] = React.useState<IconData>();
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

  }, [data]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
};