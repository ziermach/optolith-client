import * as React from "react"
import { List, map, toArray } from "../../../Data/List"
import { fromMaybe, maybe, Maybe } from "../../../Data/Maybe"
import { Sex } from "../../Models/Hero/heroTypeHelpers"
import { CultureCombined, CultureCombinedA_ } from "../../Models/View/CultureCombined"
import { ProfessionCombined, ProfessionCombinedA_ } from "../../Models/View/ProfessionCombined"
import { RaceCombined, RaceCombinedA_ } from "../../Models/View/RaceCombined"
import { Advantage } from "../../Models/Wiki/Advantage"
import { Disadvantage } from "../../Models/Wiki/Disadvantage"
import { Skill } from "../../Models/Wiki/Skill"
import { SpecialAbility } from "../../Models/Wiki/SpecialAbility"
import { InlineWikiEntry } from "../../Models/Wiki/wikiTypeHelpers"
import { toNewMaybe } from "../../Utilities/Maybe"
import { toRoman } from "../../Utilities/NumberUtils"
import { pipe_ } from "../../Utilities/pipe"
import { getNameBySex, getNameBySexM } from "../../Utilities/rcpUtils"
import { ListView } from "../Universal/List"
import { WikiListItem } from "./WikiListItem"

const addLevelToName =
  (name: string) =>
  (mlevel: Maybe<number>) =>
    maybe (name) ((level: number) => `${name} I-${toRoman (level)}`) (mlevel)

interface Props {
  list: List<InlineWikiEntry>
  sex?: Sex
  currentInfoId: Maybe<string>
  showInfo (id: string): void
}

const WikiList: React.FC<Props> = ({ list, sex = "m", currentInfoId, showInfo }) => (
  <ListView>
    {pipe_ (
      list,
      map (x => {
        if (RaceCombined.is (x)) {
          const id = RaceCombinedA_.id (x)
          const name = getNameBySex (sex) (RaceCombinedA_.name (x))

          return (
            <WikiListItem
              key={id}
              id={id}
              name={name}
              currentInfoId={currentInfoId}
              showInfo={showInfo}
              />
          )
        }
        else if (CultureCombined.is (x)) {
          const id = CultureCombinedA_.id (x)
          const name = CultureCombinedA_.name (x)

          return (
            <WikiListItem
              key={id}
              id={id}
              name={name}
              currentInfoId={currentInfoId}
              showInfo={showInfo}
              />
          )
        }
        else if (ProfessionCombined.is (x)) {
          const id = ProfessionCombinedA_.id (x)
          const name = getNameBySex (sex) (ProfessionCombinedA_.name (x))
          const msubname = getNameBySexM (sex, toNewMaybe (ProfessionCombinedA_.subname (x)))

          return (
            <WikiListItem
              key={id}
              id={id}
              name={msubname.maybe (name, subname => `${name} (${subname})`)}
              currentInfoId={currentInfoId}
              showInfo={showInfo}
              />
          )
        }
        else {
          const id = SpecialAbility.AL.id (x)

          if (SpecialAbility.is (x)) {
            const name = addLevelToName (fromMaybe (SpecialAbility.A.name (x))
                                                   (SpecialAbility.A.nameInWiki (x)))
                                        (SpecialAbility.A.tiers (x))

            return (
              <WikiListItem
                key={id}
                id={id}
                name={name}
                currentInfoId={currentInfoId}
                showInfo={showInfo}
                />
            )
          }
          else if (Advantage.is (x)) {
            const name = addLevelToName (Advantage.A.name (x))
                                        (Advantage.A.tiers (x))

            return (
              <WikiListItem
                key={id}
                id={id}
                name={name}
                currentInfoId={currentInfoId}
                showInfo={showInfo}
                />
            )
          }
          else if (Disadvantage.is (x)) {
            const name = addLevelToName (Disadvantage.A.name (x))
                                        (Disadvantage.A.tiers (x))

            return (
              <WikiListItem
                key={id}
                id={id}
                name={name}
                currentInfoId={currentInfoId}
                showInfo={showInfo}
                />
            )
          }
          else {
            const name = Skill.AL.name (x)

            return (
              <WikiListItem
                key={id}
                id={id}
                name={name}
                currentInfoId={currentInfoId}
                showInfo={showInfo}
                />
            )
          }
        }
      }),
      toArray
    )}
  </ListView>
)

const MemoWikiList = React.memo (
  WikiList,
  (prevProps, nextProps) =>
    nextProps.list === prevProps.list
    && nextProps.sex === prevProps.sex
    && nextProps.currentInfoId === prevProps.currentInfoId
)

export { MemoWikiList as WikiList }
