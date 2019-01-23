import { IdPrefixes } from "../../../../constants/IdPrefixes";
import { map } from "../../../../Data/List";
import { Nothing } from "../../../../Data/Maybe";
import { CombatTechnique } from "../../../Models/Wiki/CombatTechnique";
import { prefixId } from "../../IDUtils";
import { mergeRowsById } from "../mergeTableRows";
import { mensureMapNatural, mensureMapNaturalList, mensureMapNonEmptyString } from "../validateMapValueUtils";
import { lookupKeyValid, mapMNamed } from "../validateValueUtils";
import { toSourceLinks } from "./Sub/toSourceLinks";

export const toCombatTechnique =
  mergeRowsById
    ("toCombatTechnique")
    (id => lookup_l10n => lookup_univ => {
      // Shortcuts

      const checkL10nNonEmptyString =
        lookupKeyValid (mensureMapNonEmptyString) (lookup_l10n)

      const checkUnivNaturalNumberList =
        lookupKeyValid (mensureMapNaturalList ("&")) (lookup_univ)

      const checkUnivNaturalNumber =
        lookupKeyValid (mensureMapNatural) (lookup_univ)

      // Check and convert fields

      const ename = checkL10nNonEmptyString ("name")

      const eic = checkUnivNaturalNumber ("ic")

      const eprimary = checkUnivNaturalNumberList ("primary")

      const ebpr = checkUnivNaturalNumber ("bpr")

      const special = lookup_l10n ("special")

      const egr = checkUnivNaturalNumber ("gr")

      const esrc = toSourceLinks (lookup_l10n)

      // Return error or result

      return mapMNamed
        ({
          ename,
          eic,
          eprimary,
          ebpr,
          egr,
          esrc,
        })
        (rs => CombatTechnique ({
          id: prefixId (IdPrefixes.COMBAT_TECHNIQUES) (id),
          name: rs.ename,
          ic: rs.eic,
          primary: map (prefixId (IdPrefixes.ATTRIBUTES)) (rs.eprimary),
          bpr: rs.ebpr,
          special,
          src: rs.esrc,
          gr: rs.egr,
          category: Nothing,
        }))
    })
