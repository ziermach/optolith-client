import * as React from "react";
import { Categories } from "../../../Constants/Categories";
import { UIMessages } from "../../../Utilities/I18n";
import { WikiProperty } from "../WikiProperty";

export interface WikiCostProps {
  currentObject: {
    cost: string;
    category: Categories;
  }
  locale: UIMessages
}

export function WikiCost(props: WikiCostProps) {
  const {
    currentObject: {
      cost,
      category
    },
    locale
  } = props

  let key: keyof UIMessages = "info.aecost"

  if (category === Categories.LITURGIES) {
    key = "info.kpcost"
  }

  return (
    <WikiProperty locale={locale} title={key}>
      {cost}
    </WikiProperty>
  )
}
