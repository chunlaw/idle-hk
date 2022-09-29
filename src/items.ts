import { Resources } from "./data"

export interface Item {
  val: Resources; // add absolute amount
  factor: Resources;
  dependencies: Array<keyof Items>;
  cost: Resources;
  details: string;
  type: string;
  name: string;
  seconds: number;
}

export interface Items {
  [k:string]: Item
}

export const ITEMS: Items = {
  "戶籍相伍": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "戶籍",
      "dependencies": [],
      "name": "戶籍相伍",
      "seconds": 60
  },
  "什伍連坐": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "戶籍",
      "dependencies": [
          "戶籍相伍"
      ],
      "name": "什伍連坐",
      "seconds": 60
  },
  "小家庭制": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "戶籍",
      "dependencies": [
          "戶籍相伍",
          "什伍連坐"
      ],
      "name": "小家庭制",
      "seconds": 60
  },
  "分戶令": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "戶籍",
      "dependencies": [
          "戶籍相伍",
          "什伍連坐",
          "小家庭制"
      ],
      "name": "分戶令",
      "seconds": 60
  },
  "開阡陌封疆": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "農田",
      "dependencies": [],
      "name": "開阡陌封疆",
      "seconds": 60
  },
  "廢井田": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "農田",
      "dependencies": [
          "開阡陌封疆"
      ],
      "name": "廢井田",
      "seconds": 60
  },
  "算地": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "農田",
      "dependencies": [
          "開阡陌封疆",
          "廢井田"
      ],
      "name": "算地",
      "seconds": 60
  },
  "分配政策": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "農田",
      "dependencies": [
          "開阡陌封疆",
          "廢井田",
          "算地"
      ],
      "name": "分配政策",
      "seconds": 60
  },
  "土地私有和買賣": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "農田",
      "dependencies": [
          "開阡陌封疆",
          "廢井田",
          "算地",
          "分配政策"
      ],
      "name": "土地私有和買賣",
      "seconds": 60
  },
  "村民": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "人口",
      "dependencies": [],
      "name": "村民",
      "seconds": 60
  },
  "徠民": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "人口",
      "dependencies": [
          "村民"
      ],
      "name": "徠民",
      "seconds": 60
  },
  "商鞅變法": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "學院",
      "dependencies": [],
      "name": "商鞅變法",
      "seconds": 60
  },
  "燔詩書而明法令": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "學院",
      "dependencies": [
          "商鞅變法"
      ],
      "name": "燔詩書而明法令",
      "seconds": 60
  },
  "法、術、勢": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "學院",
      "dependencies": [
          "商鞅變法"
      ],
      "name": "法、術、勢",
      "seconds": 60
  },
  "重戰": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "學院",
      "dependencies": [
          "商鞅變法"
      ],
      "name": "重戰",
      "seconds": 60
  },
  "弱民": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "學院",
      "dependencies": [
          "商鞅變法"
      ],
      "name": "弱民",
      "seconds": 60
  },
  "重農": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "學院",
      "dependencies": [
          "商鞅變法"
      ],
      "name": "重農",
      "seconds": 60
  },
  "抑商": {
      "val": {
          "money": 1
      },
      "factor": {
          "money": 1
      },
      "cost": {
          "money": 1
      },
      "details": "A",
      "type": "學院",
      "dependencies": [
          "商鞅變法"
      ],
      "name": "抑商",
      "seconds": 60
  }
}