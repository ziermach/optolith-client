/* eslint "@typescript-eslint/type-annotation-spacing": [2, { "before": true, "after": true }] */
import { second } from "../../../../Data/Either"
import { fromMap } from "../../../../Data/OrderedMap"
import { Record } from "../../../../Data/Record"
import { OptionalRule } from "../../../Models/Wiki/OptionalRule"
import { pipe } from "../../pipe"
import { map } from "../Array"
import { toMapIntegrity } from "../EntityIntegrity"
import { OptionalRuleL10n } from "../Schema/OptionalRules/OptionalRules.l10n"
import { YamlFileConverter } from "../ToRecordsByFile"
import { toErrata } from "./ToErrata"
import { toSourceRefs } from "./ToSourceRefs"
import { mergeBy } from "../ZipById"


const toOptionalRule : (l10n : OptionalRuleL10n) => [string, Record<OptionalRule>]
                     = l10n => [
                         l10n.id,
                         OptionalRule ({
                           id: l10n.id,
                           name: l10n.name,
                           description: l10n.description,
                           src: toSourceRefs (l10n.src),
                           errata: toErrata (l10n.errata),
                         }),
                       ]


export const toOptionalRules : YamlFileConverter<string, Record<OptionalRule>>
                             = pipe (
                                 yaml_mp => mergeBy("id")
                                                   (yaml_mp.OptionalRulesL10nDefault)
                                                   (yaml_mp.OptionalRulesL10n),
                                 map (toOptionalRule),
                                 toMapIntegrity,
                                 second (fromMap)
                               )
