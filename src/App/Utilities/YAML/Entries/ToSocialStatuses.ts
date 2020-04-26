/* eslint "@typescript-eslint/type-annotation-spacing": [2, { "before": true, "after": true }] */
import { second } from "../../../../Data/Either"
import { fromMap } from "../../../../Data/OrderedMap"
import { Record } from "../../../../Data/Record"
import { NumIdName } from "../../../Models/NumIdName"
import { pipe } from "../../pipe"
import { map } from "../Array"
import { toMapIntegrity } from "../EntityIntegrity"
import { SocialStatusL10n } from "../Schema/SocialStatuses/SocialStatuses.l10n"
import { YamlFileConverter } from "../ToRecordsByFile"
import { mergeBy } from "../ZipById"


const toSocialStatus : (x : SocialStatusL10n) => [number, Record<NumIdName>]
                     = x => [ x.id, NumIdName (x) ]


export const toSocialStatuses : YamlFileConverter<number, Record<NumIdName>>
                                    = pipe (
                                        yaml_mp => mergeBy("id")
                                                          (yaml_mp.SocialStatusesL10nDefault)
                                                          (yaml_mp.SocialStatusesL10n),
                                        map (toSocialStatus),
                                        toMapIntegrity,
                                        second (fromMap)
                                      )
