$(document).ready(function () {

    var player = {
        level: 0,
        gold: 0,
        experience1: 0,
        experience2: 0,

        outerHead: {},
        innerHead: {},
        outerChest: {},
        innerChest: {},
        outerLegs: {},
        innerLegs: {},
        boots: {},
        gloves: {},
        ring1: {},
        ring2: {},
        ring3: {},
        ring4: {},
        ring5: {},
        ring6: {},
        ring7: {},
        ring8: {},
        ring9: {},
        ring10: {},
        accessory1: {},
        accessory2: {},
        accessory3: {},
        accessory4: {},
        accessory5: {},
        accessory6: {},
        belt: {},
        bag1: {},
        bag2: {},
        amulet: {},

        statStrength: 0,
        statDexterity: 0,
        statConstitution: 0,
        statIntelligence: 0,
        statWisdom: 0,
        statCharisma: 0,
        statLuck: 0,

        totalHealth: 0,
        totalMana: 0,
        totalStamina: 0,
        totalDodge: 0,
        totalCritical: 0,
        totalLifesteal: 0,
        totalSpellPwr: 0,
        totalHealPwr: 0,
        totalTrueDmg: 0,

        buffHealth: 0,
        buffMana: 0,
        buffStamina: 0,
        buffDodge: 0,
        buffCritical: 0,
        buffLifesteal: 0,
        buffSpellPwr: 0,
        buffHealPwr: 0,
        buffTrueDmg: 0,

        nerfHealth: 0,
        nerfMana: 0,
        nerfStamina: 0,
        nerfDodge: 0,
        nerfCritical: 0,
        nerfLifesteal: 0,
        nerfSpellPwr: 0,
        nerfHealPwr: 0,
        nerfTrueDmg: 0,
    }

    var rawHealth = math.ceiling(statConstitution * 0.2 );
    var rawMana = math.ceiling(statIntelligence * 0.2 );
    var rawStamina = math.ceiling((statStrength + statDexterity + statConstitution) * 0.2 );
    var rawDodge = math.ceiling((statStrength + statDexterity + statWisdom) * 0.2 );
    var rawCritical = math.ceiling(statStrength * 0.2 );
    var rawLifesteal = math.floor(trueFinal);
    var rawSpellPwr = math.ceiling(statIntelligence + statWisdom * 0.2 );
    var rawHealPwr = math.ceiling(statIntelligence + statWisdom * 0.2 );
    var rawTrueDmg = math.ceiling((statStrength + statDexterity + statWisdom) * 0.2 );

    var Health = 100 * player.level.buffHealth + player.totalHealth + player.rawHealth - player.nerfHealth;
    var Mana = 100 * player.level.buffMana + player.totalMana + player.rawMana - player.nerfMana;
    var Stamina = 100 * player.level.buffStamina + player.totalStamina + player.rawStamina - player.nerfStamina;
    var Dodge = 100 * player.level.buffDodge + player.totalDodge - player.nerfDodge;
    var Critical = 100 * player.level.buffCritical + player.totalCritical - player.nerfCritical;
    var Lifesteal = 100 * player.level.buffLifesteal + player.totalLifesteal - player.nerfLifesteal;
    var SpellPwr = 100 * player.level.buffSpellPwr + player.totalSpellPwr - player.nerfSpellPwr;
    var HealPwr = 100 * player.level.buffHealPwr + player.totalHealPwr - player.nerfHealPwr;
    var TrueDmg = 100 * player.level.buffTrueDmg + player.totalTrueDmg - player.nerfTrueDmg;

    var currentHealth;
    var currentMana;
    var currentStamina;
}

var itemname = "";
var itemslotnames = ["Helmet", "Ring", "Shoulder", "Body Armor", "Leg Armor", "Gloves", "Primary Hand", "Off Hand", "Boots", "Accessory 1", "Accessory 2", "Accessory 3", "Accessory 4", "Accessory 5", "Accessory 6", "Amulet", "Ring 1", "Ring 2", "Ring 3", "Ring 4", "Ring 5", "Ring 6", "Ring 7", "Ring 8", "Ring 9", "Ring 10"];

var affixes 
