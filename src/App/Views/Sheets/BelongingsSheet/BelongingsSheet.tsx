import * as React from "react";
import { PetInstance, Purse } from "../../../Models/Hero/heroTypeHelpers";
import { AttributeCombined, Item } from "../../../Models/View/viewTypeHelpers";
import { localizeNumber, localizeWeight, translate, UIMessagesObject } from "../../../Utilities/I18n";
import { LabelBox } from "../../Universal/LabelBox";
import { Options } from "../../Universal/Options";
import { TextBox } from "../../Universal/TextBox";
import { Sheet } from "../Sheet";
import { SheetWrapper } from "../SheetWrapper";
import { BelongingsSheetItemsColumn } from "./BelongingsSheetItemsColumn";
import { BelongingsSheetPet } from "./BelongingsSheetPet";

export interface BelongingsSheetProps {
  attributes: List<Record<AttributeCombined>>
  items: Maybe<List<Record<Item>>>
  locale: UIMessagesObject
  pet: Maybe<Record<PetInstance>>
  purse: Maybe<Record<Purse>>
  totalPrice: Maybe<number>
  totalWeight: Maybe<number>
}

export function BelongingsSheet (props: BelongingsSheetProps) {
  const {
    attributes,
    items: maybeItems,
    locale,
    purse,
    totalPrice: maybeTotalPrice,
    totalWeight: maybeTotalWeight,
  } = props

  const strength = Maybe.fromMaybe
    (0)
    (attributes
      .find (e => e .get ("id") === "ATTR_8")
      .fmap (Record.get<AttributeCombined, "value"> ("value")))

  const columnSize = Maybe.fromMaybe
    (33)
    (maybeItems .fmap (R.pipe (
      List.lengthL,
      R.flip (R.divide) (2),
      Math.round,
      R.max<number> (33)
    )))

  const maybeColumns = maybeItems .fmap (List.splitAt<Record<Item>> (columnSize))

  return (
    <SheetWrapper>
      <Options/>
      <Sheet
        id="belongings"
        title={translate (locale, "charactersheet.belongings.title")}
        attributes={attributes}
        locale={locale}
        >
        <div className="upper">
          <TextBox
            label={translate (locale, "charactersheet.belongings.equipment.title")}
            className="equipment"
            >
            {Maybe.fromMaybe<NonNullable<React.ReactNode>>
              (<div></div>)
              (maybeColumns .fmap (
                columns => (
                  <div>
                    <BelongingsSheetItemsColumn
                      items={Tuple.fst (columns)}
                      columnSize={columnSize}
                      locale={locale}
                      />
                    <BelongingsSheetItemsColumn
                      items={Tuple.snd (columns)}
                      columnSize={columnSize}
                      locale={locale}
                      />
                  </div>
                )
              ))}
            <div className="total">
              <label>
                {translate (locale, "charactersheet.belongings.equipment.footers.total")}
              </label>
              <span>
                {Maybe.fromMaybe
                  ("")
                  (maybeTotalPrice .fmap (R.pipe (
                    R.multiply (100),
                    Math.round,
                    R.flip (R.divide) (100),
                    roundedPrice => localizeNumber (locale .get ("id")) (roundedPrice)
                  )))}
              </span>
              <span>
                {Maybe.fromMaybe
                  ("")
                  (maybeTotalWeight .fmap (R.pipe (
                    R.multiply (100),
                    Math.round,
                    R.flip (R.divide) (100),
                    roundedWeight => localizeWeight (locale .get ("id")) (roundedWeight),
                    localizedWeight => localizeNumber (locale .get ("id")) (localizedWeight)
                  )))}
              </span>
            </div>
          </TextBox>
          <TextBox
            label={translate (locale, "charactersheet.belongings.purse.title")}
            className="purse"
            >
            <div className="top">
              <LabelBox
                className="money"
                label={translate (locale, "charactersheet.belongings.purse.labels.ducats")}
                value={purse .fmap (Record.get<Purse, "d"> ("d"))}
                />
              <LabelBox
                className="money"
                label={translate (locale, "charactersheet.belongings.purse.labels.silverthalers")}
                value={purse .fmap (Record.get<Purse, "s"> ("s"))}
                />
              <LabelBox
                className="money"
                label={translate (locale, "charactersheet.belongings.purse.labels.halers")}
                value={purse .fmap (Record.get<Purse, "h"> ("h"))}
                />
              <LabelBox
                className="money"
                label={translate (locale, "charactersheet.belongings.purse.labels.kreutzers")}
                value={purse .fmap (Record.get<Purse, "k"> ("k"))}
                />
              <LabelBox
                className="specifics"
                label={translate (locale, "charactersheet.belongings.purse.labels.gems")}
                value={maybeItems .fmap (
                  items => items
                    .filter (e => e .get ("gr") === 16)
                    .map (e => e .get ("name"))
                    .intercalate (", ")
                )}
                />
              <LabelBox
                className="specifics"
                label={translate (locale, "charactersheet.belongings.purse.labels.jewelry")}
                value={maybeItems .fmap (
                  items => items
                    .filter (e => e .get ("gr") === 15)
                    .map (e => e .get ("name"))
                    .intercalate (", ")
                )}
                />
              <LabelBox
                className="specifics"
                label={translate (locale, "charactersheet.belongings.purse.labels.other")}
                value={Nothing ()}
                />
            </div>
            <div className="fill"></div>
            <div className="carrying-capacity">
              <div className="left">
                <h3>{translate (locale, "charactersheet.belongings.carryingcapacity.title")}</h3>
                <p>{translate (locale, "charactersheet.belongings.carryingcapacity.calc")}</p>
              </div>
              <LabelBox
                label={translate (locale, "charactersheet.belongings.carryingcapacity.label")}
                value={Just (localizeWeight (locale .get ("id")) (strength * 2))}
                />
            </div>
          </TextBox>
        </div>
        <div className="fill"></div>
        <BelongingsSheetPet {...props} />
      </Sheet>
    </SheetWrapper>
  )
}
