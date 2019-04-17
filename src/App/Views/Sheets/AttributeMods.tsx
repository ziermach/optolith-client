import * as React from "react";
import { AttributeCombined } from "../../Models/View/viewTypeHelpers";
import { translate, UIMessagesObject } from "../../Utilities/I18n";
import { TextBox } from "../Universal/TextBox";
import { AttributeModsListItem } from "./AttributeModsListItem";

export interface AttributeModsProps {
  attributes: List<Record<AttributeCombined>>
  locale: UIMessagesObject
}

export function AttributeMods (props: AttributeModsProps) {
  return (
    <TextBox
      className="attribute-mods"
      label={translate (props.locale, "charactersheet.attributemodifiers.title")}
      >
      <table>
        <thead>
          <tr>
            <th className="name"></th>
            <th>-3</th>
            <th>-2</th>
            <th>-1</th>
            <th className="null">0</th>
            <th>+1</th>
            <th>+2</th>
            <th>+3</th>
          </tr>
        </thead>
        <tbody>
          {props.attributes
            .map (obj => (
              <AttributeModsListItem attribute={obj} key={obj .get ("id")} />
            ))
            .toArray ()}
        </tbody>
      </table>
    </TextBox>
  )
}
