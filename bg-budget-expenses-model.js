{
  "dataset": {
    "model_rev": 1,
    "name": "bg-budget",
    "unique_keys": ["id"], 	
    "label": "Разходна част на бюджета за 2011 година",
    "description": "Визуализация на разходната част на Бюджета на Република България за 2011 година",
    "currency": "BGN"
  },

  "mapping": {
    "from": {
      "fields": [
        {"constant": "Държавата", "name": "label", "datatype": "constant"}
      ],
      "type": "entity",
      "description": "Платец",
      "label": "Платено от"
    },
    "to": {
      "fields": [
        {"constant": "Гражданите", "name": "label", "datatype": "constant"}
      ],
      "type": "entity",
      "description": "Получател",
      "label": "Платено на"
    },
    "id":{
	"type": "value",
	"column": "id",
	"datatype": "string"
    },	
    "time": {
      "type": "value",
      "label": "Budget year",
      "description": "",
      "column": "year",
      "datatype": "date"
    },
    "amount": {
      "default_value": "",
      "description": "",
      "column": "amount",
      "label": "",
      "datatype": "float",
      "type": "value"
    },

    "direction": {
      "fields": [ { "column": "direction", "datatype": "string",  "default_value": "", "constant": "",  "name": "label" }   ],
      "label": "Раздел",
      "type": "classifier",
      "description": "Направление",
      "taxonomy": "bg-budget:level:0"
    },    
    "program": {
      "fields": [ { "column": "program", "datatype": "string", "default_value": "",  "constant": "", "name": "label" } ],
      "label": "Програма",
      "type": "classifier",
      "description": "Вид",
      "taxonomy": "bg-budget:level:1"
    },
    "type": {
      "fields": [ {  "column": "type",  "datatype": "string", "default_value": "",  "constant": "",  "name": "label"   }  ],
      "label": "Тип",
      "type": "classifier",
      "description": "Текущ или капиталов",
      "taxonomy": "bg-budget:level:2"
    },
   "cofog": {
      "fields": [
        {"column": "cofog_direction_color", "datatype": "string", "name": "color", "default_value": "#555555"},
        {"column": "cofog_direction_id", "datatype": "string", "name": "name", "default_value": "unknown"}
      ],
      "label": "COFOG",
      "description": "Класификация на разходите",
      "type": "classifier",
      "taxonomy": "cofog-1"
    }
  },
  "views": [
    {
      "entity": "dataset",
      "label": "Разходи",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "direction",
      "filters": {"name": "bg-budget"}
    },
    {
      "entity": "classifier",
      "label": "Основни направления",
      "name": "default",
      "dimension": "direction",
      "breakdown": "program",
      "filters": {"taxonomy": "bg-budget:level:1" }
    },
    {
      "entity": "classifier",
      "label": "Видове в направление",
      "name": "default",
      "dimension": "program",
      "breakdown": "type",
      "filters": {"taxonomy": "bg-budget:level:2" }
    }
  ]
}



