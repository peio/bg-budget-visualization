{
  "dataset": {
    "model_rev": 1,
    "name": "bg-budget",
    "label": "Приходна част на бюджета за 2011 година",
    "description": "Визуализация на приходната част на Бюджета на Република България за 2011 година",
    "currency": "BGN"
  },
  "mapping": {
    "from": {
      "fields": [
        {"constant": "Българското общество", "name": "label", "datatype": "constant"}
      ],
      "type": "entity",
      "description": "The entity that the money was paid from",
      "label": "Paid from"
    },
    "to": {
      "fields": [
        {"constant": "Правителството на РБългария", "name": "label", "datatype": "constant"}
      ],
      "type": "entity",
      "description": "The entity that the money was paid to",
      "label": "Paid to"
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
    "section": {
      "fields": [
        {
          "column": "section",
          "datatype": "string",
          "default_value": "",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "Раздел",
      "type": "classifier",
      "description": "Основни направления",
      "taxonomy": "bg-budget:level:0"
    },
    "program": {
      "fields": [
        {
          "column": "type2",
          "datatype": "string",
          "default_value": "",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "type2",
      "type": "classifier",
      "description": "Програма",
      "taxonomy": "bg-budget:level:1"
    },
    "type": {
      "fields": [
        {
          "column": "type",
          "datatype": "string",
          "default_value": "",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "type3",
      "type": "classifier",
      "description": "Тип разход",
      "taxonomy": "bg-budget:level:2"
    },
  }
  "views": [
    {
      "entity": "dataset",
      "label": "Разходи",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "section",
      "filters": {"name": "bg-budget"}
    },
    {
      "entity": "classifier",
      "label": "Основни направления",
      "name": "default",
      "dimension": "section",
      "breakdown": "program",
      "filters": {"taxonomy": "bg-budget:level:0" }
    },
    {
      "entity": "classifier",
      "label": "Видове в направление",
      "name": "default",
      "dimension": "program",
      "breakdown": "type",
      "filters": {"taxonomy": "bg-budget:level:1" }
    },
  ]
}
