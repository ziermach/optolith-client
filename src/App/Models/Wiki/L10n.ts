import { List } from "../../../Data/List";
import { fromDefault, Record } from "../../../Data/Record";

export interface L10n {
  "id": string
  "lastchanges": string
  "heroes": string
  "groups": string
  "wiki": string
  "faq": string
  "about": string
  "imprint": string
  "thirdpartylicenses": string
  "profile": string
  "overview": string
  "personaldata": string
  "charactersheet": string
  "pact": string
  "rules": string
  "racecultureandprofession": string
  "race": string
  "culture": string
  "profession": string
  "attributes": string
  "advantagesanddisadvantages": string
  "advantages": string
  "disadvantages": string
  "abilities": string
  "skills": string
  "combattechniques": string
  "specialabilities": string
  "spells": string
  "liturgicalchants": string
  "belongings": string
  "equipment": string
  "hitzonearmor": string
  "pets": string
  "adventurepoints.short": string
  "adventurepoint": string
  "adventurepoints": string
  "totalap": string
  "apspent": string
  "apspentonadvantages": string
  "apspentonmagicadvantages": string
  "apspentonblessedadvantages": string
  "apspentondisadvantages": string
  "apspentonmagicdisadvantages": string
  "apspentonblesseddisadvantages": string
  "apspentonrace": string
  "apspentonprofession": string
  "apspentonattributes": string
  "apspentonskills": string
  "apspentoncombattechniques": string
  "apspentonspells": string
  "apspentoncantrips": string
  "apspentonliturgicalchants": string
  "apspentonblessings": string
  "apspentonspecialabilities": string
  "apspentonenergies": string
  "search": string
  "sortalphabetically": string
  "sortbydatemodified": string
  "sortbygroup": string
  "sortbyimprovementcost": string
  "sortbyproperty": string
  "sortbylocation": string
  "sortbycost": string
  "sortbyweight": string
  "showactivated": string
  "none": string
  "save": string
  "done": string
  "delete": string
  "yes": string
  "no": string
  "ok": string
  "cancel": string
  "copy": string
  "create": string
  "import": string
  "allheroes": string
  "ownheroes": string
  "sharedheroes": string
  "unsavedhero": string
  "unsavedactions": string
  "unsavedactions.text": string
  "deletehero": string
  "deletehero.text": string
  "herocreation": string
  "start": string
  "nameofhero": string
  "selectsex": string
  "male": string
  "female": string
  "selectexperiencelevel": string
  "magic": string
  "rituals": string
  "cantrips": string
  "curses": string
  "elvenmagicalsongs": string
  "magicalmelodies": string
  "magicaldances": string
  "editprofessionname": string
  "addadventurepoints": string
  "endherocreation": string
  "add": string
  "changeheroavatar": string
  "apply": string
  "selectfile": string
  "changeheroavatar.invalidfile": string
  "family": string
  "placeofbirth": string
  "dateofbirth": string
  "age": string
  "haircolor": string
  "eyecolor": string
  "size": string
  "weight": string
  "title": string
  "socialstatus": string
  "characteristics": string
  "otherinfo": string
  "cultureareaknowledge": string
  "socialstatuses": List<string>
  "haircolors": List<string>
  "eyecolors": List<string>
  "pactcategory": string
  "nopact": string
  "pactcategories": List<string>
  "pactlevel": string
  "fairytype": string
  "fairytypes": List<string>
  "domain": string
  "userdefined": string
  "fairydomains": List<string>
  "settings": string
  "language": string
  "systemlanguage": string
  "languagehint": string
  "theme": string
  "dark": string
  "light": string
  "showanimations": string
  "close": string
  "checkforupdates": string
  "printtopdf": string
  "showattributevalues": string
  "name": string
  "sex": string
  "experiencelevel": string
  "apcollected": string
  "avatar": string
  "generalspecialabilites": string
  "fatepoints": string
  "value": string
  "bonuspenalty": string
  "bonus": string
  "bought": string
  "max": string
  "current": string
  "basestat": string
  "permanentlylostboughtback": string
  "gamestats": string
  "skill": string
  "check": string
  "encumbrance.short": string
  "improvementcost.short": string
  "skillrating.short": string
  "routinechecks.short": string
  "notes": string
  "maybe": string
  "physicalskills": string
  "page.short": string
  "socialskills": string
  "natureskills": string
  "knowledgeskills": string
  "craftskills": string
  "languages": string
  "nativetongue.short": string
  "knownscripts": string
  "routinechecks": string
  "routinechecks.text1": string
  "routinechecks.text2": string
  "routinechecks.text3": string
  "routinechecks.text4": string
  "checkmod": string
  "neededsr": string
  "from": string
  "qualitylevels": string
  "skillpoints.splitted": string
  "qualitylevel.splitted": string
  "attributemodifiers": string
  "combat": string
  "primaryattribute.medium": string
  "combattechniquerating.short": string
  "attackrangecombat.short": string
  "parry.short": string
  "lifepoints": string
  "pain1": string
  "pain2": string
  "pain3": string
  "pain4": string
  "dying": string
  "closecombatweapons": string
  "weapon": string
  "combattechnique": string
  "damagebonus.medium": string
  "damagepoints.short": string
  "attackparrymodifier.short": string
  "reach": string
  "reachlabels": List<string>
  "breakingpointrating.short": string
  "damaged.short": string
  "attack.short": string
  "weightunit.short": string
  "rangedcombatweapons": string
  "reloadtime": string
  "rangebrackets": string
  "rangedcombat": string
  "ammunition": string
  "armors": string
  "armor": string
  "protection.short": string
  "sturdinessrating.short": string
  "wear.short": string
  "movementinitiative": string
  "carriedwhereexamples": string
  "head.short": string
  "torso.short": string
  "leftarm.short": string
  "rightarm.short": string
  "leftleg.short": string
  "rightleg.short": string
  "shieldparryingweapon": string
  "structurepoints.short": string
  "dice.short": string
  "actions.short": string
  "combatspecialabilities": string
  "conditions": string
  "animosity": string
  "encumbrance": string
  "intoxicated": string
  "stupor": string
  "rapture": string
  "fear": string
  "paralysis": string
  "pain": string
  "confusion": string
  "states": string
  "immobilized": string
  "unconscious": string
  "blind": string
  "bloodlust": string
  "burning": string
  "cramped": string
  "bound": string
  "incapacitated": string
  "diseased": string
  "prone": string
  "misfortune": string
  "rage": string
  "mute": string
  "deaf": string
  "surprised": string
  "badsmell": string
  "invisible": string
  "poisoned": string
  "petrified": string
  "item": string
  "number.short": string
  "price": string
  "carriedwhere": string
  "total": string
  "purse": string
  "ducats": string
  "silverthalers": string
  "halers": string
  "kreutzers": string
  "gems": string
  "jewelry": string
  "other": string
  "carryingcapacity": string
  "carryingcapacitycalc": string
  "carryingcapacitylabel": string
  "animal": string
  "spellsandrituals": string
  "aemax": string
  "spellorritual": string
  "cost": string
  "castingtime.splitted": string
  "range.splitted": string
  "duration.splitted": string
  "effect": string
  "primaryattribute": string
  "tradition": string
  "magicalspecialabilities": string
  "liturgicalchantsandceremonies": string
  "kpmax": string
  "liturgicaltime.splitted": string
  "aspect": string
  "aspects.oneormore": string
  "blessedspecialabilities": string
  "blessings": string
  "rulebase": string
  "optionalrules": string
  "maximumattributescores": string
  "higherdefensestats": string
  "languagespecializations": string
  "lifepoints.short": string
  "lifepointscalc": string
  "arcaneenergy": string
  "arcaneenergy.short": string
  "arcaneenergycalc": string
  "karmapoints": string
  "karmapoints.short": string
  "karmapointscalc": string
  "spirit": string
  "spirit.short": string
  "spiritcalc": string
  "toughness": string
  "toughness.short": string
  "toughnesscalc": string
  "dodge": string
  "dodge.short": string
  "dodgecalc": string
  "initiative": string
  "initiative.short": string
  "initiativecalc": string
  "movement": string
  "movement.short": string
  "movementcalc": string
  "woundthreshold": string
  "woundthreshold.short": string
  "woundthresholdcalc": string
  "boughtback": string
  "spent": string
  "select": string
  "next": string
  "showvalues": string
  "apvalue": string
  "lifepointbasevalue": string
  "spiritbasevalue": string
  "toughnessbasevalue": string
  "movementbasevalue": string
  "attributeadjustments": string
  "commoncultures": string
  "automaticadvantages": string
  "stronglyrecommendedadvantages": string
  "stronglyrecommendeddisadvantages": string
  "commonadvantages": string
  "commondisadvantages": string
  "uncommonadvantages": string
  "uncommondisadvantages": string
  "allcultures": string
  "or": string
  "script": string
  "areaknowledge": string
  "commonmundaneprofessions": string
  "commonmagicprofessions": string
  "commonblessedprofessions": string
  "commonskills": string
  "uncommonskills": string
  "commonnames": string
  "culturalpackageap": string
  "allprofessions": string
  "commonprofessions": string
  "allprofessiongroups": string
  "mundaneprofessions": string
  "magicalprofessions": string
  "blessedprofessions": string
  "alwaysshowprofessionsfromextensions": string
  "novariant": string
  "ownprofession": string
  "prerequisites": string
  "languagesandliteracytotalingap": string
  "skillspecialization": string
  "cursestotalingap": string
  "combattechniquesselection": string
  "combattechniquecounter": List<string>
  "combattechniquessecondselection": string
  "skillsselection": string
  "cantripsfromlist": string
  "cantripcounter": List<string>
  "thetwelveblessings": string
  "thetwelveblessingsexceptions": string
  "suggestedadvantages": string
  "suggesteddisadvantages": string
  "unsuitableadvantages": string
  "unsuitabledisadvantages": string
  "variants": string
  "insteadof": string
  "selectattributeadjustment": string
  "buyculturalpackage": string
  "selectnativetongue": string
  "buyscript": string
  "selectscript": string
  "combattechniquessecondcounter": List<string>
  "ofthefollowingcombattechniques": string
  "cursestotalingapleft": string
  "languagesandliteracytotalingapleft": string
  "applicationforskillspecialization": string
  "skillselectiongroups": List<string>
  "skillselectionap": string
  "complete": string
  "attributetotal": string
  "modifier": string
  "losttotal": string
  "lifepointslostpermanently.short": string
  "lifepointslostpermanently": string
  "arcaneenergylostpermanently": string
  "arcaneenergylostpermanently.short": string
  "karmapointslostpermanently": string
  "karmapointslostpermanently.short": string
  "afraidof": string
  "immunityto": string
  "hatredof": string
  "rule": string
  "extendedcombatspecialabilities": string
  "extendedmagicalspecialabilities": string
  "extendedblessedtspecialabilities": string
  "penalty": string
  "level": string
  "perlevel": string
  "volume": string
  "bindingcost": string
  "protectivecircle": string
  "wardingcircle": string
  "actions": string
  "racecultureorprofessionrequiresautomaticorsuggested": string
  "advantage": string
  "disadvantage": string
  "primaryattributeofthetradition": string
  "knowledgeofspell": string
  "knowledgeofliturgicalchant": string
  "appropriatecombatstylespecialability": string
  "appropriatemagicalstylespecialability": string
  "appropriateblessedstylespecialability": string
  "customcost": string
  "customcostfor": string
  "skillgroups": List<string>
  "newapplications": string
  "applications": string
  "tools": string
  "quality": string
  "failedcheck": string
  "criticalsuccess": string
  "botch": string
  "improvementcost": string
  "common": string
  "uncommon": string
  "combattechniquegroups": List<string>
  "special": string
  "specialabilitygroups": List<string>
  "combatspecialabilitygroups": List<string>
  "spellgroups": List<string>
  "cantrip": string
  "propertylist": List<string>
  "magicaltraditions": List<string>
  "castingtime": string
  "ritualtime": string
  "aecost": string
  "range": string
  "duration": string
  "targetcategory": string
  "property": string
  "traditions": string
  "lengthoftime": string
  "musictradition": string
  "liturgicalchantgroups": List<string>
  "blessing": string
  "aspectlist": List<string>
  "blessedtraditions": List<string>
  "liturgicaltime": string
  "ceremonialtime": string
  "kpcost": string
  "ducates.short": string
  "silverthalers.short": string
  "halers.short": string
  "kreutzers.short": string
  "initialstartingwealth": string
  "priceunit": string
  "itemgroups": List<string>
  "armortypes": List<string>
  "damage": string
  "primaryattributeanddamagethreshold.short": string
  "length": string
  "lengthunit": string
  "range.short": string
  "edititem": string
  "createitem": string
  "number": string
  "itemgroup": string
  "itemgrouphint": string
  "improvisedweapon": string
  "improvisedweapongroup": string
  "template": string
  "primaryattribute.withshort": string
  "primaryattribute.short": string
  "damagethreshold": string
  "separatedamagethresholds": string
  "breakingpointratingmodifier.short": string
  "damaged": string
  "lengthwithunit": string
  "parryingweapon": string
  "twohandedweapon": string
  "rangeclose": string
  "rangemedium": string
  "rangefar": string
  "armortype": string
  "sturdinessmodifier.short": string
  "wear": string
  "hitzonearmoronly": string
  "movementmodifier.short": string
  "initiativemodifier.short": string
  "additionalpenalties": string
  "edithitzonearmor": string
  "createhitzonearmor": string
  "head": string
  "torso": string
  "leftarm": string
  "rightarm": string
  "leftleg": string
  "rightleg": string
  "rulemechanics": string
  "weaponadvantage": string
  "weapondisadvantage": string
  "armoradvantage": string
  "armordisadvantage": string
  "sizecategory": string
  "type": string
  "apspent.short": string
  "attacks": string
  "image": string
  "error": string
  "errorcode": string
  "loadtableserror": string
  "saveconfigerror": string
  "saveheroeserror": string
  "exportheroasjson": string
  "herosaved": string
  "exportheroerror": string
  "printcharactersheettopdf": string
  "pdfsaved": string
  "pdfsaveerror": string
  "pdfcreationerror": string
  "importheroerror": string
  "allsaved": string
  "everythingelsesaved": string
  "emptylist": string
  "musictraditions": List<string>
  "notenoughap": string
  "notenoughap.text": string
  "reachedlimit": string
  "reachedaplimit": string
  "magicaladvantages": string
  "blessedadvantages": string
  "magicaldisadvantages": string
  "blesseddisadvantages": string
  "remove": string
  "removeenergypointslostpermanently": string
  "removeenergypointslostpermanentlyinputhint": string
  "group": string
  "skillrating": string
  "combattechniquerating": string
  "attack": string
  "parry": string
  "checkmodifier.short": string
  "checkmodifier": string
  "unfamiliartraditions": string
  "spellextensions": string
  "liturgicalchantextensions": string
  "enableeditingheroaftercreationphase": string
  "allcombattechniques": string
  "newversionavailable": string
  "newversionavailable.text": string
  "newversionavailable.textwithsize": string
  "update": string
  "nonewversionavailable": string
  "nonewversionavailable.text": string
  "downloadupdate": string
  "attributeadjustmentselection": string
  "aboutapp": string
  "preferences": string
  "quit": string
  "edit": string
  "view": string
  "enableallrulebooks": string
  "races": string
  "cultures": string
  "professions": string
  "items": string
  "allskills": string
  "allspecialabilities": string
  "allspells": string
  "allliturgicalchants": string
  "allitemtemplates": string
  "chooseacategory": string
  "chooseacategorytodisplayalist": string
  "emptylistnoresults": string
}

export type L10nKey = keyof L10n

export type L10nRecord = Record<L10n>

export const L10n =
  fromDefault<L10n> ({
    "id": "",
    "lastchanges": "",
    "heroes": "",
    "groups": "",
    "wiki": "",
    "faq": "",
    "about": "",
    "imprint": "",
    "thirdpartylicenses": "",
    "profile": "",
    "overview": "",
    "personaldata": "",
    "charactersheet": "",
    "pact": "",
    "rules": "",
    "racecultureandprofession": "",
    "race": "",
    "culture": "",
    "profession": "",
    "attributes": "",
    "advantagesanddisadvantages": "",
    "advantages": "",
    "disadvantages": "",
    "abilities": "",
    "skills": "",
    "combattechniques": "",
    "specialabilities": "",
    "spells": "",
    "liturgicalchants": "",
    "belongings": "",
    "equipment": "",
    "hitzonearmor": "",
    "pets": "",
    "adventurepoints.short": "",
    "adventurepoint": "",
    "adventurepoints": "",
    "totalap": "",
    "apspent": "",
    "apspentonadvantages": "",
    "apspentonmagicadvantages": "",
    "apspentonblessedadvantages": "",
    "apspentondisadvantages": "",
    "apspentonmagicdisadvantages": "",
    "apspentonblesseddisadvantages": "",
    "apspentonrace": "",
    "apspentonprofession": "",
    "apspentonattributes": "",
    "apspentonskills": "",
    "apspentoncombattechniques": "",
    "apspentonspells": "",
    "apspentoncantrips": "",
    "apspentonliturgicalchants": "",
    "apspentonblessings": "",
    "apspentonspecialabilities": "",
    "apspentonenergies": "",
    "search": "",
    "sortalphabetically": "",
    "sortbydatemodified": "",
    "sortbygroup": "",
    "sortbyimprovementcost": "",
    "sortbyproperty": "",
    "sortbylocation": "",
    "sortbycost": "",
    "sortbyweight": "",
    "showactivated": "",
    "none": "",
    "save": "",
    "done": "",
    "delete": "",
    "yes": "",
    "no": "",
    "ok": "",
    "cancel": "",
    "copy": "",
    "create": "",
    "import": "",
    "allheroes": "",
    "ownheroes": "",
    "sharedheroes": "",
    "unsavedhero": "",
    "unsavedactions": "",
    "unsavedactions.text": "",
    "deletehero": "",
    "deletehero.text": "",
    "herocreation": "",
    "start": "",
    "nameofhero": "",
    "selectsex": "",
    "male": "",
    "female": "",
    "selectexperiencelevel": "",
    "magic": "",
    "rituals": "",
    "cantrips": "",
    "curses": "",
    "elvenmagicalsongs": "",
    "magicalmelodies": "",
    "magicaldances": "",
    "editprofessionname": "",
    "addadventurepoints": "",
    "endherocreation": "",
    "add": "",
    "changeheroavatar": "",
    "apply": "",
    "selectfile": "",
    "changeheroavatar.invalidfile": "",
    "family": "",
    "placeofbirth": "",
    "dateofbirth": "",
    "age": "",
    "haircolor": "",
    "eyecolor": "",
    "size": "",
    "weight": "",
    "title": "",
    "socialstatus": "",
    "characteristics": "",
    "otherinfo": "",
    "cultureareaknowledge": "",
    "socialstatuses": List.empty,
    "haircolors": List.empty,
    "eyecolors": List.empty,
    "pactcategory": "",
    "nopact": "",
    "pactcategories": List.empty,
    "pactlevel": "",
    "fairytype": "",
    "fairytypes": List.empty,
    "domain": "",
    "userdefined": "",
    "fairydomains": List.empty,
    "settings": "",
    "language": "",
    "systemlanguage": "",
    "languagehint": "",
    "theme": "",
    "dark": "",
    "light": "",
    "showanimations": "",
    "close": "",
    "checkforupdates": "",
    "printtopdf": "",
    "showattributevalues": "",
    "name": "",
    "sex": "",
    "experiencelevel": "",
    "apcollected": "",
    "avatar": "",
    "generalspecialabilites": "",
    "fatepoints": "",
    "value": "",
    "bonuspenalty": "",
    "bonus": "",
    "bought": "",
    "max": "",
    "current": "",
    "basestat": "",
    "permanentlylostboughtback": "",
    "gamestats": "",
    "skill": "",
    "check": "",
    "encumbrance.short": "",
    "improvementcost.short": "",
    "skillrating.short": "",
    "routinechecks.short": "",
    "notes": "",
    "maybe": "",
    "physicalskills": "",
    "page.short": "",
    "socialskills": "",
    "natureskills": "",
    "knowledgeskills": "",
    "craftskills": "",
    "languages": "",
    "nativetongue.short": "",
    "knownscripts": "",
    "routinechecks": "",
    "routinechecks.text1": "",
    "routinechecks.text2": "",
    "routinechecks.text3": "",
    "routinechecks.text4": "",
    "checkmod": "",
    "neededsr": "",
    "from": "",
    "qualitylevels": "",
    "skillpoints.splitted": "",
    "qualitylevel.splitted": "",
    "attributemodifiers": "",
    "combat": "",
    "primaryattribute.medium": "",
    "combattechniquerating.short": "",
    "attackrangecombat.short": "",
    "parry.short": "",
    "lifepoints": "",
    "pain1": "",
    "pain2": "",
    "pain3": "",
    "pain4": "",
    "dying": "",
    "closecombatweapons": "",
    "weapon": "",
    "combattechnique": "",
    "damagebonus.medium": "",
    "damagepoints.short": "",
    "attackparrymodifier.short": "",
    "reach": "",
    "reachlabels": List.empty,
    "breakingpointrating.short": "",
    "damaged.short": "",
    "attack.short": "",
    "weightunit.short": "",
    "rangedcombatweapons": "",
    "reloadtime": "",
    "rangebrackets": "",
    "rangedcombat": "",
    "ammunition": "",
    "armors": "",
    "armor": "",
    "protection.short": "",
    "sturdinessrating.short": "",
    "wear.short": "",
    "movementinitiative": "",
    "carriedwhereexamples": "",
    "head.short": "",
    "torso.short": "",
    "leftarm.short": "",
    "rightarm.short": "",
    "leftleg.short": "",
    "rightleg.short": "",
    "shieldparryingweapon": "",
    "structurepoints.short": "",
    "dice.short": "",
    "actions.short": "",
    "combatspecialabilities": "",
    "conditions": "",
    "animosity": "",
    "encumbrance": "",
    "intoxicated": "",
    "stupor": "",
    "rapture": "",
    "fear": "",
    "paralysis": "",
    "pain": "",
    "confusion": "",
    "states": "",
    "immobilized": "",
    "unconscious": "",
    "blind": "",
    "bloodlust": "",
    "burning": "",
    "cramped": "",
    "bound": "",
    "incapacitated": "",
    "diseased": "",
    "prone": "",
    "misfortune": "",
    "rage": "",
    "mute": "",
    "deaf": "",
    "surprised": "",
    "badsmell": "",
    "invisible": "",
    "poisoned": "",
    "petrified": "",
    "item": "",
    "number.short": "",
    "price": "",
    "carriedwhere": "",
    "total": "",
    "purse": "",
    "ducats": "",
    "silverthalers": "",
    "halers": "",
    "kreutzers": "",
    "gems": "",
    "jewelry": "",
    "other": "",
    "carryingcapacity": "",
    "carryingcapacitycalc": "",
    "carryingcapacitylabel": "",
    "animal": "",
    "spellsandrituals": "",
    "aemax": "",
    "spellorritual": "",
    "cost": "",
    "castingtime.splitted": "",
    "range.splitted": "",
    "duration.splitted": "",
    "effect": "",
    "primaryattribute": "",
    "tradition": "",
    "magicalspecialabilities": "",
    "liturgicalchantsandceremonies": "",
    "kpmax": "",
    "liturgicaltime.splitted": "",
    "aspect": "",
    "aspects.oneormore": "",
    "blessedspecialabilities": "",
    "blessings": "",
    "rulebase": "",
    "optionalrules": "",
    "maximumattributescores": "",
    "higherdefensestats": "",
    "languagespecializations": "",
    "lifepoints.short": "",
    "lifepointscalc": "",
    "arcaneenergy": "",
    "arcaneenergy.short": "",
    "arcaneenergycalc": "",
    "karmapoints": "",
    "karmapoints.short": "",
    "karmapointscalc": "",
    "spirit": "",
    "spirit.short": "",
    "spiritcalc": "",
    "toughness": "",
    "toughness.short": "",
    "toughnesscalc": "",
    "dodge": "",
    "dodge.short": "",
    "dodgecalc": "",
    "initiative": "",
    "initiative.short": "",
    "initiativecalc": "",
    "movement": "",
    "movement.short": "",
    "movementcalc": "",
    "woundthreshold": "",
    "woundthreshold.short": "",
    "woundthresholdcalc": "",
    "boughtback": "",
    "spent": "",
    "select": "",
    "next": "",
    "showvalues": "",
    "apvalue": "",
    "lifepointbasevalue": "",
    "spiritbasevalue": "",
    "toughnessbasevalue": "",
    "movementbasevalue": "",
    "attributeadjustments": "",
    "commoncultures": "",
    "automaticadvantages": "",
    "stronglyrecommendedadvantages": "",
    "stronglyrecommendeddisadvantages": "",
    "commonadvantages": "",
    "commondisadvantages": "",
    "uncommonadvantages": "",
    "uncommondisadvantages": "",
    "allcultures": "",
    "or": "",
    "script": "",
    "areaknowledge": "",
    "commonmundaneprofessions": "",
    "commonmagicprofessions": "",
    "commonblessedprofessions": "",
    "commonskills": "",
    "uncommonskills": "",
    "commonnames": "",
    "culturalpackageap": "",
    "allprofessions": "",
    "commonprofessions": "",
    "allprofessiongroups": "",
    "mundaneprofessions": "",
    "magicalprofessions": "",
    "blessedprofessions": "",
    "alwaysshowprofessionsfromextensions": "",
    "novariant": "",
    "ownprofession": "",
    "prerequisites": "",
    "languagesandliteracytotalingap": "",
    "skillspecialization": "",
    "cursestotalingap": "",
    "combattechniquesselection": "",
    "combattechniquecounter": List.empty,
    "combattechniquessecondselection": "",
    "skillsselection": "",
    "cantripsfromlist": "",
    "cantripcounter": List.empty,
    "thetwelveblessings": "",
    "thetwelveblessingsexceptions": "",
    "suggestedadvantages": "",
    "suggesteddisadvantages": "",
    "unsuitableadvantages": "",
    "unsuitabledisadvantages": "",
    "variants": "",
    "insteadof": "",
    "selectattributeadjustment": "",
    "buyculturalpackage": "",
    "selectnativetongue": "",
    "buyscript": "",
    "selectscript": "",
    "combattechniquessecondcounter": List.empty,
    "ofthefollowingcombattechniques": "",
    "cursestotalingapleft": "",
    "languagesandliteracytotalingapleft": "",
    "applicationforskillspecialization": "",
    "skillselectiongroups": List.empty,
    "skillselectionap": "",
    "complete": "",
    "attributetotal": "",
    "modifier": "",
    "losttotal": "",
    "lifepointslostpermanently.short": "",
    "lifepointslostpermanently": "",
    "arcaneenergylostpermanently": "",
    "arcaneenergylostpermanently.short": "",
    "karmapointslostpermanently": "",
    "karmapointslostpermanently.short": "",
    "afraidof": "",
    "immunityto": "",
    "hatredof": "",
    "rule": "",
    "extendedcombatspecialabilities": "",
    "extendedmagicalspecialabilities": "",
    "extendedblessedtspecialabilities": "",
    "penalty": "",
    "level": "",
    "perlevel": "",
    "volume": "",
    "bindingcost": "",
    "protectivecircle": "",
    "wardingcircle": "",
    "actions": "",
    "racecultureorprofessionrequiresautomaticorsuggested": "",
    "advantage": "",
    "disadvantage": "",
    "primaryattributeofthetradition": "",
    "knowledgeofspell": "",
    "knowledgeofliturgicalchant": "",
    "appropriatecombatstylespecialability": "",
    "appropriatemagicalstylespecialability": "",
    "appropriateblessedstylespecialability": "",
    "customcost": "",
    "customcostfor": "",
    "skillgroups": List.empty,
    "newapplications": "",
    "applications": "",
    "tools": "",
    "quality": "",
    "failedcheck": "",
    "criticalsuccess": "",
    "botch": "",
    "improvementcost": "",
    "common": "",
    "uncommon": "",
    "combattechniquegroups": List.empty,
    "special": "",
    "specialabilitygroups": List.empty,
    "combatspecialabilitygroups": List.empty,
    "spellgroups": List.empty,
    "cantrip": "",
    "propertylist": List.empty,
    "magicaltraditions": List.empty,
    "castingtime": "",
    "ritualtime": "",
    "aecost": "",
    "range": "",
    "duration": "",
    "targetcategory": "",
    "property": "",
    "traditions": "",
    "lengthoftime": "",
    "musictradition": "",
    "liturgicalchantgroups": List.empty,
    "blessing": "",
    "aspectlist": List.empty,
    "blessedtraditions": List.empty,
    "liturgicaltime": "",
    "ceremonialtime": "",
    "kpcost": "",
    "ducates.short": "",
    "silverthalers.short": "",
    "halers.short": "",
    "kreutzers.short": "",
    "initialstartingwealth": "",
    "priceunit": "",
    "itemgroups": List.empty,
    "armortypes": List.empty,
    "damage": "",
    "primaryattributeanddamagethreshold.short": "",
    "length": "",
    "lengthunit": "",
    "range.short": "",
    "edititem": "",
    "createitem": "",
    "number": "",
    "itemgroup": "",
    "itemgrouphint": "",
    "improvisedweapon": "",
    "improvisedweapongroup": "",
    "template": "",
    "primaryattribute.withshort": "",
    "primaryattribute.short": "",
    "damagethreshold": "",
    "separatedamagethresholds": "",
    "breakingpointratingmodifier.short": "",
    "damaged": "",
    "lengthwithunit": "",
    "parryingweapon": "",
    "twohandedweapon": "",
    "rangeclose": "",
    "rangemedium": "",
    "rangefar": "",
    "armortype": "",
    "sturdinessmodifier.short": "",
    "wear": "",
    "hitzonearmoronly": "",
    "movementmodifier.short": "",
    "initiativemodifier.short": "",
    "additionalpenalties": "",
    "edithitzonearmor": "",
    "createhitzonearmor": "",
    "head": "",
    "torso": "",
    "leftarm": "",
    "rightarm": "",
    "leftleg": "",
    "rightleg": "",
    "rulemechanics": "",
    "weaponadvantage": "",
    "weapondisadvantage": "",
    "armoradvantage": "",
    "armordisadvantage": "",
    "sizecategory": "",
    "type": "",
    "apspent.short": "",
    "attacks": "",
    "image": "",
    "error": "",
    "errorcode": "",
    "loadtableserror": "",
    "saveconfigerror": "",
    "saveheroeserror": "",
    "exportheroasjson": "",
    "herosaved": "",
    "exportheroerror": "",
    "printcharactersheettopdf": "",
    "pdfsaved": "",
    "pdfsaveerror": "",
    "pdfcreationerror": "",
    "importheroerror": "",
    "allsaved": "",
    "everythingelsesaved": "",
    "emptylist": "",
    "musictraditions": List.empty,
    "notenoughap": "",
    "notenoughap.text": "",
    "reachedlimit": "",
    "reachedaplimit": "",
    "magicaladvantages": "",
    "blessedadvantages": "",
    "magicaldisadvantages": "",
    "blesseddisadvantages": "",
    "remove": "",
    "removeenergypointslostpermanently": "",
    "removeenergypointslostpermanentlyinputhint": "",
    "group": "",
    "skillrating": "",
    "combattechniquerating": "",
    "attack": "",
    "parry": "",
    "checkmodifier.short": "",
    "checkmodifier": "",
    "unfamiliartraditions": "",
    "spellextensions": "",
    "liturgicalchantextensions": "",
    "enableeditingheroaftercreationphase": "",
    "allcombattechniques": "",
    "newversionavailable": "",
    "newversionavailable.text": "",
    "newversionavailable.textwithsize": "",
    "update": "",
    "nonewversionavailable": "",
    "nonewversionavailable.text": "",
    "downloadupdate": "",
    "attributeadjustmentselection": "",
    "aboutapp": "",
    "preferences": "",
    "quit": "",
    "edit": "",
    "view": "",
    "enableallrulebooks": "",
    "races": "",
    "cultures": "",
    "professions": "",
    "items": "",
    "allskills": "",
    "allspecialabilities": "",
    "allspells": "",
    "allliturgicalchants": "",
    "allitemtemplates": "",
    "chooseacategory": "",
    "chooseacategorytodisplayalist": "",
    "emptylistnoresults": "",
  })
