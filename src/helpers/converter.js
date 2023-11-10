const convertInput = function (dataName) {
    let input = ''
    if (dataName) {
      switch (dataName) {
        case 'Baltic_Main':
          input = 'Erangel (Remastered)'
          break
        case 'Chimera_Main':
          input = 'Paramo'
          break
        case 'Desert_Main':
          input = 'Miramar'
          break
        case 'DihorOtok_Main':
          input = 'Vikendi'
          break
        case 'Erangel_Main':
          input = 'Erangel'
          break
        case 'Heaven_Main':
          input = 'Haven'
          break
        case 'Kiki_Main':
          input = 'Deston'
          break
        case 'Range_Main':
          input = 'Camp Jackal'
          break
        case 'Savage_Main':
          input = 'Sanhok'
          break
        case 'Summerland_Main':
          input = 'Karakin'
          break
        case 'Tiger_Main':
          input = 'Taego'
          break
        default:
          break
      }
    }
    return input
  }

//   {
//     "Damage_Blizzard": "Blizzard Damage",
//     "Damage_BlueZone": "Bluezone Damage",
//     "Damage_BlueZoneGrenade": "Bluezone Grenade Damage",
//     "Damage_DronePackage": "Drone Damage",
//     "Damage_Drown": "Drowning Damage",
//     "Damage_Explosion_Aircraft": "Aircraft Explosion Damage",
//     "Damage_Explosion_BlackZone": "Blackzone Damage",
//     "Damage_Explosion_Breach": "Breach Explosion Damage",
//     "Damage_Explosion_C4": "C4 Explosion Damage",
//     "Damage_Explosion_GasPump": "Gas Pump Explosion",
//     "Damage_Explosion_Grenade": "Grenade Explosion Damage",
//     "Damage_Explosion_JerryCan": "Jerrycan Explosion Damage",
//     "Damage_Explosion_LootTruck": "Loot Truck Explosion Damage",
//     "Damage_Explosion_Mortar": "Mortar Explosion",
//     "Damage_Explosion_PanzerFaustBackBlast": "Panzerfaust Backblast Damage",
//     "Damage_Explosion_PanzerFaustWarhead": "Panzerfaust Explosion Damage",
//     "Damage_Explosion_PanzerFaustWarheadVehicleArmorPenetration": "Panzerfaust Explosion Damage",
//     "Damage_Explosion_PropaneTank": "Propane Tank",
//     "Damage_Explosion_RedZone": "Redzone Explosion Damage",
//     "Damage_Explosion_StickyBomb": "Sticky Bomb Explosion Damage",
//     "Damage_Explosion_Vehicle": "Vehicle Explosion Damage",
//     "Damage_Groggy": "Bleed out damage",
//     "Damage_Gun": "Gun Damage",
//     "Damage_Gun_Penetrate_BRDM": "BRDM",
//     "Damage_HelicopterHit": "Pillar Scout Helicopter Damage",
//     "Damage_Instant_Fall": "Fall Damage",
//     "Damage_KillTruckHit": "Kill Truck Hit",
//     "Damage_KillTruckTurret": "Kill Truck Turret Damage",
//     "Damage_Lava": "Lava Damage",
//     "Damage_LootTruckHit": "Loot Truck Damage",
//     "Damage_Melee": "Melee Damage",
//     "Damage_MeleeThrow": "Melee Throw Damage",
//     "Damage_Molotov": "Molotov Damage",
//     "Damage_Monster": "Monster Damage",
//     "Damage_None": "No Damage",
//     "Damage_Punch": "Punch Damage",
//     "Damage_ShipHit": "Ferry Damage",
//     "Damage_TrainHit": "Train Damage",
//     "Damage_VehicleCrashHit": "Vehicle Crash Damage",
//     "Damage_VehicleHit": "Vehicle Damage",
//     "SpikeTrap": "Spike Trap damage"
//   }
  
  export {
    convertInput
  }
  