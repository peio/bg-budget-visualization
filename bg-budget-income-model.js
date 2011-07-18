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
    "type1": {
      "fields": [
        {
          "column": "type1",
          "datatype": "string",
          "default_value": "",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "type1 classification",
      "type": "classifier",
      "description": "type1 grouping to allow for an easier overview of spending.",
      "taxonomy": "bg-budget:level:0"
    },
    "type2": {
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
      "description": "type2",
      "taxonomy": "bg-budget:level:1"
    },
    "type3": {
      "fields": [
        {
          "column": "type3",
          "datatype": "string",
          "default_value": "",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "type3",
      "type": "classifier",
      "description": "type3 desc",
      "taxonomy": "bg-budget:level:2"
    },
    "type4": {
      "fields": [
        {
          "column": "type4",
          "datatype": "string",
          "default_value": "",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "type4",
      "type": "classifier",
      "description": "type4 desc",
      "taxonomy": "bg-budget:level:3"
    }
  },
  "views": [
    {
      "entity": "dataset",
      "label": "Вид приход",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "type1",
      "filters": {"name": "bg-budget"}
    },
    {
      "entity": "dataset",
      "label": "Вид приход 2",
      "name": "section",
      "dimension": "dataset",
      "breakdown": "type1",
      "filters": {"name": "bg-budget"}
    },
    {
      "entity": "classifier",
      "label": "Ниво 1",
      "name": "default",
      "dimension": "type1",
      "breakdown": "type2",
      "filters": {"taxonomy": "bg-budget:level:0" }
    },
    {
      "entity": "classifier",
      "label": "Ниво 2",
      "name": "default",
      "dimension": "type2",
      "breakdown": "type3",
      "filters": {"taxonomy": "bg-budget:level:1" }
    },
    {
      "entity": "classifier",
      "label": "Ниво 3",
      "name": "default",
      "dimension": "type3",
      "breakdown": "type4",
      "filters": {"taxonomy": "bg-budget:level:2" }
    }
  ]
}
