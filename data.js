var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.3390190407977691,
        "pitch": 0.1906055792604473,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -2.2638146144779814,
          "pitch": 0.2631392263180423,
          "rotation": 0,
          "target": "1-pantallas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pantallas",
      "name": "Pantallas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.4062634315128797,
        "pitch": 0.21600254035773858,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -3.0454393397902493,
          "pitch": 0.28971605055650507,
          "rotation": 0,
          "target": "2-2"
        },
        {
          "yaw": -0.012555588732196199,
          "pitch": 0.327893495036335,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-2",
      "name": "2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.431338552387615,
          "pitch": 0.3434878395201686,
          "rotation": 0,
          "target": "3-3"
        },
        {
          "yaw": 1.7255631693001696,
          "pitch": 0.2552482984396516,
          "rotation": 0,
          "target": "1-pantallas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-3",
      "name": "3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.6113951778812972,
        "pitch": -0.002597375922803735,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 1.1063725298338358,
          "pitch": 0.278237590529665,
          "rotation": 0,
          "target": "4-4"
        },
        {
          "yaw": -2.871660281166271,
          "pitch": 0.3420732748538384,
          "rotation": 5.497787143782138,
          "target": "2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-4",
      "name": "4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6970947543039578,
          "pitch": 0.3791230915426329,
          "rotation": 0,
          "target": "5-sala-naranja"
        },
        {
          "yaw": -1.6355114461744513,
          "pitch": 0.5171829275551154,
          "rotation": 5.497787143782138,
          "target": "6-sala-amarilla"
        },
        {
          "yaw": 2.3188312498035364,
          "pitch": 0.3544211039026699,
          "rotation": 0,
          "target": "3-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sala-naranja",
      "name": "Sala naranja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "yaw": 1.2841446121399773,
        "pitch": 0.1937402028080033,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -1.6057283860847473,
          "pitch": 0.29385641008570396,
          "rotation": 5.497787143782138,
          "target": "4-4"
        },
        {
          "yaw": -0.7799713576741354,
          "pitch": 0.27012854033562306,
          "rotation": 0,
          "target": "6-sala-amarilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sala-amarilla",
      "name": "Sala amarilla",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3969024358590403,
          "pitch": 0.22538247270585288,
          "rotation": 0,
          "target": "7-pasillo"
        },
        {
          "yaw": -1.6396426713807841,
          "pitch": 0.3678898037064542,
          "rotation": 0.7853981633974483,
          "target": "9-cancha"
        },
        {
          "yaw": 0.990761013878469,
          "pitch": 0.2041275043936892,
          "rotation": 5.497787143782138,
          "target": "11-gimnasio"
        },
        {
          "yaw": -2.277979068380784,
          "pitch": -0.019543348032899033,
          "rotation": 6.283185307179586,
          "target": "17-sala-azul-1"
        },
        {
          "yaw": -2.652477296523701,
          "pitch": 0.25476404652881257,
          "rotation": 0,
          "target": "4-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-pasillo",
      "name": "Pasillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7593561693457769,
          "pitch": 0.6972064815728132,
          "rotation": 0,
          "target": "9-cancha"
        },
        {
          "yaw": -0.11439002730113401,
          "pitch": 0.2642340579138107,
          "rotation": 0,
          "target": "8-alberca-de-foami"
        },
        {
          "yaw": 3.0751158539286747,
          "pitch": 0.24276317478693343,
          "rotation": 0,
          "target": "6-sala-amarilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-alberca-de-foami",
      "name": "Alberca de foami",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.2315953808638227,
        "pitch": 0.348575534876046,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -0.2646240071307062,
          "pitch": 0.26519715648304754,
          "rotation": 0,
          "target": "7-pasillo"
        },
        {
          "yaw": 0.5707221450926792,
          "pitch": 0.42014079310468233,
          "rotation": 0.7853981633974483,
          "target": "9-cancha"
        },
        {
          "yaw": -1.6503531125178679,
          "pitch": 0.21430179365669133,
          "rotation": 0.7853981633974483,
          "target": "10-trampolines"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cancha",
      "name": "Cancha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.3855501312336482,
        "pitch": 0.124556465326922,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 1.715872376242566,
          "pitch": 0.06066327931148763,
          "rotation": 0,
          "target": "8-alberca-de-foami"
        },
        {
          "yaw": -3.1352227201849274,
          "pitch": 0.08020600569023095,
          "rotation": 0,
          "target": "6-sala-amarilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-trampolines",
      "name": "Trampolines",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.6215471203907335,
        "pitch": 0.25115313611742707,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": -1.7070448022480385,
          "pitch": 0.20379011806276637,
          "rotation": 0,
          "target": "11-gimnasio"
        },
        {
          "yaw": 0.5562123024869425,
          "pitch": 0.18422368581280324,
          "rotation": 5.497787143782138,
          "target": "8-alberca-de-foami"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-gimnasio",
      "name": "Gimnasio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7773075457044492,
          "pitch": 0.2868725975484807,
          "rotation": 0,
          "target": "10-trampolines"
        },
        {
          "yaw": -0.9426580686281927,
          "pitch": 0.20338880518852065,
          "rotation": 0,
          "target": "6-sala-amarilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-sala-morada",
      "name": "Sala morada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20572384936415133,
          "pitch": 0.20571715665344037,
          "rotation": 11.780972450961727,
          "target": "13-proyecciones"
        },
        {
          "yaw": 1.6681763640097813,
          "pitch": 0.8233042053808663,
          "rotation": 0,
          "target": "6-sala-amarilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-proyecciones",
      "name": "Proyecciones",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.19080403763658538,
        "pitch": 0.17538681087596153,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 0.33582300034402124,
          "pitch": 0.15620182163214302,
          "rotation": 0,
          "target": "14-descanso-"
        },
        {
          "yaw": 1.2727618059903172,
          "pitch": 1.0314776944345319,
          "rotation": 0.7853981633974483,
          "target": "12-sala-morada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-descanso-",
      "name": "Descanso ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.47362893505041725,
        "pitch": 0.1882562126189704,
        "fov": 1.3874071810897723
      },
      "linkHotspots": [
        {
          "yaw": -2.0741574142688037,
          "pitch": 0.3698348695872813,
          "rotation": 0,
          "target": "13-proyecciones"
        },
        {
          "yaw": 0.02916836067179851,
          "pitch": 0.04474674213948404,
          "rotation": 0,
          "target": "15-sala-verde-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-sala-verde-1",
      "name": "Sala verde 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.079474927856138,
        "pitch": 0.2332638048128004,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 3.079474927856138,
          "pitch": 0.2332638048128004,
          "rotation": 0,
          "target": "14-descanso-"
        },
        {
          "yaw": 0.5298921137529486,
          "pitch": 0.19226337049017772,
          "rotation": 0,
          "target": "16-sala-verde-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-sala-verde-2",
      "name": "Sala verde 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03812354994520106,
          "pitch": 0.18583821173088388,
          "rotation": 0,
          "target": "15-sala-verde-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-sala-azul-1",
      "name": "Sala azul 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 0.29674679534153015,
          "pitch": 0.22405137743253967,
          "rotation": 0,
          "target": "18-sala-azul-2"
        },
        {
          "yaw": 3.0339240746241076,
          "pitch": 0.20525221485863732,
          "rotation": 0,
          "target": "12-sala-morada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-sala-azul-2",
      "name": "Sala azul 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.358471006608003,
        "pitch": 0.25546543559717705,
        "fov": 1.3880641913178242
      },
      "linkHotspots": [
        {
          "yaw": 1.53577492180714,
          "pitch": 0.3771812993170478,
          "rotation": 0,
          "target": "17-sala-azul-1"
        },
        {
          "yaw": -1.304443906164476,
          "pitch": 0.43804209972852703,
          "rotation": 0,
          "target": "19-sala-azul-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-sala-azul-3",
      "name": "Sala azul 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6461906076149058,
          "pitch": 0.25437375451751976,
          "rotation": 0,
          "target": "17-sala-azul-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Panorama TOSKA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
