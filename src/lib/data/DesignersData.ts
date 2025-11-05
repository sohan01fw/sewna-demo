import type { DesignerData } from "../../types";
import { New } from "./New";
import { Premium } from "./Premium";
import { TopSelling } from "./TopSelling";
import { Trending } from "./Trending";

export const designerData: DesignerData = {
  Explore: [...New, ...Premium, ...TopSelling, ...Trending],
  Trending: Trending,
  Premium: Premium,
  New: New,
  TopSelling: TopSelling,
};
